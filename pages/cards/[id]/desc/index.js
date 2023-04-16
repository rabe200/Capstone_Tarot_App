import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCardById } from "../../../../lib/data";

export default function Description() {
  const [hasMounted, setHasMounted] = React.useState(false);
  const router = useRouter();
  const id = router.query.id;

  const card = getCardById(id);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    id < 78 && (
      <>
        <h1>DESCRIPTION</h1>
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
        <section>{card.desc}</section>
        <Link href={`/cards/${id}/detail`}>
          <button type="button" aria-label="back">
            back
          </button>
        </Link>
      </>
    )
  );
}
