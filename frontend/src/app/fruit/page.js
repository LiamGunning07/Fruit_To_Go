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
    <Header/>
    <div className={styles.heading}>
      <h1>All Fruits</h1>
      <FilterDropDown />
    </div>
    {selectedCard ? (
        <SelectedCard />  // Render the SelectedCard component
      ) : null}
      <FruitList />
  </>
);
}