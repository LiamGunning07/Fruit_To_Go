import styles from '../styles/FruitCard.module.css'
import backgroundImg from '../assets/background.jpg'

export default function FruitCard() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Apples</h1>
      <h2 className={styles.price}> $6.50 </h2>
      <img src={backgroundImg} className={styles.img} alt="Apple" />
      <p className={styles.quantity}> Quantity: 12</p>
      <p className={styles.description}>Fresh apples, perfect for a healthy snack.</p>
    </div>
  )
}