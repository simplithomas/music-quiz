// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA_RR0jAVdwi6RN-r7CT_YoZR7MUI7nOE",
  authDomain: "musik-quiz-e23e3.firebaseapp.com",
  projectId: "musik-quiz-e23e3",
  storageBucket: "musik-quiz-e23e3.appspot.com",
  messagingSenderId: "729567582733",
  appId: "1:729567582733:web:fbbc6e7fc42f45beb3d344",
  measurementId: "G-5T1VEBV0C4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app, analytics };
