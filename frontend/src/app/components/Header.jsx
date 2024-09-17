"use client";
import { useRouter } from 'next/navigation';
import SearchBar from './SearchBar';
import styles from '../styles/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleWhole, faBottleDroplet, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useGlobalState } from '../context/GlobalStateContext';
import { fetchAllFruits } from '../helpers/functions';
import FilterDropDown from './FilterDropDown';

export default function Header () {
  const router = useRouter();
  const {query, setQuery, results, setResults, setFruits, cart, setSelectedCard} = useGlobalState()

  const handleFruitClick = () => {
    setResults([]);
    setQuery('');
    setSelectedCard(null);
    router.push('/fruit')
  }

  const handleHomeClick = () => {
    fetchAllFruits(setFruits)
    setResults([])
    setQuery('');
    setSelectedCard(null);
    router.push('/')
  }

  const handleCartClick = () => {
    setQuery('');
    setResults([])
    setSelectedCard(null);
    router.push('/cart')
  }

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);


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
            <li onClick={handleCartClick}>
              <FontAwesomeIcon icon={faCartShopping}/> 
              <u> Cart </u>
              {
                totalItems > 0 && <span className={styles.count}> {totalItems} </span>
              }
            </li>
          </ul>
      </div>
    </div>
  );
}
