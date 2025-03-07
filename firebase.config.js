// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdkd5W3IXmKf_TxA3jFob5Kw5BXgXZJWY",
  authDomain: "liver-app-70057.firebaseapp.com",
  projectId: "liver-app-70057",
  storageBucket: "liver-app-70057.firebasestorage.app",
  messagingSenderId: "667852188875",
  appId: "1:667852188875:web:1675e4f9e48af448ceff4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);