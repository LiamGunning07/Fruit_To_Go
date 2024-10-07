"use client"
import styles from '../styles/MobileSearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useGlobalState } from '../context/GlobalStateContext';
import { handleInputBlur, handleInputChange } from '../helpers/search';

export default function MobileSearchBar() {
  const { query, setQuery, isExpanded, setIsExpanded } = useGlobalState();

  const handleSearchClick = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    if (!query) {
      setIsExpanded(false);
    }
  };

  return (
    <div className={`${styles.searchcontainer} ${isExpanded ? styles.expanded : ''}`}>
      {!isExpanded && (
        <button className={styles.btnsearch} onClick={handleSearchClick}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      )}
      {isExpanded && (
        <input
          type="text"
          className={styles.inputsearch}
          value={query || ''}
          onChange={(e) => handleInputChange(e, setQuery)}
          onBlur={handleBlur}
          placeholder="Search..."
          autoFocus
        />
      )}
    </div>
  );
}
