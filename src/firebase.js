// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFbM6JDHvkh5LF-sHYdTsIW3GeWDp4w9E",
  authDomain: "growathon-signup-default-rtdb.firebaseio.com/",
  projectId: "growathon-signup",
  storageBucket: "growathon-signup.appspot.com",
  messagingSenderId: "1022047901509",
  appId: "1:1022047901509:web:082cb05767269a6285902c",
  measurementId: "G-72KZWC5HGH",
  databaseURL: "https://growathon-signup-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);