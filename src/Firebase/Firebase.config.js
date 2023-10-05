// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5-qn9Mk6qU276cGjMniQkZxy3Pmz90nI",
  authDomain: "react-career-hub-2f41c.firebaseapp.com",
  projectId: "react-career-hub-2f41c",
  storageBucket: "react-career-hub-2f41c.appspot.com",
  messagingSenderId: "776897144266",
  appId: "1:776897144266:web:8e02be6c40e9807b329b33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth