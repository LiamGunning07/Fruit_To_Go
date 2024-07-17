import FruitList from '../components/FruitList'
import backgroundImg from '../assets/background.jpg'
import Header from '../components/Header'
import '../styles/globals.css'

const fruits = [{
  title: 'Apples',
  price: 6.00,
  img: backgroundImg,
  quantity: 12,
  description: 'Fresh apples, perfect for a healthy snack.',
},
{
  title: 'Oranges',
  price: 6.00,
  img: backgroundImg,
  quantity: 12,
  description: 'Fresh oranges, perfect for a healthy snack.',
},
{
  title: 'Bananas',
  price: 5.00,
  img: backgroundImg,
  quantity: 10,
  description: 'Ripe bananas, great for smoothies and snacking.',
},
{
  title: 'Grapes',
  price: 7.00,
  img: backgroundImg,
  quantity: 8,
  description: 'Juicy grapes, perfect for a refreshing snack.',
},
{
  title: 'Strawberries',
  price: 8.00,
  img: backgroundImg,
  quantity: 15,
  description: 'Sweet strawberries, great for desserts and snacking.',
},
{
  title: 'Blueberries',
  price: 9.00,
  img: backgroundImg,
  quantity: 20,
  description: 'Fresh blueberries, perfect for a healthy snack or breakfast topping.',
},
{
  title: 'Pineapples',
  price: 4.00,
  img: backgroundImg,
  quantity: 5,
  description: 'Tropical pineapples, excellent for a juicy treat.',
},
{
  title: 'Watermelons',
  price: 10.00,
  img: backgroundImg,
  quantity: 3,
  description: 'Refreshing watermelons, perfect for a summer snack.',
},
{
  title: 'Mangoes',
  price: 7.00,
  img: backgroundImg,
  quantity: 6,
  description: 'Delicious mangoes, great for smoothies and desserts.',
}
];

export default function Fruit() {

  return (
    <>
    <Header />
    <FruitList />
    
    </>
  )

}