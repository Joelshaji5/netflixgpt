// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD49QhJeAiL57Ms2-AnPoqg8ucol6GThRM",
  authDomain: "netflix-gpt-e1b51.firebaseapp.com",
  projectId: "netflix-gpt-e1b51",
  storageBucket: "netflix-gpt-e1b51.appspot.com",
  messagingSenderId: "135152380863",
  appId: "1:135152380863:web:6e11515ababf8123fa0f0a",
  measurementId: "G-DCRM3447Y0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);