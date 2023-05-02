import { Fragment, useEffect, useState } from "react";
import useStore from "../../src/store/store";
import styled from "styled-components";
import GeneratePrompt from "../GeneratePrompt";
import Frame from "../Frame";

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 247px;
  top: 15px;
  overflow: auto;
  min-height: 400px;
  @media only screen and (min-width: 414px) {
    width: 333px;
    top: 25px;
  }

  @media only screen and (min-width: 585px) {
    width: 444px;
    top: 50px;
  }
  @media only screen and (min-width: 834px) {
    width: 666px;
    top: 75px;
  }
  @media only screen and (min-width: 1194px) {
    width: 888px;
    top: 100px;
  }
  @media only screen and (min-width: 1400px) {
    width: 1111px;
  }
`;

const StyledSubmitButton = styled.button`
  display: flex;
  position: relative;
  height: 40px;
  box-shadow: 0 2px 2px white;
  z-index: 1000;
  align-items: center;
  justify-content: center;
  width: 200px;
  background: ${(p) => p.theme.colorText};
  color: ${(p) => p.theme.colorBackground};
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
  color: ${(p) => p.theme.colorText};
  height: 100%;
  width: 100%;
  overflow: auto;
`;

const StyledText = styled.div`
  display: flex;
  position: relative;
  top: 0;
  font-size: 1.8rem;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const ButtonHideContainer = styled.div``;

export default function ChatApi() {
  const [hasMounted, setHasMounted] = useState(false);
  const [questionInput, setQuestionInput] = useState("");
  const [result, setResult] = useState();
  const userData = useStore((state) => state.currentCard);
  const [disableButton, setDisableButton] = useState(false);
  const [hideReading, setHideReading] = useState(true);
  const setCurrentReading = useStore((state) => state.setCurrentReading);
  const setAllReadings = useStore((state) => state.setAllReadings);
  const [loading, setLoading] = useState(false);
  const allReadings = useStore((state) => state.allReadings);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setQuestionInput(GeneratePrompt(userData, allReadings));
  }, []);

  useEffect(() => setHasMounted(true), []);

  if (!hasMounted) {
    return null;
  }

  async function handleSubmit() {
    setDisableButton(true);
    setLoading(true);
    console.log("wait a moment");

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: questionInput,
      }),
    });

    if (!response.ok) {
      setDisableButton(false);
      throw new Error(response.statusText);
    }

    if (response.status === 200) {
      setHidden(true);
      const data = response.body;
      if (!data) {
        return console.log("no data");
      }
      const reader = data.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        setResult((prev) =>
          prev !== undefined ? prev + chunkValue : chunkValue
        );
      }
      setCurrentReading(result);
      setAllReadings(result);
      setLoading(false);
    }
  }

  return (
    userData && (
      <Frame>
        <ContentContainer>
          <ButtonHideContainer hidden={hidden}>
            <StyledSubmitButton
              type={"button"}
              id={"readingButton"}
              onClick={() => handleSubmit()}
              disabled={disableButton}
            >
              {loading ? "talking to the spirits" : "get reading"}
            </StyledSubmitButton>
          </ButtonHideContainer>

          <ResultContainer hidden={hideReading}>
            <StyledText>{result}</StyledText>
          </ResultContainer>
        </ContentContainer>
      </Frame>
    )
  );
}
