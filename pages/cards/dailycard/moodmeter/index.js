import { useState } from "react";
import Link from "next/link";

export default function MoodMeter({
  dailyCard,
  setMood,
  setClicks,
  averageMood,
  clicks,
  mood,
}) {
  const [disableButton, setDisableButton] = useState(false);

  function addMood() {
    setMood(mood + 1);
    setClicks(clicks + 1);
    setDisableButton(true);
  }

  function decreaseMood() {
    if (mood > 0) setMood(mood - 1);
    setClicks(clicks + 1);
    setDisableButton(true);
  }

  return (
    <>
      <button
        disabled={disableButton}
        type="button"
        aria-label="minus button"
        onClick={() => decreaseMood()}
      >
        -
      </button>
      <button
        disabled={disableButton}
        type="button"
        aria-label="plus-button"
        onClick={() => addMood()}
      >
        +
      </button>
      <p>card: {dailyCard.name}</p>
      {averageMood >= 0 ? <p>Mood: {Math.round(averageMood * 100)} %</p> : null}
      <p>{averageMood >= 0.5 ? ":)" : ":("}</p>{" "}
      <Link href="../dailycard">
        <button type="button">next</button>
      </Link>
    </>
  );
}
