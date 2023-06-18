import { getFirestore, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCu5ivPlLFVrClM7hKqaT8eHa9E9OSjLYI",
  authDomain: "eyesome-1d8db.firebaseapp.com",
  projectId: "eyesome-1d8db",
  storageBucket: "eyesome-1d8db.appspot.com",
  messagingSenderId: "454721572387",
  appId: "1:454721572387:web:ad31967589f735046b2b96",
};

const app = initializeApp(firebaseConfig);

//Exporting for usage across project
export const db = getFirestore(app);
export const usersReference = collection(db, "users");
export const productsReference = collection(db, "products");
export const ordersReference = collection(db, "orders");
export const auth = getAuth(app);
export default app;
