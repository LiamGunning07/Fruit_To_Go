import dynamic from 'next/dynamic';
import Header from ".//components/Header";
import '../app/styles/globals.css'
// const FruitCarousel = dynamic(() => import ('./components/FruitCarousel'), { ssr: false });
import FruitCarousel from './components/FruitCarousel';

export default function Home() {
  return (
    <div>
      <Header />
      <FruitCarousel  />
    </div>
  );
}

