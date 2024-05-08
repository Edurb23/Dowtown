// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkM0st_krLVi8A4EsMSVY3A7ZCLvSORuQ",
  authDomain: "dowtown-643c7.firebaseapp.com",
  projectId: "dowtown-643c7",
  storageBucket: "dowtown-643c7.appspot.com",
  messagingSenderId: "470174221919",
  appId: "1:470174221919:web:2fc6343495ca54bc81bdea"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase)