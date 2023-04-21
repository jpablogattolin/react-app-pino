
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDfYpRr2P7IQf6fcPJxO2yor2aagmPIMLY",
  authDomain: "e-commerce-mayorista.firebaseapp.com",
  projectId: "e-commerce-mayorista",
  storageBucket: "e-commerce-mayorista.appspot.com",
  messagingSenderId: "350616463962",
  appId: "1:350616463962:web:577585c60a19063b180663"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getFirestore (app);

export default db;