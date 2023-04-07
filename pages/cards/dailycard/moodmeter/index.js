import useLocalStorageState from "use-local-storage-state";
import BackButton from "../../../../components/Backbutton/backbutton";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function MoodMeter({ dailyCard, id }) {
  const [mood, setMood] = useLocalStorageState("mood", []);
  const [clicks, setClicks] = useLocalStorageState("clicks", []);
  const [averageMood, setAverageMood] = useLocalStorageState("averageMood", []);
  const [disableButton, setDisableButton] = useState(false);

  function addMood() {
    setMood(mood + 1);
    setClicks(clicks + 1);
    writeAverageMood();
    setDisableButton(true);
  }

  function decreaseMood() {
    setMood(mood - 1);
    setClicks(clicks + 1);
    writeAverageMood();
    setDisableButton(true);
  }

  function writeAverageMood() {
    setAverageMood(mood / clicks);
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
      {averageMood ? <p>Mood: {Math.round(averageMood * 100)} %</p> : null}
      <p>{averageMood >= 0.5 ? ":)" : ":("}</p>{" "}
      <Link href="../dailycard">
        <button type="button">next</button>
      </Link>
    </>
  );
}
