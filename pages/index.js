import Link from "next/link";

export default function HomePage(id) {
  console.log("id:", id);
  return (
    <>
      <Link href={`/cards/dailycard/moodmeter`}>DAILY CARD</Link>
      <p></p>
      <Link href="/cards/">CARDLIST </Link>
      <p></p>
      <Link href="/cards/history/">history</Link>
      <p></p>
      {id ? <Link href={`/cards/${id.id}`}>overview</Link> : null}
    </>
  );
}
