import { useEffect, useState } from "react";
import Link from "next/link";
import useLocalStorageState from "use-local-storage";

export default function MoodMeter({ dailyCard, id }) {
  const [disableButton, setDisableButton] = useState(false);
  const [calculation, setCalculation] = useLocalStorageState(`stats.${id}`, {
    id: dailyCard.id,
    mood: 1,
    clicks: 1,
    averageMood: 1,
    name: dailyCard.name,
  });

  function addMood() {
    const newCalculationStats = {
      id: dailyCard.id,
      mood: calculation.mood + 1,
      clicks: calculation.clicks + 1,
      averageMood: (calculation.mood + 1) / (calculation.clicks + 1),
      name: dailyCard.name,
    };
    setCalculation(newCalculationStats);
    setDisableButton(true);
  }

  function decreaseMood() {
    if (calculation.mood > 0) {
      const newCalculationStats = {
        id: dailyCard.id,
        mood: calculation.mood - 1,
        clicks: calculation.clicks + 1,
        averageMood: (calculation.mood - 1) / (calculation.clicks + 1),
        name: dailyCard.name,
      };
      setCalculation(newCalculationStats);
    } else {
      const newCalculationStats = {
        id: dailyCard.id,
        mood: calculation.mood,
        clicks: calculation.clicks + 1,
        averageMood: calculation.mood / (calculation.clicks + 1),
        name: dailyCard.name,
      };
      setCalculation(newCalculationStats);
      setDisableButton(true);
    }
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
      {calculation.averageMood >= 0 ? (
        <p>Mood: {Math.round(calculation.averageMood * 100)} %</p>
      ) : null}
      <p>{calculation.averageMood >= 0.5 ? ":)" : ":("}</p>{" "}
      <Link href="../dailycard">
        <button type="button">next</button>
      </Link>
    </>
  );
}
