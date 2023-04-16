import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import useStore from "../../../../src/store/store";
export default function Description() {
  const [hasMounted, setHasMounted] = React.useState(false);

  const currentCard = useStore((state) => state.currentCard);
  console.log(currentCard);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <>
      <h1>{currentCard.name}</h1>
      <figure>
        <Image
          width="100"
          height="180"
          decoding="async"
          data-nimg="1"
          loading="lazy"
          src={currentCard.image}
          alt={currentCard.name}
        />
        <figcaption>
          {console.log(currentCard)}
          {currentCard.type} {currentCard.value_int}
        </figcaption>
      </figure>
      <article>{currentCard.description}</article>
      <Link href={{ pathname: "/cards/dailycard/detail" }}>
        <button type="button" aria-label="less details button">
          less details
        </button>
      </Link>
      <Link href={{ pathname: "/cards/dailycard/notes" }}>
        <button type="button" aria-label="take notes">
          take notes
        </button>
      </Link>
    </>
  );
}
