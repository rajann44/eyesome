import { getDocs } from "firebase/firestore";
import { productsReference } from "../FireApp";

//Get list of all users
export const getProductDetailsFromDb = async () => {
  const productsList = await getDocs(productsReference);
  return productsList;
};
