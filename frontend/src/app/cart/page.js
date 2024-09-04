'use client'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "../components/Header";
import styles from "../styles/Cart.module.css";
import '../styles/globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useGlobalState } from '../Context/GlobalStateContext'
import CartList from "../components/CartList";

export default function Cart() {
  const { cart, results } = useGlobalState();
  const router = useRouter();

  useEffect(() => {
    if (results.length > 0) {
      router.push('/fruit');
    }
  }, [results]);




  return (
    <div>
      <Header />
      <div className={styles.header}>
        <FontAwesomeIcon icon={faCartShopping} className={styles.faCartShopping} />
        <h1>Your Cart {cart.length === 0 && "is Empty"}</h1>
      </div>
      <div className={styles.cartlist_container}>
      {cart.length > 0 && <CartList cart={cart} />}
      </div>
    </div>
  );
}