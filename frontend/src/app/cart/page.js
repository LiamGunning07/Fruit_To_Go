import Header from "../components/Header"
import styles from "../styles/Cart.module.css"
import '../styles/globals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import CartList from "../components/CartList";

export default function Cart() {
  return (
    <div>
      <Header />
      <div className={styles.header}>
        <FontAwesomeIcon icon={faCartShopping} className={styles.faCartShopping} />
        <h1> Your Cart </h1>
      </div>
      <div>
        <CartList />
      </div>
    </div>
  )
}