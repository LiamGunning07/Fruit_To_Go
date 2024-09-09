'use client'
import CartCard from "./CartCard";
import styles from '../styles/CartList.module.css'


export default function CartList({ cart } ) {

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  if (!cart || !Array.isArray(cart)) {
    return <p>Your cart is empty.</p>; // or handle it however you prefer
  }

  return (
    <div className={styles.container}>
      {cart.map((item, index) => {
        // Log the item to check if id exists
        console.log("Item in CartList:", item);
        return (
          <CartCard
            key={item.product_id} // Use id as key, fallback to index if id is missing
            product_id={item.product_id}    // Pass id to CartCard as product_id
            quantity={item.quantity}
            title={item.title}
            price={item.price}
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