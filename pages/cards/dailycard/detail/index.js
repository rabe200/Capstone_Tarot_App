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
        <section>upside: {currentCard.meaning_up}</section>
        <section>reversed: {currentCard.meaning_rev}</section>
        <Link
          href={{
            pathname: "/cards/dailycard/description",
          }}
        >
          card description
        </Link>
        <p>
          <Link
            href={{
              pathname: "/cards/dailycard/notes",
            }}
          >
            next
          </Link>
        </p>
      </>
    );
  } else {
    return <p>nope</p>;
  }
}
