import { useContext, useState } from "react";
import Checkout from "./Checkout";
import { CartContext } from "../../../Context/CartContext";
import {addDoc, collection, updateDoc, doc} from "firebase/firestore"
import { db } from "../../../firebaseConfig";

export const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Pepe",
    phone: "111",
    email: "asd@gmail.com",
  });

  const [orderId, setOrderId] = useState(null)

  const { cart, totalPrice, cleanBuying } = useContext(CartContext)
  let total = totalPrice()

  const submitForm = (event) => {
    event.preventDefault();

    let order = {
      buyer: userInfo,
      items: cart,
      total: total
    }

    

    const ordersCollection = collection(db, "orders")
    
    addDoc(ordersCollection, order).then( (res)=> setOrderId(res.id))

    cart.forEach((product)=>{
      
      let refDoc = doc(db, "products", product.id)

      updateDoc( refDoc , {stock: product.stock - product.quantity})
    })

    cleanBuying()

  };

  const get = (event) => {
    setUserInfo( {...userInfo, [event.target.name]: event.target.value} )
  };

  return <Checkout userInfo={userInfo} orderId={orderId} submitForm={submitForm} get={get} />;
};

export default CheckoutContainer;