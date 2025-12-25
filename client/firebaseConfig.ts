import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSsCHXOCZ5ZHQQguY_P6s72kmVcdEBSYY",
  authDomain: "car-station-6393f.firebaseapp.com",
  projectId: "car-station-6393f",
  storageBucket: "car-station-6393f.appspot.com",
  messagingSenderId: "688616261764",
  appId: "1:688616261764:web:095a419b2be0821d871ad1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);

export default app;
