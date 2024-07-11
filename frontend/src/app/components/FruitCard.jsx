import styles from '../styles/FruitCard.module.css'

export default function FruitCard({ title, price, img, quantity, description}) {

  return (
        <div className={styles.container}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.price}>${price}</h2>
          <img src={img} className={styles.img} alt={title} />
          <p className={styles.quantity}> Quantity:{quantity}</p>
          <p className={styles.description}>{description}</p>
        </div>
  );
};