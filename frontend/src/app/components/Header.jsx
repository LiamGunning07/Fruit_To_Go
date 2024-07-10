"use client";

import { useRouter } from 'next/navigation';
import styles from '../styles/Header.module.css'

export default function Header() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1> The Fruit To Go</h1>
          <p> "Fresh Fruit, Delivered Fast" </p>
        </div>
          <ul className={styles.links}> 
            <li> Fruit </li>
            <li> Beverages </li>
            <li> Cart </li>
            <li onClick={handleLoginClick}> Login </li>
          </ul>
      </div>
    </div>
  );
}
