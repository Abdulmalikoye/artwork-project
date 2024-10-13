// src/firebaseFunctions.js
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db, storage } from "./firebase/firebase";
// import { storage, db } from "./firebaseConfig";

// Function to upload image to Firebase Storage
export const handleImageUpload = async (file) => {
  const storageRef = ref(storage, `artwork-images/${file.name}`);
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};

// Function to save artwork data (including title, description, price, and imageUrl) to Firestore
export const saveImageData = async (imageData) => {
  const artCollection = collection(db, "artworks");
  await addDoc(artCollection, imageData);
};

// Function to fetch artwork data from Firestore
export const fetchArtworkData = async () => {
  const artCollection = collection(db, "artworks");
  const snapshot = await getDocs(artCollection);
  const artworks = snapshot.docs.map((doc) => doc.data());
  return artworks;
};
