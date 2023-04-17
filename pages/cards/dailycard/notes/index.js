import Link from "next/link";
import BackButton from "../../../../components/Backbutton/backbutton";
import { useState, useEffect, useRef } from "react";
import useStore from "../../../../src/store/store";
import { useRouter } from "next/router";

export default function NoteFormular() {
  // const [hasMounted, setHasMounted] = React.useState(false);
  const router = useRouter();
  const [inputValue, setInputValue] = useState();
  const inputReference = useRef(null);
  const setCurrentCard = useStore((state) => state.setCurrentCard);
  const setCurrentNote = useStore((state) => state.setCurrentNote);
  const copyCurrentNote = useStore((state) => state.copyCurrentNote);
  const updateCurrentCardByNote = useStore(
    (state) => state.updateCurrentCardByNote
  );
  const drawnCards = useStore((state) => state.drawnCards);
  const [hidden, setHidden] = useState(false);
  const currentCard = useStore((state) => state.currentCard);
  const [displayedNote, setDisplayedNote] = useState("");
  const difference = useStore((state) => state.difference);

  function handleSubmit(event) {
    event.preventDefault();
    if (drawnCards.length > 0) {
      setHidden(true);
      setCurrentNote(inputValue);
      setDisplayedNote(inputValue);
      setInputValue("");
      console.log(difference);
      setCurrentCard(difference);
      console.log(currentCard);
      copyCurrentNote();
    } else {
      alert("no cards in history - add some cards to enable saving");
    }
  }

  useEffect(() => {
    inputReference.current.focus();
  }, []);

  return (
    <>
      <form hidden={hidden} aria-label="formular" onSubmit={handleSubmit}>
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
      {hidden ? (
        <p>
          <b>{displayedNote}</b>
        </p>
      ) : null}
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
