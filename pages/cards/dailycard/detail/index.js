import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useStore } from "../../../store";

export default function Details() {
  const [hasMounted, setHasMounted] = React.useState(false);
  const currentCard = useStore((state) => state.currentCard);
  console.log(currentCard);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  if (currentCard) {
    return (
      <>
        <h1>{currentCard.cardname}</h1>
        <figure>
          <Image
            width="100"
            height="180"
            src={currentCard.image}
            alt={currentCard.name}
          />
        </figure>
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
