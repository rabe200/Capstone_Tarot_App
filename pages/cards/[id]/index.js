import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

export default function Details({ cards }) {
  const router = useRouter();
  const id = router ? router.query.id : null;
  const [currentPage, setCurrentPage] = useState(id);

  function handleClickNext() {
    if (id < 77) {
      setCurrentPage(parseInt(currentPage) + 1);
      console.log(currentPage);
      router.push(`/cards/${parseInt(id) + 1}`);
    } else {
      setCurrentPage(0);
      router.push(`/cards/0`);
    }
  }

  function handleClickPrev() {
    if (id > 0) {
      setCurrentPage(parseInt(currentPage) - 1);
      console.log(currentPage);
      router.push(`/cards/${parseInt(id) - 1}`);
    } else {
      setCurrentPage(77);
      router.push(`/cards/77`);
    }
  }
  useEffect(() => {
    setCurrentPage(currentPage);
    console.log("useEffect: ", currentPage);
  }, [currentPage]);
  return (
    id < 78 && (
      <>
        <figure>
          <Image
            width={100}
            height={180}
            src={cards[currentPage].image}
            alt={cards[currentPage].name}
            priority={true}
          />
          <figcaption>{cards[currentPage].name}</figcaption>
        </figure>
        <Link href={`/cards/${currentPage}/detail`}>
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
