import '../app/ui/fontawesome'
import Header from ".//components/Header";
import '../app/styles/globals.css'
import FruitCarousel from './components/FruitCarousel';
import FruitList from './components/FruitList';


export default function Home() {

  return (
    <div>
      <Header />
      <FruitCarousel  />
      <FruitList />
    </div>
  );
}

