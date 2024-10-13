import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6XWpYR29_sFB-lYLp3uDIg0VXaypEjA4",
  authDomain: "artwork-project-6fdea.firebaseapp.com",
  projectId: "artwork-project-6fdea",
  storageBucket: "artwork-project-6fdea.appspot.com",
  messagingSenderId: "867177793114",
  appId: "1:867177793114:web:3b1f6ba9217c60c7e1ba63",
  measurementId: "G-2LN83VEYP4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export const storage = getStorage(app);

export { app, auth, db };
