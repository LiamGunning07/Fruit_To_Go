"use client"
import { fetchAllFruits } from '../helpers/functions';
import { useGlobalState } from '../context/GlobalStateContext';
import React, { useEffect, useState } from 'react';
import FruitCard from '../components/FruitCard'
import styles from '../styles/FruitCard.module.css'
import '../styles/globals.css'


export default function FruitList() {
const { fruits, setFruits, results} = useGlobalState()

// Inside the component
useEffect(() => {
  if (results.length > 0) {
    setFruits(results);
  } else {
    fetchAllFruits(setFruits);
  }
}, [results, setFruits]);

  return (
    <div>
      <div className={styles.FruitList}>
      {fruits
      .filter(fruit => !fruit.isSelected)
      .map((fruit, index) => (
        <FruitCard 
          key={index}
          product_id={fruit.id}
          name={fruit.name}
          price={fruit.price}
          img={fruit.img}
          quantity={fruit.quantity}
          description={fruit.description}
          quantityPerUnit={fruit.quantity_per_unit}
          onClick={() => selectCard(product_id)}
          />
        ))}
      </div>
    </div>
  )
}
