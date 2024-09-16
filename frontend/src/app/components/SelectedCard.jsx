import { useGlobalState } from "../context/GlobalStateContext";
import styles from '../styles/SelectedCard.module.css';

export default function SelectedCard() {
  const { selectedCard, setCart, cart } = useGlobalState();

  // Ensure `selectedCard` exists before rendering
  if (!selectedCard) {
    return <p>No fruit selected. Please select a fruit to view details.</p>;
  }

  const { id, name, price, description, img, quantityPerUnit } = selectedCard;

  const addToCart = () => {
    const existingItem = cart.find(item => item.product_id === id);

    let updatedCart;
    if (existingItem) {
      // Update quantity if the item is already in the cart
      updatedCart = cart.map(item =>
        item.product_id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // Add a new item to the cart if it's not already there
      updatedCart = [...cart, { product_id: id, name, price, quantity: 1, quantityPerUnit }];
    }

    // Update the cart in global state
    setCart(updatedCart);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{name}</h1>
      {img && <img src={img} className={styles.img} alt={name} />} {/* Handle if img exists */}
      <p className={styles.description}>{description}</p>
      <h2 className={styles.price}>${price}
        <span className={styles.unit}> / {quantityPerUnit || 'unit'}</span>
      </h2>
      <button className={styles.addToCart} onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}
