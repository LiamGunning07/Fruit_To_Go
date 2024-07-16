import CartCard from "./CartCard";
import styles from '../styles/CartList.module.css'

export default function CartList() {
  return (
    <div className={styles.container}>
      <CartCard />
      <div className={styles.summary}>
        <h1> Total: Total </h1>
        <button> Proceed To Checkout </button>
      </div>
    </div>
  )
}