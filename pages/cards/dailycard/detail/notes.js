import Link from "next/link";
import BackButton from "../../../../components/Backbutton/backbutton";
import { useRef, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import useLocalStorageState from "use-local-storage";

function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export default function NoteFormular({ dailyCard, id, setUsedIds, usedIds }) {
  const [inputValue, setInputValue] = useLocalStorage();
  const [notes, setNotes] = useLocalStorageState(`${id}`, []);

  const inputReference = useRef(null);

  useEffect(() => {
    inputReference.current.focus();
  }, []);

  return (
    <>
      <form
        aria-label="form"
        onSubmit={(event) => {
          event.preventDefault();
          const currentMood = JSON.parse(
            localStorage.getItem(`${id}.averageMood`)
          );
          const newNotes = [
            ...notes,
            {
              note: inputValue,
              id: dailyCard.id,
              date: new Date(),
              cardname: dailyCard.name,
              mood: currentMood,
            },
          ];
          setNotes(newNotes);
          setItem(`${id}`, newNotes);
          setInputValue("");

          const newUsedId = [...usedIds, id];
          setUsedIds(newUsedId);
          setItem(`usedIds`, newUsedId);
        }}
      >
        <label htmlFor="note">
          <textarea
            required
            type="text"
            id="note"
            name="note"
            ref={inputReference}
            placeholder="type here"
            aria-label="note"
            value={inputValue}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
        </label>
        note
        <button type="submit" name="submit" aria-label="submit button">
          submit
        </button>
      </form>

      <BackButton name="Back" aria-label="back button" />
      <Link
        href={{
          pathname: "/",
        }}
      >
        <button type="button" name="end" aria-label="end session">
          end
        </button>
      </Link>
    </>
  );
}
