"use client"
import { fetchAllFruits } from '../helpers/functions';
import React, { useEffect, useState } from 'react';
import FruitCard from '../components/FruitCard'
import styles from '../styles/FruitCard.module.css'
import '../styles/globals.css'


export default function FruitList({fruits, setFruits}) {
// Inside the component
useEffect(() => {
  fetchAllFruits(setFruits);
}, []);

  return (
    <div>
      <div className={styles.FruitList}>
      {fruits.map((fruit, index) => (
        <FruitCard 
          key={index}
          product_id={fruit.product_id}
          title={fruit.name}
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
