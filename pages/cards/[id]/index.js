import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { getCardById } from "../../../lib/data";

export default function Details() {
  const router = useRouter();
  const id = router ? router.query.id : null;
  const [currentPage, setCurrentPage] = useState(id);

  function handleClickNext() {
    if (id < 77) {
      setCurrentPage(parseInt(id) + 1);
      router.push(`/cards/${parseInt(id) + 1}`);
    } else {
      setCurrentPage(0);
      router.push(`/cards/0`);
    }
  }

  function handleClickPrev() {
    if (id > 0) {
      setCurrentPage(parseInt(id) - 1);
      router.push(`/cards/${parseInt(id) - 1}`);
    } else {
      setCurrentPage(77);
      router.push(`/cards/77`);
    }
  }

  const card = getCardById(id);
  return (
    id < 78 && (
      <>
        <figure>
          <Image
            width={100}
            height={180}
            src={card.image}
            alt={card.name}
            priority={true}
          />
          <figcaption>{card.name}</figcaption>
          <Link href={`/cards/${card.id}/notes`}>
            <button type="button" aria-label="go to notes">
              notes
            </button>
          </Link>
        </figure>
        <Link href={`/cards/${card.id}/detail`}>
          <button type="button" aria-label="more details button">
            more details
          </button>
        </Link>
        <button
          type="button"
          aria-label="previous card"
          onClick={handleClickPrev}
        >
          PREV
        </button>
        <button type="button" aria-label="next card" onClick={handleClickNext}>
          NEXT
        </button>
        <Link href="/">
          <button type="button" aria-label="back to menu">
            back to menu
          </button>
        </Link>
      </>
    )
  );
}
