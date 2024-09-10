'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/CartCard.module.css'
import { useGlobalState } from '../Context/GlobalStateContext';

export default function CartCard ({quantity, name, price, product_id}) {
const {cart, setCart} = useGlobalState()

const deleteItem = () => {
  const updatedCart = cart.filter(item => item.product_id !== product_id);
  setCart(updatedCart);

  // Post the updated cart to the /sync-cart route
  fetch('http://localhost:3001/api/session/sync-cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ cart: updatedCart }),
    credentials: 'include',
  })
  .then(response => response.json())
  .then(data => console.log(data.message))
  .catch(error => console.error('Error syncing cart:', error));
};


const increaseQuantity = () => {
  const updatedCart = cart.map(item => {
    if (item.product_id === product_id) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });
  setCart(updatedCart);

  // Post the updated cart to the /sync-cart route
  fetch('http://localhost:3001/api/session/sync-cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ cart: updatedCart }),
    credentials: 'include',
  })
  .then(response => response.json())
  .then(data => console.log(data.message))
  .catch(error => console.error('Error syncing cart:', error));
};


const decreaseQuantity = () => {
  const updatedCart = cart.reduce((acc, item) => {
    if (item.product_id === product_id) {
      if (item.quantity > 1) {
        acc.push({ ...item, quantity: item.quantity - 1 });
      }
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
  setCart(updatedCart);

  // Post the updated cart to the /sync-cart route
  fetch('http://localhost:3001/api/session/sync-cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ cart: updatedCart }),
    credentials: 'include',
  })
  .then(response => response.json())
  .then(data => console.log(data.message))
  .catch(error => console.error('Error syncing cart:', error));
};


return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <FontAwesomeIcon icon={faTrash} className={styles.faTrash} onClick={deleteItem} />
          <h1 className={styles.title}>
            {name} <span className={styles.info}>{price} x {quantity}</span>
          </h1>
        </div>
        <div className={styles.quantity_container}>
          <p>Order Quantity: {quantity}</p>
          <div className={styles.quantity}>
            <FontAwesomeIcon icon={faMinus} className={styles.faMinus} onClick={decreaseQuantity} />
            <FontAwesomeIcon icon={faPlus} className={styles.faPlus} onClick={increaseQuantity} />
          </div>
        </div>
      </div>
    </div>
);

}