import React, { useState, useEffect, useRef } from "react";
import useStore from "../../../../src/store/store";
import Link from "next/link";
export default function Results() {
  const [hasMounted, setHasMounted] = React.useState(false);
  const currentCard = useStore((state) => state.currentCard);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <ul>
      <li>Results</li>
      <li>{currentCard.name}</li>
      <li>Note: {currentCard.notes}</li>
      <li>IndexInArray: {currentCard.arrayIndex}</li>
      <li>Clicks: {currentCard.clicks}</li>
      <li>
        <Link href="/">
          <button type="button" aria-label="end session">
            end
          </button>
        </Link>
      </li>
    </ul>
  );
}
