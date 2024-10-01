"use client"
import styles from '../styles/MobileSearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useGlobalState } from '../context/GlobalStateContext';
import { handleInputChange } from '../helpers/search';

export default function MobileSearchBar () {

  const { query, setQuery } = useGlobalState();

  return (
    <div className={styles.searchbox}>
      <button className={styles.btnsearch}>
        <i> <FontAwesomeIcon icon={faMagnifyingGlass} /> </i>
      </button>
      <input 
        type="text" 
        className={styles.inputsearch}
        value={query || ''}
        onChange={(e) => handleInputChange(e, setQuery)}
        placeholder="Search..."
      />
    </div>
  )
}