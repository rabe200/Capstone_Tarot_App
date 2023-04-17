import { useEffect, useState } from "react";
import Link from "next/link";
import useStore from "../../../../src/store/store";
import { getCardById } from "../../../../lib/data";

export default function MoodMeter() {
  const [disableButton, setDisableButton] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const drawCard = useStore((state) => state.drawCard);
  const increaseCardsDrawn = useStore((state) => state.increaseCardsDrawn);
  const currentCard = useStore((state) => state.currentCard);
  const setRandomCard = useStore((state) => state.setRandomCard);
  const updateCardsDrawn = useStore((state) => state.updateCardsDrawn);
  const setCardMoodPlusOne = useStore((state) => state.setCardMoodPlusOne);
  const setCardMoodMinusOne = useStore((state) => state.setCardMoodMinusOne);
  const setCurrentCard = useStore((state) => state.setCurrentCard);
  const difference = useStore((state) => state.difference);

  function handlePlusClick() {
    increaseCardsDrawn();
    setCardMoodPlusOne(randomCard.name);
    setRandomCard(randomCard);
    drawCard();
    updateCardsDrawn();
    setCurrentCard(difference);
  }
  function handleMinusClick() {
    console.log(randomCard);
    increaseCardsDrawn();
    setCardMoodMinusOne(randomCard.name);
    setRandomCard(randomCard);
    drawCard();
    updateCardsDrawn();
    setCurrentCard(difference);
  }

  function randomIndex(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const randomCardIndex = randomIndex(0, 77);
  const randomCard = getCardById(randomCardIndex);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <h4>how is your mood right now?</h4>
      <button
        disabled={disableButton}
        type="button"
        aria-label="minus button"
        onClick={() => handlePlusClick()}
      >
        good
      </button>
      <button
        disabled={disableButton}
        type="button"
        aria-label="minus button"
        onClick={() => handleMinusClick()}
      >
        bad
      </button>
      <p></p>
      {currentCard ? (
        <p>card: {currentCard.name}</p>
      ) : (
        <p>waiting for action</p>
      )}
      {/* {currentCard.averageMood >= 0 ? (
        <p>Mood: {Math.round(drawnCards.averageMood * 100)} %</p>
      ) : null}
      <p>{currentCard.averageMood >= 0.5 ? ":)" : ":("}</p>{" "} */}
      <Link href="../dailycard">
        <button type="button">next</button>
      </Link>
    </>
  );
}
