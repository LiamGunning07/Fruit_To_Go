'use client'
import styles from '../styles/FruitCard.module.css'
import { useGlobalState } from '../context/GlobalStateContext';
import {showPopup, saveCartToBackend, selectCard} from '../helpers/functions'

export default function FruitCard({ name, price, img, description, product_id, quantityPerUnit, onClick}) {
  const { cart, setCart, selectedCard, setSelectedCard, fruits, setFruits } = useGlobalState();


  const addToCart = (e, product) => {
    e.stopPropagation();
    const existingItem = cart.find(item => item.product_id === product_id);
    
    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map(item =>
        item.product_id === product.product_id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { product_id, name, price, quantity: 1, quantityPerUnit }];
    }
  
    // Update cart state and then sync to backend after the state has been updated
    setCart(updatedCart);
    saveCartToBackend(updatedCart); // Call after updating the cart
  };
  
  
  return (
        <div className={styles.container} onClick={onClick}>
          <h1 className={styles.title}>{name}</h1>
          <h2 className={styles.price}>${price}
            <div className={styles.unit}> /{quantityPerUnit}  </div>
          </h2>
          <img src={img} className={styles.img} alt={name} />
          <p className={styles.description}>{description}</p>
          <div className={styles.overlay}>
            <button className={styles.addToCart} onClick={(e) => {
              addToCart(e,product_id); 
              showPopup(`${name} Added to Cart!`);
            }}
            >
              Add to Cart
            </button>
          </div>
          <div id="popup" className={styles.popup} style={{ display: 'none' }}>
            <div className={styles.popupcontent}>
              <h2 id="popup-message"></h2>
          </div>
      </div>
    </div>
  );
};