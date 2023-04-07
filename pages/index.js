import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Link href={`/cards/dailycard/moodmeter`}>DAILY CARD</Link>
      <p></p>
      <Link href="/cards/">CARDLIST</Link>
    </>
  );
}
