"use client";

import { useRouter } from 'next/navigation';
import styles from '../styles/Header.module.css'

export default function Header() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };
  const handleSignUpClick = () => {
    router.push('/signup');
  };

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1> The Fruit To Go</h1>
          <p> "Fresh Fruit, Delivered Fast" </p>
        </div>
          <ul className={styles.links}> 
            <li><u> Fruit </u></li>
            <li><u> Beverages </u></li>
            <li><u> Cart </u></li>
            <div className={styles.login}>
              <li onClick={handleLoginClick}><u>Login</u></li>
              <li onClick={handleSignUpClick}><u>Sign Up</u></li>
            </div>
          </ul>
      </div>
    </div>
  );
}
