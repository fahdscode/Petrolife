import { httpsCallable } from "firebase/functions";
import { functions } from "../firebaseConfig";

/**
 * Example: How to call Firebase Cloud Functions
 * 
 * To use this:
 * 1. Deploy your functions to Firebase (in a separate functions folder)
 * 2. Import this file or the functions object from firebaseConfig
 * 3. Call your deployed functions using httpsCallable
 */

// Example: Create a typed function caller
export const callFunction = async (functionName: string, data?: any) => {
  try {
    const callableFunction = httpsCallable(functions, functionName);
    const result = await callableFunction(data);
    return result.data;
  } catch (error) {
    console.error(`Error calling function ${functionName}:`, error);
    throw error;
  }
};

// Company registration function interfaces
export interface CreateUserFunctionRequest {
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

export interface CreateUserFunctionResponse {
  success: boolean;
  message?: string;
  userId?: string;
  refid?: string;
  error?: string;
}

// Firebase project configuration
const PROJECT_ID = "car-station-6393f";
const REGION = "us-central1"; // Default region, adjust if different

/**
 * Get the HTTP Cloud Function URL
 */
const getFunctionUrl = (functionName: string): string => {
  return `https://${REGION}-${PROJECT_ID}.cloudfunctions.net/${functionName}`;
};

/**
 * Call the createCompanyUserFunction HTTP Cloud Function to register a new company from landing page
 * This is a public HTTP endpoint, so we call it directly via fetch
 */
export const createCompanyUserFunction = async (
  data: CreateUserFunctionRequest
): Promise<CreateUserFunctionResponse> => {
  try {
    const functionUrl = getFunctionUrl("createCompanyUserFunction");
    
    const response = await fetch(functionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result: CreateUserFunctionResponse = await response.json();

    if (!response.ok) {
      throw new Error(result.error || `HTTP error! status: ${response.status}`);
    }

    return result;
  } catch (error: any) {
    console.error("Error calling createCompanyUserFunction:", error);
    // Extract error message
    const errorMessage =
      error?.message ||
      error?.error ||
      "An error occurred while creating the account.";
    throw new Error(errorMessage);
  }
};

// Example usage patterns:
// 
// // Call a function without parameters
// const result = await callFunction('myFunction');
// 
// // Call a function with data
// const result = await callFunction('myFunction', { param1: 'value1' });
// 
// // Or use httpsCallable directly:
// import { httpsCallable } from "firebase/functions";
// import { functions } from "../firebaseConfig";
// const myFunction = httpsCallable(functions, 'myFunction');
// const result = await myFunction({ param: 'value' });
