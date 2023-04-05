import Image from "next/image";
import Link from "next/link";

export default function Details({ dailyCard }) {
  if (dailyCard) {
    return (
      <>
        <h1>{dailyCard.name}</h1>
        <figure>
          <Image
            width="100"
            height="180"
            src={dailyCard.image}
            alt={dailyCard.name}
          />
          <figcaption>
            {dailyCard.type} {dailyCard.value_int}
          </figcaption>
        </figure>
        <article>{dailyCard.desc}</article>
        <Link
          href={{
            pathname: "/cards/dailycard/detail",
          }}
        >
          <button type="button">less details</button>
        </Link>
      </>
    );
  } else {
    return <p>nope</p>;
  }
}
