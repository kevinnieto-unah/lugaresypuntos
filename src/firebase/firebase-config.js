
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp }   from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvj7e1UbO3ce8-L8_32LnovKlwSz1k2pw",
    authDomain: "lugares-y-puntos-118bd.firebaseapp.com",
    projectId: "lugares-y-puntos-118bd",
    storageBucket: "lugares-y-puntos-118bd.appspot.com",
    messagingSenderId: "153949387786",
    appId: "1:153949387786:web:e68ff19413b55caa0f33f3",
    measurementId: "G-FPNGKXDLEN"
};

// Initialize Firebase
export const  app= initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider()
export const db  =  getFirestore(app);


