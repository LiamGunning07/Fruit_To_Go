"use client"
import FilterDropDown from '../components/FilterDropDown'
import FruitList from '../components/FruitList'
import Header from '../components/Header'
import SelectedCard from '../components/SelectedCard'
import { useGlobalState } from '../context/GlobalStateContext'
import styles from '../styles/Fruit.module.css'
import '../styles/globals.css'


export default function Fruit () {
const {fruits, setFruits, selectedCard, setSelectedCard
} = useGlobalState()

  return (
    <>
    <Header
    fruits={fruits}
    setFruits={setFruits}/>
    <div className={styles.heading}>
      <h1> All Fruits </h1>
      <FilterDropDown/>
    </div>
    {/* If selectedCard has something, render both selectedCard and FruitList */}
  {selectedCard && selectedCard.length > 0  ? (
    <>
      <SelectedCard selectedCard={selectedCard} />
      {console.log("Inside selectedCard", selectedCard)}
      <FruitList 
        fruits={fruits}
        setFruits={setFruits} 
      />
    </>
  ) : (
    /* If nothing is selected, render only the FruitList */
    <FruitList 
      fruits={fruits}
      setFruits={setFruits} 
    />
  )}
  </>
  );
  }