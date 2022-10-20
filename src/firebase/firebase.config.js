// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADN403BxCeHK-Gt7Cm75-Aqb9HaimtIZQ",
    authDomain: "dragon-news-f1e3f.firebaseapp.com",
    projectId: "dragon-news-f1e3f",
    storageBucket: "dragon-news-f1e3f.appspot.com",
    messagingSenderId: "662266401852",
    appId: "1:662266401852:web:8311011c3ea96b194c5f39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;