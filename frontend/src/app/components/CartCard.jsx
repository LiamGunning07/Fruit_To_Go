import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/CartCard.module.css'
import { useGlobalState } from "../Context/GlobalStateContext";

export default function CartCard() {
  const {cart,setCart} = useGlobalState()
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <FontAwesomeIcon icon={faTrash} className={styles.faTrash} />
          <h1 className={styles.title}> Apples </h1>
        </div>
          <div className={styles.quantity_container}>
            <p>Order Quantity: 6</p>
              <div className={styles.quantity}>
                <FontAwesomeIcon icon={faMinus}  className={styles.faMinus}/>
                <FontAwesomeIcon icon={faPlus}  className={styles.faPlus} /> 
              </div>
          </div>
      </div>
    </div>
  )
}