"use client"
import '../app/ui/fontawesome'
import '../app/styles/globals.css'
import { useState, useEffect } from 'react';
import Header from ".//components/Header";
import FruitCarousel from './components/FruitCarousel';
import FruitList from './components/FruitList';


export default function Home() {

const [query, setQuery] = useState('');
const [results, setResults] = useState([]);
const [fruits, setFruits] = useState([]);

useEffect(() => {
  if (results.length > 0) {
    setFruits(results);
  }
}, [results]);


  return (
    <div>
      <Header 
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

