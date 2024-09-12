'use client'
import CartCard from "./CartCard";
import styles from '../styles/CartList.module.css'
import { useEffect } from "react";
import { saveCartToBackend } from "../helpers/functions";


export default function CartList({ cart } ) {

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  if (!cart || !Array.isArray(cart)) {
    return <p>Your cart is empty.</p>; // or handle it however you prefer
  }

  useEffect(() => {
    saveCartToBackend(cart),
    [cart]
  })

  return (
    <div className={styles.container}>
      {cart.map((item) => {
        return (
          <CartCard
            key={item.product_id} // Use id as key, fallback to index if id is missing
            product_id={item.product_id}    // Pass id to CartCard as product_id
            quantity={item.quantity}
            name={item.name}
            price={item.price}
            quantityPerUnit={item.quantityPerUnit}
          />
        );
      })}
      
      <div className={styles.summary}>
        <h1> Total: ${calculateTotal().toFixed(2)} </h1>
        <button> Proceed To Checkout </button>
      </div>
    </div>
  )
}