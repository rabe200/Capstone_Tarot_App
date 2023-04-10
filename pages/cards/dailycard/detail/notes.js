import Link from "next/link";
import BackButton from "../../../../components/Backbutton/backbutton";
import { useRef, useEffect } from "react";
import useLocalStorageState from "use-local-storage";
import useLocalStorage from "use-local-storage";

function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export default function NoteFormular({ dailyCard, id, setUsedIds, usedIds }) {
  const [inputValue, setInputValue] = useLocalStorage();
  const inputReference = useRef(null);
  const [notes, setNotes] = useLocalStorageState(`notes.${id}`, []);

  function handleSubmit(event) {
    event.preventDefault();

    const newNote = [
      ...notes,
      {
        id: dailyCard.id,
        date: new Date(),
        notes: inputValue,
        name: dailyCard.name,
      },
    ];
    setNotes(newNote);
    const newUsedId = [...usedIds, id];
    setUsedIds(newUsedId);
    setItem(`usedIds`, newUsedId);
    setInputValue("");
  }

  useEffect(() => {
    inputReference.current.focus();
  }, []);

  return (
    <>
      <form aria-label="formular" onSubmit={handleSubmit}>
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
