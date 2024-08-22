"use client"
import { createContext, useContext, useState } from 'react';

// Create the context
const GlobalStateContext = createContext();

// Create a provider component
export function GlobalStateProvider({ children }) {
  // Define all the states you want to manage globally
  const [fruits, setFruits] = useState([]);
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');
  const [cart, setCart] = useState([])
  
  // Add more states as needed

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
        setCart
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
