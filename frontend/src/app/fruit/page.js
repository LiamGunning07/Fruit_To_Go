"use client"
import FilterDropDown from '../components/FilterDropDown'
import FruitList from '../components/FruitList'
import Header from '../components/Header'
import SelectedCard from '../components/SelectedCard'
import { useGlobalState } from '../context/GlobalStateContext'
import styles from '../styles/Fruit.module.css'
import '../styles/globals.css'


export default function Fruit () {
const { fruits, setFruits, selectedCard, setSelectedCard } = useGlobalState()

return (
  <>
    <Header fruits={fruits} setFruits={setFruits} />
    <div className={styles.heading}>
      <h1>All Fruits</h1>
      <FilterDropDown />
    </div>
    {/* Check if selectedCard is truthy, meaning a fruit is selected */}
    {selectedCard ? (
      <>
        {/* Render SelectedCard if a fruit is selected */}
        <SelectedCard selectedCard={selectedCard} />
        {console.log("Selected Card: ", selectedCard)}
        {/* Render the FruitList under the SelectedCard */}
        <FruitList fruits={fruits} setFruits={setFruits} />
      </>
    ) : (
      // If no fruit is selected, render only the FruitList
      <FruitList fruits={fruits} setFruits={setFruits} />
    )}
  </>
);
}