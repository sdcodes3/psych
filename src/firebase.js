// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB37gAVX-nNBN4J0F_cwKY5GW4bxhCd-UI",
  authDomain: "psych-23a4f.firebaseapp.com",
  projectId: "psych-23a4f",
  storageBucket: "psych-23a4f.appspot.com",
  messagingSenderId: "974104198068",
  appId: "1:974104198068:web:fd129734dd8c9abda8d0e1",
  measurementId: "G-EJYED011MH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);