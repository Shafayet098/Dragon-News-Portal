// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfxY9ZeEXY1FBTmZm90gSNttGgG3OprqU",
  authDomain: "dragon-news-portal-aa128.firebaseapp.com",
  projectId: "dragon-news-portal-aa128",
  storageBucket: "dragon-news-portal-aa128.firebasestorage.app",
  messagingSenderId: "469262407497",
  appId: "1:469262407497:web:06bd99eec886ac96fa6c98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);