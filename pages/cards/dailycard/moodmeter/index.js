import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import useStore from "../../../../src/store/store";
import { useRouter } from "next/router";
export default function MoodMeter() {
  const [disableButton, setDisableButton] = useState(false);
  const cardStore = useStore((state) => state.drawnCards);
  const router = useRouter();
  const [hasMounted, setHasMounted] = React.useState(false);
  const addCard = useStore((state) => state.drawCard);
  const cardsDrawn = useStore((state) => state.cardsDrawn);
  const addClick = useStore((state) => state.addClick);
  const minusClick = useStore((state) => state.minusClick);
  const resetClicks = useStore((state) => state.resetClicks);
  const increaseCardsDrawn = useStore((state) => state.increaseCardsDrawn);
  const setCurrentCard = useStore((state) => state.setCurrentCard);
  const currentCard = useStore((state) => state.currentCard);
  const copyCurrentNote = useStore((state) => state.copyCurrentNote);
  function addCardAndIncreaseCardsDrawn() {
    addCard();
    increaseCardsDrawn();
  }

  useEffect(() => setCurrentCard(-1));

  // console.log(currentCard);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <button
        disabled={disableButton}
        type="button"
        aria-label="minus button"
        onClick={() => addCardAndIncreaseCardsDrawn()}
      >
        + card
      </button>
      <button type="button" onClick={() => addClick()}>
        click +++
      </button>
      <button type="button" onClick={() => minusClick()}>
        click ---
      </button>
      <button type="button" onClick={() => resetClicks()}>
        resetClicks
      </button>
      <p></p>
      <button type="button" onClick={() => copyCurrentNote()}>
        copyCurrentNote
      </button>
      {currentCard ? (
        <p>card: {currentCard.name}</p>
      ) : (
        <p>waiting for action</p>
      )}
      {/* {drawnCards.averageMood >= 0 ? (
        <p>Mood: {Math.round(drawnCards.averageMood * 100)} %</p>
      ) : null}
      <p>{drawnCards.averageMood >= 0.5 ? ":)" : ":("}</p>{" "} */}
      <Link href="../dailycard">
        <button type="button">next</button>
      </Link>
    </>
  );
}
