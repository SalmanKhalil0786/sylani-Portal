// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbYDVZSe47LYdVVjGrX0wG__jdEeWxbD4",
  authDomain: "saylani-potal.firebaseapp.com",
  projectId: "saylani-potal",
  storageBucket: "saylani-potal.appspot.com",
  messagingSenderId: "878372843311",
  appId: "1:878372843311:web:ffa7c373acaaf0b44b3bda",
  measurementId: "G-NFTE4F96CY"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()
export const db=getFirestore(app);
export const storage = getStorage(app);


