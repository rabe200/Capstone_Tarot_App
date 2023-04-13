import Link from "next/link";

export default function HomePage(id) {
  return (
    <>
      <Link href={`/cards/dailycard/moodmeter`}>DAILY CARD</Link>
      <p></p>
      <Link href="/cards/history/">history</Link>
      <p></p>
      {id ? <Link href={`/cards/${id.id}`}>overview</Link> : null}
      <p></p>
      <Link href="/search">search</Link>
    </>
  );
}
