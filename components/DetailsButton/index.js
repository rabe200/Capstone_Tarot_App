import Link from "next/link";
export default function DetailsButton({ card, id }) {
  return (
    <>
      {card ? (
        <Link href={`/cards/${card.id}/detail`}>
          <button type="button" aria-label="more details button">
            more details
          </button>
        </Link>
      ) : (
        <Link href={`/cards/${id}/detail`}>
          <button type="button" aria-label="more details button">
            more details
          </button>
        </Link>
      )}
    </>
  );
}
