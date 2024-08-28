'use client'
import styles from '../styles/FilterDropDown.module.css'
import { useGlobalState } from "../Context/GlobalStateContext";

export default function FilterDropDown() {

  const {selectedOption, setSelectedOption} = useGlobalState('');

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (onFilterChange) {
      onFilterChange(value);
    }
  };

  return (
    <div className={styles.dropdown}>
      <select value={selectedOption} onChange={handleFilterChange}>
        <option value="" disabled={!!selectedOption}>
          Select a filter
        </option>
        <option value="price-inc">Price: Low to High</option>
        <option value="price-dec">Price: High to Low</option>
        <option value="fruitBoxes">Fruit Boxes</option>
        
      </select>
    </div>
  );

}
                                                                                                                                                     