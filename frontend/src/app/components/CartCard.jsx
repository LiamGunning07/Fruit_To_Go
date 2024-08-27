import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/CartCard.module.css'


export default function CartCard ({quantity, name}) {
  

  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <FontAwesomeIcon icon={faTrash} className={styles.faTrash} />
          <h1 className={styles.title}> {name} </h1>
        </div>
          <div className={styles.quantity_container}>
            <p>Order Quantity: {quantity} </p>
              <div className={styles.quantity}>
                <FontAwesomeIcon icon={faMinus}  className={styles.faMinus}/>
                <FontAwesomeIcon icon={faPlus}  className={styles.faPlus} /> 
              </div>
          </div>
      </div>
    </div>
  )
}