import Image from "next/image";
import { useRouter } from "next/router";
import { getCardById } from "../../../lib/data";
import Link from "next/link";

export default function Details({}) {
  const router = useRouter();
  const id = router.query.id;
  console.log(id);
  if (id) {
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
          <section>{card.desc}</section>
          <Link href={`/cards/${id}/detail`}>
            <button type="button" aria-label="back">
              back
            </button>
          </Link>
        </>
      )
    );
  } else {
    return <p>nope</p>;
  }
}
