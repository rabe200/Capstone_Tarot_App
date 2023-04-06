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
        <section>{dailyCard.meaning_up}</section>
        <Link
          href={{
            pathname: "/cards/dailycard/detail/description",
          }}
        >
          <button type="button">more details</button>
        </Link>

        <Link
          href={{
            pathname: "/cards/dailycard/detail/notes",
          }}
        >
          <button type="button">make notes</button>
        </Link>
      </>
    );
  } else {
    return <p>nope</p>;
  }
}
