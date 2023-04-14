import { useEffect, useState } from "react";
import Link from "next/link";
import useLocalStorageState from "use-local-storage";

export default function MoodMeter({ dailyCard, id }) {
  const [disableButton, setDisableButton] = useState(false);
  const [calculation, setCalculation] = useLocalStorageState(`stats.${id}`, {
    id: dailyCard.id,
    mood: 0,
    clicks: 0,
    averageMood: 0.5,
    name: dailyCard.name,
  });

  function addMood() {
    let newCalculationStats = {};
    newCalculationStats = {
      id: dailyCard.id,
      mood: calculation.mood + 1,
      clicks: calculation.clicks + 1,
      name: dailyCard.name,
    };
    setCalculation(newCalculationStats);
    setDisableButton(true);
  }

  function decreaseMood() {
    let newCalculationStats = {};
    newCalculationStats = {
      id: dailyCard.id,
      mood: calculation.mood,
      clicks: calculation.clicks + 1,
      name: dailyCard.name,
    };
    setCalculation(newCalculationStats);
    setDisableButton(true);
  }

  useEffect(() => {
    const averageMood = calculation.mood / calculation.clicks;
    console.log(averageMood);
    let newCalculationStats = {};
    newCalculationStats = {
      id: dailyCard.id,
      mood: calculation.mood,
      clicks: calculation.clicks,
      name: dailyCard.name,
      averageMood: calculation.mood / calculation.clicks,
    };
    setCalculation(newCalculationStats);
  }, [
    calculation.mood,
    calculation.clicks,
    dailyCard.id,
    dailyCard.name,
    setCalculation,
  ]);

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
