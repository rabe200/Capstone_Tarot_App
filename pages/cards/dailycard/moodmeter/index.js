import useLocalStorage from "use-local-storage";
import useLocalStorageState from "use-local-storage-state";
import BackButton from "../../../../components/Backbutton/backbutton";

export default function MoodMeter({ dailyCard, id }) {
  const [mood, setMood] = useLocalStorageState();

  return (
    <>
      <button
        type="button"
        aria-label="minus button"
        onClick={() => setMood(mood - 1)}
      >
        -
      </button>
      <button
        type="button"
        aria-label="plus-button"
        onClick={() => setMood(mood + 1)}
      >
        +
      </button>
      <p>
        mood: {mood}
        <p>card: {dailyCard.name}</p>
      </p>
      <p>
        {" "}
        <BackButton />
      </p>{" "}
    </>
  );
}
