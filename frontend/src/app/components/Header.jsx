"use client";
import { useRouter } from 'next/navigation';
import SearchBar from './SearchBar';
import styles from '../styles/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleWhole, faBottleDroplet, faCartShopping} from '@fortawesome/free-solid-svg-icons';

export default function Header ({ setQuery, setResults, query, results}) {
  const router = useRouter();

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
          <h1> Fruit <span className={styles.logo}> 2 </span> Go</h1>
          <p> "Fresh Fruit, Delivered Fast" </p>
        </div>
        <div>
          <SearchBar 
            setQuery={setQuery}
            query={query}
            results={results}
            setResults={setResults}/>
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
          </ul>
      </div>
    </div>
  );
}
