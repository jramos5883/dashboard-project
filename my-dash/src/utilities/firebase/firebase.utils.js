// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCKq5JalZo7Cju2Vi89H9TVzaUSnxbYkk",
  authDomain: "dashboard-project-90dbf.firebaseapp.com",
  projectId: "dashboard-project-90dbf",
  storageBucket: "dashboard-project-90dbf.appspot.com",
  messagingSenderId: "106768487078",
  appId: "1:106768487078:web:652aaddd769287fa72da67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
