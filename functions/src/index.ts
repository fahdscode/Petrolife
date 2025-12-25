import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// Initialize Firebase Admin
admin.initializeApp();

// CORS helper function
function setCorsHeaders(res: functions.Response) {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.set("Access-Control-Max-Age", "3600");
}

// Interface for the request body
interface CreateUserRequest {
  email: string;
  password: string;
  name: string;
  brandName: string;
  phoneNumber: string;
  address: string;
  city: string;
  vatNumber?: string;
  commercialRegistrationNumber?: string;
  logo?: string;
  taxCertificate?: string;
  commercialRegistration?: string;
  addressFile?: string;
  formattedLocation?: {
    latitude?: number;
    longitude?: number;
    address?: string;
  };
}

// Helper function to generate 8-digit reference ID
function generateRefId(): string {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
}

// Helper function to validate required fields
function validateRequest(data: CreateUserRequest): string | null {
  if (!data.email || !data.email.trim()) {
    return "Email is required";
  }
  if (!data.password || data.password.length < 6) {
    return "Password is required and must be at least 6 characters";
  }
  if (!data.name || !data.name.trim()) {
    return "Company name is required";
  }
  if (!data.brandName || !data.brandName.trim()) {
    return "Brand name is required";
  }
  if (!data.phoneNumber || !data.phoneNumber.trim()) {
    return "Phone number is required";
  }
  if (!data.address || !data.address.trim()) {
    return "Address is required";
  }
  if (!data.city || !data.city.trim()) {
    return "City is required";
  }
  return null;
}

/**
 * HTTP Cloud Function for company registration from landing page
 * Public access: allUsers with Cloud Functions Invoker role
 */
export const createCompanyUserFunction = functions.https.onRequest(
  async (req: functions.Request, res: functions.Response) => {
    // Set CORS headers for all requests
    setCorsHeaders(res);

    // Handle CORS preflight OPTIONS request
    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    // Only accept POST requests
    if (req.method !== "POST") {
      res.status(405).json({
        success: false,
        error: "Method not allowed. Use POST.",
      });
      return;
    }

    try {
        const data: CreateUserRequest = req.body;

        // Validate required fields
        const validationError = validateRequest(data);
        if (validationError) {
          res.status(400).json({
            success: false,
            error: validationError,
          });
          return;
        }

        // Create Firebase Auth user
        let userRecord: admin.auth.UserRecord;
        try {
          userRecord = await admin.auth().createUser({
            email: data.email,
            password: data.password,
            emailVerified: false,
          });
        } catch (authError: any) {
          // If user creation fails, return error without creating document
          res.status(400).json({
            success: false,
            error: authError.message || "Failed to create user account",
          });
          return;
        }

        const userId = userRecord.uid;
        const refid = generateRefId();

        try {
          // Create company document in Firestore
          const companyData = {
            name: data.name,
            brandName: data.brandName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            address: data.address,
            city: data.city,
            vatNumber: data.vatNumber || "",
            commercialRegistrationNumber: data.commercialRegistrationNumber || "",
            logo: data.logo || "",
            taxCertificate: data.taxCertificate || "",
            commercialRegistration: data.commercialRegistration || "",
            addressFile: data.addressFile || "",
            formattedLocation: data.formattedLocation || {},
            balance: 0,
            status: "approved",
            isActive: true,
            accountStatus: {
              active: true,
              text: "مفعل",
            },
            refid: refid,
            createdDate: admin.firestore.FieldValue.serverTimestamp(),
            createdUserId: data.email,
            uId: userId,
          };

          // Use userId as document ID (optional, as mentioned in requirements)
          await admin.firestore().collection("companies").doc(userId).set(companyData);

          // Create user document in users collection
          const userData = {
            uid: userId,
            email: data.email,
            display_name: data.name, // Company name as display name
            phone_number: data.phoneNumber,
            photo_url: data.logo || "",
            user_type: "company",
            created_by: data.email, // Self-registration from landing page
            created_time: admin.firestore.FieldValue.serverTimestamp(),
          };

          // Use userId as document ID for consistency
          await admin.firestore().collection("users").doc(userId).set(userData);

          // Return success response
          res.status(200).json({
            success: true,
            message: "Company registered successfully",
            userId: userId,
            refid: refid,
          });
        } catch (firestoreError: any) {
          // If Firestore creation fails, clean up the created user
          try {
            await admin.auth().deleteUser(userId);
          } catch (deleteError) {
            console.error("Failed to delete user after Firestore error:", deleteError);
          }
          throw firestoreError;
        }
      } catch (error: any) {
      console.error("Error in createCompanyUserFunction:", error);
      res.status(500).json({
        success: false,
        error: error.message || "An unexpected error occurred",
      });
    }
  }
);

