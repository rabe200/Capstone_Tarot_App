import Link from "next/link";
import { useState, useEffect } from "react";
import useStore from "../src/store/store";

export default function HomePage() {
  const [hasMounted, setHasMounted] = useState(false);
  const lastCard = useStore((state) => state.lastCard);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <>
      <Link href={`/cards/dailycard/moodmeter`}>DAILY CARD</Link>
      <p></p>
      <Link href="/cards/history/">history</Link>
      <p></p>
      {lastCard.name ? (
        <Link href={`/cards/${lastCard.id}`}>overview</Link>
      ) : (
        <Link href={`/cards/0`}>overview</Link>
      )}
      <p></p>
      <Link href="cards/search">search</Link>
      <p></p>
    </>
  );
}
