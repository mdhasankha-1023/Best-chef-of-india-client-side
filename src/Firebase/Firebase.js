// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGZEzeik2CS2SyMap3l8CIuHe6wBRa2hg",
  authDomain: "best-chef-of-india.firebaseapp.com",
  projectId: "best-chef-of-india",
  storageBucket: "best-chef-of-india.appspot.com",
  messagingSenderId: "851820608823",
  appId: "1:851820608823:web:70d1431148d9d29522eeb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;