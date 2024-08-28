"use client";
import { useRouter } from 'next/navigation';
import SearchBar from './SearchBar';
import styles from '../styles/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleWhole, faBottleDroplet, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useGlobalState } from '../Context/GlobalStateContext';
import { fetchAllFruits } from '../helpers/functions';
import FilterDropDown from './FilterDropDown';

export default function Header () {
  const router = useRouter();
  const {query, setQuery, results, setResults, setFruits} = useGlobalState()

  const handleFruitClick = () => {
    setResults([])
    setQuery('');
    router.push('/fruit')
  }

  const handleHomeClick = () => {
    fetchAllFruits(setFruits)
    setResults([])
    setQuery('');
    router.push('/')
  }

  const handleCartClick = () => {
    setQuery('');
    setResults([])
    router.push('/cart')
  }

  const handleBeverageClick = () => {
    setQuery('');
    setResults([])
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
