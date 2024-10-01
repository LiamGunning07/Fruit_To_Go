"use client"
import '../app/ui/fontawesome'
import '../app/styles/globals.css'
import {useEffect } from 'react';
import Header from ".//components/Header";
import FruitCarousel from './components/FruitCarousel';
import SelectedCard from './components/SelectedCard';
import FruitList from './components/FruitList';
import { useGlobalState } from './context/GlobalStateContext';


export default function Home() {

const {fruits, setFruits, query, setQuery, results, setResults, selectedCard } = useGlobalState()

useEffect(() => {
  if (results.length >= 0) {
    setFruits(results);
  }
}, [results]);


  return (
    <div>
      <Header/>
      {selectedCard ? (
        <SelectedCard />  // Render the SelectedCard component
      ) : 
      <FruitCarousel  />
      }

      <FruitList
        />
    </div>
  );
}

