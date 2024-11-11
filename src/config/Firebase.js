// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcr4kE8bbs81cUwhlp1i9A35678r5Z3oE",
    authDomain: "seniordesign-2ad46.firebaseapp.com",
    projectId: "seniordesign-2ad46",
    storageBucket: "seniordesign-2ad46.firebasestorage.app",
    messagingSenderId: "583104772987",
    appId: "1:583104772987:web:7bbe40c53d296e55f85bde",
    measurementId: "G-4GB30VQ60H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };