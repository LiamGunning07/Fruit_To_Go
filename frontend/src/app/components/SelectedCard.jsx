import { useEffect } from "react";
import { useGlobalState } from "../context/GlobalStateContext";
import { addToCart, saveCartToBackend, showPopup } from "../helpers/functions";
import styles from '../styles/SelectedCard.module.css';
import '../styles/globals.css'

export default function SelectedCard() {
  const { selectedCard, setCart, cart } = useGlobalState();

  // Ensure `selectedCard` exists before rendering
  if (!selectedCard) {
    return <p>No fruit selected. Please select a fruit to view details.</p>;
  }

  const { id: product_id, name, price, description, img, quantity_per_unit } = selectedCard;


  useEffect(() => {
    console.log('Selected Card Info', selectedCard)
  },[selectedCard])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{name}</h1>
      <img src={img} className={styles.img} alt={name} /> {/* Handle if img exists */}
      <p className={styles.description}>{description}</p>
      <h2 className={styles.price}>${price}
        <span className={styles.unit}> / {quantity_per_unit}</span>
      </h2>
      <button className={styles.addToCart} onClick={(e) => {
        addToCart(e, { product_id, name, price, quantity_per_unit }, cart, setCart, saveCartToBackend)
        showPopup(`${name} Added to Cart!`);
        }}
        >
        Add to Cart
      </button>
    </div>
  );
}
