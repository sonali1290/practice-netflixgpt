// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwr4vGAwFqyZ9QkIHDgszvmmt0lqVIOXo",
    authDomain: "practice-netflix-5c86d.firebaseapp.com",
    projectId: "practice-netflix-5c86d",
    storageBucket: "practice-netflix-5c86d.firebasestorage.app",
    messagingSenderId: "677824787017",
    appId: "1:677824787017:web:de188275575bf9b7940598",
    measurementId: "G-F9J22R4H3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);