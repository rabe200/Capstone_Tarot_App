import { Fragment, useEffect, useState } from "react";
import useStore from "../../src/store/store";
import styled from "styled-components";
import GeneratePrompt from "../GeneratePrompt";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 580px;
`;

const StyledSubmitButton = styled.button`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  background: black;
  color: withe;
  text-align: center;
  height: 40 px;
  border-radius: 8 px;
  font-size: 1rem;
  font-family: pixelOperator;
  &:hover {
    background-color: yellow;
    color: black;
  }
  &:after {
    pointer-events: none;
  }
`;

const ResultContainer = styled.div`
  display: flex;
  position: relative;
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorFront};
  height: 100%;
  width: 100%;
  overflow: auto;
`;

const StyledText = styled.div`
  display: flex;
  position: relative;
  top: 0;
  font-size: 1.6rem;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export default function ChatApi() {
  const [hasMounted, setHasMounted] = useState(false);
  const [questionInput, setQuestionInput] = useState("");
  const [result, setResult] = useState();
  const userData = useStore((state) => state.currentCard);
  const [clicked, setClicked] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [hideReading, setHideReading] = useState(true);
  const setCurrentReading = useStore((state) => state.setCurrentReading);
  const setAllReadings = useStore((state) => state.setAllReadings);
  const [loading, setLoading] = useState(false);
  const allReadings = useStore((state) => state.allReadings);
  const currentNote = useStore((state) => state.currentNote);

  useEffect(() => {
    setQuestionInput(GeneratePrompt(userData, allReadings, currentNote));
  }, []);

  useEffect(() => setHasMounted(true), []);

  if (!hasMounted) {
    return null;
  }

  async function handleSubmit() {
    setDisableButton(true);
    setLoading(true);
    console.log("wait a moment");

    try {
      const response = await fetch("/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: questionInput }),
      });

      const data = await response.json();
      if (response.status === 400) {
        throw setDisableButton(false);
      }

      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      if (response.status === 200) {
        setHideReading(false);
      }
      setCurrentReading(data.result);
      setResult(data.result);
      setAllReadings(data.result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    return;
  }

  console.log("buttonDisabled?", disableButton);
  return (
    userData && (
      <Fragment>
        <ContentContainer>
          <StyledSubmitButton
            type={"button"}
            id={"readingButton"}
            onClick={() => handleSubmit()}
            disabled={disableButton}
          >
            {loading ? "talking to the spirits" : "get reading"}
          </StyledSubmitButton>
          <ResultContainer hidden={hideReading}>
            <StyledText>{result}</StyledText>
          </ResultContainer>
        </ContentContainer>
      </Fragment>
    )
  );
}
