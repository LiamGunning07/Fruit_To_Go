import CartCard from "./CartCard";
import styles from '../styles/CartList.module.css'
import { useGlobalState } from "../Context/GlobalStateContext";


export default function CartList() {
  const {cart,setCart} = useGlobalState()
  return (
    <div className={styles.container}>
      <CartCard />
      <CartCard />
      <div className={styles.summary}>
        <h1> Total: $135 </h1>
        <button> Proceed To Checkout </button>
      </div>
    </div>
  )
}