import { useState, useEffect, useRef } from "react";
import useStore from "../../../../src/store/store";
import Link from "next/link";
export default function Results() {
  const [hasMounted, setHasMounted] = useState(false);
  const currentCard = useStore((state) => state.currentCard);
  const drawnCards = useStore((state) => state.drawnCards);
  const cardMoods = useStore((state) => state.cardMoods);
  const setLastCard = useStore((state) => state.setLastCard);
  const stats = cardMoods.find((card) => card.name === currentCard.name);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  if (drawnCards.length > 0) {
    return (
      <ul>
        <li>Results</li>
        <li>{currentCard.name}</li>
        <li>Note: {currentCard.notes}</li>
        <li>Drawn: {stats.clicks}x times</li>
        <li>Mood: {stats.avgMood}</li>
        <li>
          <Link href="/">
            <button
              type="button"
              aria-label="end session"
              onClick={setLastCard}
            >
              end
            </button>
          </Link>
        </li>
      </ul>
    );
  } else {
    return (
      <>
        <p>no cards to review</p>
        <Link href="/">
          <button type="button" aria-label="end session">
            end
          </button>
        </Link>
      </>
    );
  }
}
