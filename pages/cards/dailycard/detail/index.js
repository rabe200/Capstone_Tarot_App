import Link from "next/link";
import { useState, useEffect } from "react";
import useStore from "../../../../src/store/store";
import CardPreviewImage from "../../../../components/CardPreviewImage";

export default function Details() {
  const [hasMounted, setHasMounted] = useState(false);
  const currentCard = useStore((state) => state.currentCard);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  if (currentCard) {
    return (
      <>
        <h1>{currentCard.cardname}</h1>
        <CardPreviewImage card={currentCard} />
        <section>{currentCard.meaning_up}</section>
        <Link
          href={{
            pathname: "/cards/dailycard/description",
          }}
        >
          <button type="button" aria-label="more details button">
            more details
          </button>
        </Link>

        <Link
          href={{
            pathname: "/cards/dailycard/notes",
          }}
        >
          <button type="button" aria-label="take notes button">
            take notes
          </button>
        </Link>
      </>
    );
  } else {
    return <p>nope</p>;
  }
}
