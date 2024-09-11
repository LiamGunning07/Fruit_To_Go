import { useGlobalState } from "../context/GlobalStateContext";
import FruitCard from "./FruitCard";
import FruitList from "./FruitList";

export default function SelectedCard() {
const { fruits , selectedCard } = useGlobalState();

  return (
    <>
      <FruitCard />
      <FruitList />
    </>
  )
}