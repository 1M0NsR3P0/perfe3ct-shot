// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt6J5uXOiLkK-U_zG6bTxqg2RSX1dh3wE",
  authDomain: "perfect-shots.firebaseapp.com",
  projectId: "perfect-shots",
  storageBucket: "perfect-shots.appspot.com",
  messagingSenderId: "564246567353",
  appId: "1:564246567353:web:8d02db73e3d8f8bc7d7e68"
};

// Initialize Firebase
const apps = initializeApp(firebaseConfig);
export default apps