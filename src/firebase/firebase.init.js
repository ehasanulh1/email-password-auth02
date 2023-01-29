// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6sQADc5HM_2kqaGjv2_0g794cHqeoDWw",
    authDomain: "email-password-auth02.firebaseapp.com",
    projectId: "email-password-auth02",
    storageBucket: "email-password-auth02.appspot.com",
    messagingSenderId: "155607079694",
    appId: "1:155607079694:web:a830cc97555224a3bed55f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;