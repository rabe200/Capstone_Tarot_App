import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { getCardById } from "../../../../lib/data";

export default function Details() {
  const [hasMounted, setHasMounted] = React.useState(false);
  const router = useRouter();
  const id = router ? router.query?.id : null;
  const card = getCardById(id);
  console.log(card);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    id < 78 && (
      <>
        <h1>DETAILPAGE</h1>
        <figure>
          <Image
            width={100}
            height={180}
            src={card.image}
            alt={card.name}
            priority={true}
          />
          <figcaption>
            {card.type} {card.value_int}
          </figcaption>
        </figure>
        <section>{card.meaning_up}</section>

        <Link href={`/cards/${id}/desc/`}>
          <button type="button" aria-label="more details">
            more details
          </button>
        </Link>
        <Link href={`/cards/${id}/`}>
          <button type="button" aria-label="back">
            back
          </button>
        </Link>
      </>
    )
  );
}
