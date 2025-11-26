import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1UBvjRBy1tSLk5-LpaE9S8Gf3IQioivU",
  authDomain: "ctogenie-lead.firebaseapp.com",
  projectId: "ctogenie-lead",
  storageBucket: "ctogenie-lead.firebasestorage.app",
  messagingSenderId: "876416839254",
  appId: "1:876416839254:web:39fbc107ade1eb7ca8d5f7",
  measurementId: "G-XKPPESRF4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
