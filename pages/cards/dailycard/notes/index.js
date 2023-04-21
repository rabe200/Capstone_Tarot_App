import { useState, useEffect } from "react";
import useStore from "../../../../src/store/store";
import StyledMenuBar from "../../../../components/Styled/StyledMenuBar";
import StyledCardContainer from "../../../../components/Styled/StyledCardContainer";

import styled from "styled-components";
import { useRouter } from "next/router";

export default function NoteFormular() {
  const [inputValue, setInputValue] = useState();
  const setCurrentCard = useStore((state) => state.setCurrentCard);
  const setCurrentNote = useStore((state) => state.setCurrentNote);
  const copyCurrentNote = useStore((state) => state.copyCurrentNote);
  const drawnCards = useStore((state) => state.drawnCards);
  const difference = useStore((state) => state.difference);
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();
  const SubmitButton = styled.button`
    background-color: hotpink;
    width: 250px;
    height: 40px;
  `;

  function handleSubmit(event) {
    event.preventDefault();
    if (drawnCards.length > 0) {
      setCurrentNote(inputValue);
      setInputValue("");
      copyCurrentNote();
      setCurrentCard(difference - 1);
      router.push("/cards/dailycard/results");
    } else {
      alert("no cards in history - add some cards to enable saving");
    }
  }

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <StyledMenuBar
        query1={"/cards/dailycard/"}
        query2={"/cards/dailycard/results"}
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
        <form id="textInput" aria-label="formular" onSubmit={handleSubmit}>
          <label htmlFor="note">
            <textarea
              required
              type="text"
              id="note"
              name="note"
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
        </form>
      </StyledCardContainer>
    </>
  );
}
