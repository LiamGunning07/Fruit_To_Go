'use client'
import styles from '../styles/FruitCard.module.css'
import { useGlobalState } from '../context/GlobalStateContext';
import {showPopup, saveCartToBackend, addToCart, selectCard} from '../helpers/functions'

export default function FruitCard({ name, price, img, description, product_id, quantityPerUnit, onClick}) {
  const { cart, setCart, selectedCard, setSelectedCard, fruits, setFruits } = useGlobalState();

  
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
               addToCart(e, { product_id, name, price, quantityPerUnit }, cart, setCart, saveCartToBackend)
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