'use client'
import styles from '../styles/FruitCard.module.css'
import { useGlobalState } from '../Context/GlobalStateContext';
import {showPopup, saveCartToBackend} from '../helpers/functions'


export default function FruitCard({ title, price, img, description, product_id}) {
  const { cart, setCart } = useGlobalState();

  

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.product_id === product_id);
  
    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map(item =>
        item.product_id === product.product_id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { product_id, title, price, quantity: 1 }];
    }
  
    // Update cart state and then sync to backend after the state has been updated
    setCart(updatedCart);
    saveCartToBackend(updatedCart); // Call after updating the cart
  };
  
  


  return (
        <div className={styles.container}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.price}>${price}</h2>
          <img src={img} className={styles.img} alt={title} />
          <p className={styles.description}>{description}</p>
          <div className={styles.overlay}>
            <button className={styles.addToCart} onClick={() => {
              addToCart(product_id); 
              showPopup(`${title} Added to Cart!`);
            }}
            >
              Add to Cart
            </button>
          </div>
          {/* The Popup Element */}
          <div id="popup" className={styles.popup} style={{ display: 'none' }}>
            <div className={styles.popupcontent}>
              <h2 id="popup-message"></h2>
          </div>
      </div>
    </div>
  );
};