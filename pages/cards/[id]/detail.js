import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { getCardById } from "../../../lib/data";

export default function Details() {
  const router = useRouter();
  const id = router ? router.query?.id : null;
  const card = getCardById(id);
  return (
    id < 78 && (
      <>
        <h1>detailpage{card.name}</h1>
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

        <Link href={`/cards/${id}/description`}>
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
