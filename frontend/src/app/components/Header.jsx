"use client";
import { useRouter } from 'next/navigation';
import styles from '../styles/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleWhole, faBottleDroplet, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };
  const handleSignUpClick = () => {
    router.push('/signup');
  };
  const handleFruitClick = () => {
    router.push('/fruit')
  }

  const handleHomeClick = () => {
    router.push('/')
  }

  const handleCartClick = () => {
    router.push('/cart')
  }

  const handleBeverageClick = () => {
    router.push('/beverages')
  }

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.title} onClick={handleHomeClick}>
          <h1> The Fruit To Go</h1>
          <p> "Fresh Fruit, Delivered Fast" </p>
        </div>
          <ul className={styles.links}> 
            <li onClick={handleFruitClick}>
              <FontAwesomeIcon icon={faAppleWhole} />
            <u> Fruit </u></li>
            <li onClick={handleBeverageClick}>
              <FontAwesomeIcon icon={faBottleDroplet} />
            <u> Beverages </u></li>
            <li onClick={handleCartClick}>
              <FontAwesomeIcon icon={faCartShopping}/> 
            <u> Cart </u></li>
            <div className={styles.login}>
            <li onClick={handleLoginClick}>
              <FontAwesomeIcon icon={faUser} /> 
            <u>Login</u></li>
            <li onClick={handleSignUpClick}>
              <FontAwesomeIcon icon={faUser} />
            <u>Sign Up</u></li>
            </div>
          </ul>
      </div>
    </div>
  );
}
