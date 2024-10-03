import { useGlobalState } from "../context/GlobalStateContext";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from '../styles/MobileDropDown.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function MobileDropDown () {
  const router = useRouter();
  const { setSelectedOption, setResults, setQuery, setSelectedCard } = useGlobalState();
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown visibility

  const handleFilterChange = (value) => {
    setSelectedOption(value);
    setSelectedCard(null);
    setIsOpen(false); // Close dropdown after selecting an option

    if (value === 'cart') {
      handleCartClick();
    } else if (value === 'fruit') {
      handleFruitClick();
    } else if (value === 'about') {
      router.push('/about');
    }
  };

  const handleCartClick = () => {
    setQuery('');
    setResults([]);
    setSelectedCard(null);
    router.push('/cart');
  };

  const handleFruitClick = () => {
    setResults([]);
    setQuery('');
    setSelectedCard(null);
    router.push('/fruit');
  };

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      {/* Button to toggle dropdown */}
      <button className={styles.barsButton} onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faBars} className={styles.bars} />
      </button>
  
      {/* Custom dropdown menu */}
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li onClick={() => handleFilterChange('cart')}>Cart</li>
          <li onClick={() => handleFilterChange('fruit')}>Fruit</li>
          <li onClick={() => handleFilterChange('about')}>About Us</li>
          {/* Add more options as needed */}
        </ul>
      )}
    </div>
  );
  
  
}
