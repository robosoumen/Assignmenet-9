// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF23D1IgcekwYeyUqytTp09wrZmWVxrTE",
  authDomain: "kids-toy-galaxy.firebaseapp.com",
  projectId: "kids-toy-galaxy",
  storageBucket: "kids-toy-galaxy.firebasestorage.app",
  messagingSenderId: "914628196582",
  appId: "1:914628196582:web:41690d4bacf98f2b4ee327"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;