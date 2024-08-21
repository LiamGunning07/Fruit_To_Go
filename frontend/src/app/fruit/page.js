"use client"
import FruitList from '../components/FruitList'
import Header from '../components/Header'
import { useGlobalState } from '../Context/GlobalStateContext'
import '../styles/globals.css'


export default function Fruit () {
const {fruits, setFruits} = useGlobalState([])

  return (
    <>
    <Header
    fruits={fruits}
    setFruits={setFruits}/>
    <FruitList 
    fruits={fruits}
    setFruits={setFruits} />
    </>
  )

}