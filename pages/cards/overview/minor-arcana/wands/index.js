import Link from "next/link";
import { useState, useEffect } from "react";
import BackButton from "../../../../../components/Backbutton/backbutton";
import useStore from "../../../../../src/store/store";

export default function Wands() {
  const [hasMounted, setHasMounted] = useState(false);

  const cards = useStore((state) => state.allCards);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <>
      <ul>
        <h1>wands</h1>
        {cards
          .filter((card) => card.suit === "wands")
          .map((card) => (
            <li key={card.id}>
              {" "}
              <Link href={{ pathname: `/cards/${card.id}` }}>{card.name}</Link>
            </li>
          ))}
      </ul>
      <BackButton />
      <Link href="/">
        <button type="button">menu</button>
      </Link>
    </>
  );
}
