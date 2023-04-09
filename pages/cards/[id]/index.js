import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Details({ cards }) {
  const router = useRouter();
  const id = router ? router.query.id : null;

  function handleClickNext() {
    if (id < 77) {
      router.push(`/cards/${parseInt(id) + 1}`);
    } else {
      router.push(`/cards/0`);
    }
  }

  function handleClickPrev() {
    if (id > 0) {
      router.push(`/cards/${parseInt(id) - 1}`);
    } else {
      router.push(`/cards/77`);
    }
  }

  return (
    id < 78 && (
      <>
        <figure>
          <Image
            width={100}
            height={180}
            src={cards[id].image}
            alt={cards[id].name}
            priority={true}
          />
          <figcaption>{cards[id].name}</figcaption>
        </figure>
        <Link href={`/cards/${id}/detail`}>
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
