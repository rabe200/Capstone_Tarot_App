import { useState, useEffect, useRef } from "react";
import useStore from "../../../../src/store/store";
import Link from "next/link";
export default function Results() {
  const [hasMounted, setHasMounted] = useState(false);
  const currentCard = useStore((state) => state.currentCard);
  const drawnCards = useStore((state) => state.drawnCards);

  const setLastCard = useStore((state) => state.setLastCard);

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
        <li>Clicks: {currentCard.clicks}</li>
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
