"use client"
import React, { useEffect, useState } from 'react';
import FruitCard from '../components/FruitCard'
import styles from '../styles/FruitCard.module.css'
import backgroundImg from '../assets/background.jpg'
import '../styles/globals.css'


export default function FruitList() {

const [fruits, setFruits] = useState([]);
const [error, setError] = useState(null);


useEffect(() => {
  const fetchFruits = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/fruits');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setFruits(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError(error);
    }
  };

  fetchFruits();
}, []);

if (error) {
  return <div>Error fetching products: {error.message}</div>;
}

  return (
    <div>
      <div className={styles.FruitList}>
      {fruits.map((fruit, index) => (
        <FruitCard 
          key={index}
          title={fruit.title}
          price={fruit.price}
          img={fruit.img}
          quantity={fruit.quantity}
          description={fruit.description}
          />
        ))}
      </div>
    </div>
  )
}
