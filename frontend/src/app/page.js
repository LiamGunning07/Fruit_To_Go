"use client"
import '../app/ui/fontawesome'
import '../app/styles/globals.css'
import { useState } from 'react';
import Header from ".//components/Header";
import FruitCarousel from './components/FruitCarousel';
import FruitList from './components/FruitList';


export default function Home() {

const [query, setQuery] = useState('');
const [results, setResults] = useState([]);

  return (
    <div>
      <Header 
        setQuery={setQuery}
        query={query}
        results={results}
        setResults={setResults}/>
      <FruitCarousel  />
      <FruitList 
        setQuery={setQuery}
        query={query}
        results={results}
        setResults={setResults}/>
    </div>
  );
}

