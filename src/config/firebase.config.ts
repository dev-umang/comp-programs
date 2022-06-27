// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMGWS_IplNKsaE4_O3M9wZhopRusYFS_8",
  authDomain: "comp-programs.firebaseapp.com",
  projectId: "comp-programs",
  storageBucket: "comp-programs.appspot.com",
  messagingSenderId: "631509556091",
  appId: "1:631509556091:web:36db813a15144f84a47bde",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FStore = getFirestore(app);
export const RTDB = getDatabase(app);
