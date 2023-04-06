import Link from "next/link";
import BackButton from "../../../../components/Backbutton/backbutton";
import { useRef, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import useLocalStorageState from "use-local-storage";
import { v4 as uuidv4 } from "uuid";

function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export default function NoteFormular({ dailyCard }) {
  const [inputValue, setInputValue] = useLocalStorage();
  const [notes, setNotes] = useLocalStorageState("text", []);

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

          const newNotes = [
            ...notes,
            {
              text: inputValue,
              id: uuidv4(),
              date: new Date(),
              cardname: dailyCard.name,
            },
          ];
          setNotes(newNotes);
          setItem("text", newNotes);
          setInputValue("");
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
        <button type="submit" name="submit">
          submit
        </button>
      </form>

      <BackButton name="Back" />
      <Link
        href={{
          pathname: "/",
        }}
      >
        <button type="button" name="end">
          end
        </button>
      </Link>
    </>
  );
}
