"use client"
import '../app/ui/fontawesome'
import '../app/styles/globals.css'
import { useState, useEffect } from 'react';
import Header from ".//components/Header";
import FruitCarousel from './components/FruitCarousel';
import FruitList from './components/FruitList';
import { useGlobalState } from './Context/GlobalStateContext';


export default function Home() {
const {fruits, setFruits, query, setQuery, results, setResults } = useGlobalState()

useEffect(() => {
  if (results.length >= 0) {
    setFruits(results);
  }
}, [results]);


  return (
    <div>
      <Header
        fruits={fruits}
        setFruits={setFruits}
        setQuery={setQuery}
        query={query}
        results={results}
        setResults={setResults}/>
      <FruitCarousel  />
      <FruitList
        fruits={fruits}
        setFruits={setFruits}
        setQuery={setQuery}
        query={query}
        results={results}
        setResults={setResults}/>
    </div>
  );
}

