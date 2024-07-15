import '../app/ui/fontawesome'
import Header from ".//components/Header";
import '../app/styles/globals.css'
import FruitCarousel from './components/FruitCarousel';

export default function Home() {
  return (
    <div>
      <Header />
      <FruitCarousel  />
    </div>
  );
}

