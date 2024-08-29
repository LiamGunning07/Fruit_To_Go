'use client'
import styles from '../styles/FilterDropDown.module.css'
import { useState } from 'react';
import { useGlobalState } from "../Context/GlobalStateContext";
import { fetchAllFruitsAscending, fetchAllFruitsDescending } from '../helpers/functions';

export default function FilterDropDown() {

  const { selectedOption, setSelectedOption, setFruits } = useGlobalState('');

  

  const handleFilterChange = async (event) => {
    const value = event.target.value;
    setSelectedOption(value);

    if (value === 'price-asc') {
      await fetchAllFruitsAscending(setFruits);
    } else if (value === 'price-desc') {
      await fetchAllFruitsDescending(setFruits);
    }
    // Add more conditions for other options if needed
  };

  return (
    <div className={styles.dropdown}>
      <select value={selectedOption} onChange={handleFilterChange}>
        <option value="" disabled={!!selectedOption}>
          Select a filter
        </option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="fruitBoxes">Fruit Boxes</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
}                                                                                                                                            