// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl2n7cWQyZeYfF2yVFuSiKaON9T_-suao",
  authDomain: "uswap-71d19.firebaseapp.com",
  projectId: "uswap-71d19",
  storageBucket: "uswap-71d19.firebasestorage.app",
  messagingSenderId: "406073905965",
  appId: "1:406073905965:web:a30a3ed1b3a13e82dfb9a4",
  measurementId: "G-DSZK0L3E2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);