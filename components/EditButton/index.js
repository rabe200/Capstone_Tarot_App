import { Fragment, useState, useEffect } from "react";
import useStore from "../../src/store/store";
export default function EditButton({ card }) {
  const [hasMounted, setHasMounted] = useState(false);
  const [clicked, setClicked] = useState("false");
  const [hidden, setHidden] = useState("hidden");
  const [hiddenButton, setHiddenButton] = useState(true);
  const [hiddenToggle, setHiddenToggle] = useState(true);
  const setCurrentNote = useStore((state) => state.setCurrentNote);
  const [inputValue, setInputValue] = useState("");
  const editSelectedNote = useStore((state) => state.editSelectedNote);
  const [displayedNote, setDisplayedNote] = useState("");

  function closeInputHideButton() {
    setHidden("hidden");
    setHiddenButton(true);
  }

  function toggleEditButton() {
    setClicked("true");
    setHidden("text");
    setHiddenButton(false);
    setHiddenToggle(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setHidden("hidden");
    setHiddenButton(true);
    setCurrentNote(inputValue);
    setDisplayedNote(inputValue);
    editSelectedNote(card);
  }

  useEffect(() => {
    setInputValue(inputValue);
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <Fragment key={card.uuid}>
      <button
        type="button"
        aria-label={`edit entry ${card.name}`}
        onClick={toggleEditButton}
      >
        edit
      </button>
      <form hidden={hiddenToggle} onSubmit={handleSubmit}>
        <input
          type={hidden}
          name={"inputfield"}
          placeholder={card.notes}
          id={card.uuid}
          value={inputValue}
          aria-label={"input field"}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        ></input>
        <button
          id={card.uuid}
          type="submit"
          hidden={hiddenButton}
          onClick={closeInputHideButton}
          aria-label="save changes"
        >
          save
        </button>
      </form>
    </Fragment>
  );
}
