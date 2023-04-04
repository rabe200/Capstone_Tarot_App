import Link from "next/link";

export default function HomePage({ randomNumber }) {
  return (
    <>
      <Link href={`/cards/${randomNumber}`}>DAILY CARD </Link>
      <p></p>
      <Link href="/cards">CARDLIST</Link>
    </>
  );
}
