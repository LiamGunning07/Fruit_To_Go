"use client"
import { createContext, useContext, useState, useEffect } from 'react';
import { checkOrCreateSessionId, loadCart } from '../helpers/functions';

// Create the context
const GlobalStateContext = createContext();

// Create a provider component
export function GlobalStateProvider({ children }) {
  
  // Define all the states you want to manage globally
  const [cart, setCart] = useState([]);
  const [fruits, setFruits] = useState([]);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('')
  const [selectedCard, setSelectedCard] = useState([])
  
  useEffect(() => {
    loadCart(setCart); // Load the cart on app initialization
    checkOrCreateSessionId();
  }, []);

  return (
    <GlobalStateContext.Provider
      value={{
        fruits,
        setFruits,
        results,
        setResults,
        query,
        setQuery,
        cart, 
        setCart,
        selectedOption, 
        setSelectedOption,
        selectedCard,
        setSelectedCard
        // Add more state values and setters here
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
}

// Create a custom hook to use the context
export function useGlobalState() {
  return useContext(GlobalStateContext);
}
