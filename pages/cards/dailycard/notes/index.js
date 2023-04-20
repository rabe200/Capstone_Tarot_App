import { useState, useEffect, useRef } from "react";
import useStore from "../../../../src/store/store";
import StyledMenuBar from "../../../../components/Styled/StyledMenuBar";
import StyledCardContainer from "../../../../components/Styled/StyledCardContainer";

import styled from "styled-components";

export default function NoteFormular() {
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
  const [displayedNote, setDisplayedNote] = useState("");
  const difference = useStore((state) => state.difference);

  const SubmitButton = styled.button`
    background-color: hotpink;
    width: 250px;
    height: 40px;
  `;

  function handleSubmit(event) {
    event.preventDefault();
    if (drawnCards.length > 0) {
      setHidden(true);
      setCurrentNote(inputValue);
      setDisplayedNote(inputValue);
      setInputValue("");
      copyCurrentNote();
      setCurrentCard(difference - 1);
    } else {
      alert("no cards in history - add some cards to enable saving");
    }
  }

  useEffect(() => {
    inputReference.current.focus();
  }, []);

  return (
    <>
      <StyledMenuBar
        query1={"/cards/dailycard/"}
        query2={"/cards/dailycard/results"}
        onClick2={updateCurrentCardByNote}
      >
        <SubmitButton
          form="textInput"
          type="submit"
          name="submit"
          aria-label="submit button"
        >
          submit
        </SubmitButton>
      </StyledMenuBar>
      <StyledCardContainer>
        <form
          id="textInput"
          hidden={hidden}
          aria-label="formular"
          onSubmit={handleSubmit}
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
              style={{
                width: 290,
                height: 517,
                fontSize: "2rem",
                borderRadius: 8,
              }}
            />
          </label>

          {hidden ? (
            <p>
              <b>{displayedNote}</b>
            </p>
          ) : null}
        </form>
      </StyledCardContainer>
    </>
  );
}
