// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnYyvX6VJ73G2O3BfXdmDPHz3cRuaOgmA",
  authDomain: "route-auth-context.firebaseapp.com",
  projectId: "route-auth-context",
  storageBucket: "route-auth-context.appspot.com",
  messagingSenderId: "1027205577468",
  appId: "1:1027205577468:web:bb51cd5884a6a32bb6f579"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;