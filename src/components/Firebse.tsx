// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe9bB_8n3X7qgIjrP6sp_AAKqne1ilObc",
  authDomain: "todo-66871.firebaseapp.com",
  databaseURL: "https://todo-66871-default-rtdb.firebaseio.com",
  projectId: "todo-66871",
  storageBucket: "todo-66871.appspot.com",
  messagingSenderId: "795930273032",
  appId: "1:795930273032:web:bb8cbafe56379ba77b78bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
