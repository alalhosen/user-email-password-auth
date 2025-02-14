// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFqXvuCeuHssug7DvKMt7gaZUdgOmJqUs",
  authDomain: "user-email-password-auth-bff18.firebaseapp.com",
  projectId: "user-email-password-auth-bff18",
  storageBucket: "user-email-password-auth-bff18.firebasestorage.app",
  messagingSenderId: "512307922695",
  appId: "1:512307922695:web:dd8d6897a4bbd197e527a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;