import Link from "next/link";
import React, { useState, useEffect } from "react";
import useStore from "../src/store/store";

export default function HomePage() {
  const [hasMounted, setHasMounted] = React.useState(false);
  const currentCard = useStore((state) => state.currentCard);
  React.useEffect(() => {
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
      {currentCard.id ? (
        <Link href={`/cards/${currentCard.id}`}>overview</Link>
      ) : null}
      <p></p>
      <Link href="cards/search">search</Link>
      <p></p>
    </>
  );
}
