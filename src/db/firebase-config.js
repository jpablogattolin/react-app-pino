
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, addDoc, query, where, collection, getDocs, Timestamp } from "firebase/firestore";


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
const db = getFirestore (app);

export async function getAllItems() {
  const miProducts = collection(db,"productos");
  const itemsSnapshot = await getDocs(miProducts);

  return itemsSnapshot.docs.map(doc => {
      return {
      ...doc.data(),
      id: doc.id
      }
})};

export async function getItemsByCategory(category){
  const miProducts = collection(getFirestore,'productos');
  const queryItem = query(miProducts, where("category", '==', category));
  const itemSnapshot = await getDocs(queryItem);

  return itemSnapshot.docs.map(doc => {
      return {
      ...doc.data(),
      id: doc.id
      }

})};

export async function getItem(id){
  const miProducts = collection(getFirestore,'productos');
  const itemRef = doc(miProducts, id);
  const itemSnapshot = await getDoc(itemRef);


      return {
      ...itemSnapshot.data(),
      id: itemSnapshot.id
      }

};

export async function createBuyOrder(orderData){
  const buyTimeStamp = Timestamp.now();
  const orderWithDate = {
      ...orderData,
      date: buyTimeStamp
  };
  const miProducts = collection(getFirestore,'buyOrders');
  const orderDoc = await addDoc(miProducts, orderWithDate);
  console.log("Orden lista con el id ",orderDoc.id);
  return orderDoc.id;   
}

export default db;