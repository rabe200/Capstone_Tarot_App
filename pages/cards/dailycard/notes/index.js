import { useState, useEffect } from "react";
import useStore from "../../../../src/store/store";
import StyledCardContainer from "../../../../components/Styled/StyledCardContainer";
import styled from "styled-components";
import { useRouter } from "next/router";
import TopMenuBar from "../../../../components/Styled/StyledTopMenuBar";
import GridLayout3Columns from "../../../../components/Styled/GridLayoutWithSideNavigation";
import AppContainer from "../../../../components/Styled/StyledAppContainer";

export default function NoteFormular() {
  const [inputValue, setInputValue] = useState();
  const setCurrentCard = useStore((state) => state.setCurrentCard);
  const setCurrentNote = useStore((state) => state.setCurrentNote);
  const copyCurrentNote = useStore((state) => state.copyCurrentNote);
  const drawnCards = useStore((state) => state.drawnCards);
  const difference = useStore((state) => state.difference);
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();

  const StyledSubmitButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: black;
    color: white;
    text-align: center;
    height: 40px;
    font-size: 2rem;
    font-family: pixelOperator;
    &:hover {
      background-color: yellow;
      color: black;
      border: 2px solid white;
      font-size: 3rem;
    }
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
      <AppContainer>
        <StyledCardContainer>
          <div
            style={{
              display: "flex",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <form
              id="textInput"
              aria-label="formular"
              onSubmit={handleSubmit}
              style={{ height: "80%" }}
            >
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
                    width: "100%",
                    height: "100%",
                    fontSize: "2rem",
                    borderRadius: 8,
                  }}
                />
              </label>
            </form>
          </div>
        </StyledCardContainer>
        <StyledSubmitButton
          form="textInput"
          type="submit"
          name="submit"
          aria-label="submit button"
        >
          SUBMIT
        </StyledSubmitButton>
        <TopMenuBar mid={"how do you feel"} />
      </AppContainer>
    </>
  );
}
