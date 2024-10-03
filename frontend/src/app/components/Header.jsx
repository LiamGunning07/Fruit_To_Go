"use client";
import { useRouter } from 'next/navigation';
import SearchBar from './SearchBar';
import MobileSearchBar from './MobileSearchBar';
import styles from '../styles/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleWhole, faBottleDroplet, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useGlobalState } from '../context/GlobalStateContext';
import { fetchAllFruits } from '../helpers/functions';
import MobileDropDown from './MobileDropDown';

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

  const handleAboutUsClick = () => {
    router.push('/about')
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
          <div className={styles.mobile}> 
            <MobileSearchBar />
          </div>
        <div className={styles.desktop}>
          <SearchBar 
            setQuery={setQuery}
            query={query}
            results={results}
            setResults={setResults}/>
          </div>
        </div>
          <ul className={styles.links}> 
            <li onClick={handleAboutUsClick}>
              <u> About Us </u>
            </li>
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
            <MobileDropDown />
          </ul>
      </div>
    </div>
  );
}
