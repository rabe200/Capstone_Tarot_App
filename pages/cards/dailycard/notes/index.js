import Link from "next/link";
import BackButton from "../../../../components/Backbutton/backbutton";
import React, { useState, useEffect, useRef } from "react";
import useStore from "../../../../src/store/store";

export default function NoteFormular() {
  const [hasMounted, setHasMounted] = React.useState(false);
  const currentCard = useStore((state) => state.currentCard);
  const [inputValue, setInputValue] = useState();
  const inputReference = useRef(null);
  const setCurrentNote = useStore((state) => state.setCurrentNote);
  const copyCurrentNote = useStore((state) => state.copyCurrentNote);
  const setCardNote = useStore((state) => state.setCardNote);
  const updateCurrentCardByNote = useStore(
    (state) => state.updateCurrentCardByNote
  );
  const drawnCards = useStore((state) => state.drawnCards);
  function handleSubmit(event) {
    event.preventDefault();
    setCurrentNote(inputValue);
    setInputValue("");
    copyCurrentNote();
  }

  useEffect(() => {
    inputReference.current.focus();
  }, []);

  // useEffect(() => {
  //   updateCurrentCardByNote();
  // }, [copyCurrentNote]);

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
          pathname: "/cards/dailycard/results",
        }}
      >
        <button
          type="button"
          name="end"
          aria-label="end session"
          onClick={updateCurrentCardByNote}
        >
          results
        </button>
      </Link>
    </>
  );
}
