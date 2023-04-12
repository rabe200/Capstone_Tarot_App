import Link from "next/link";
export default function DetailsButton({ card }) {
  return (
    <>
      <Link href={`/cards/${card.id}/detail`}>
        <button type="button" aria-label="more details button">
          more details
        </button>
      </Link>
    </>
  );
}
