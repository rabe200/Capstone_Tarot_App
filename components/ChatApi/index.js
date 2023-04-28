import { useEffect, useState } from "react";
import useStore from "../../src/store/store";
import styled from "styled-components";
import GeneratePrompt from "../GeneratePrompt";

const StyledSubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  height: 40px;
  border-radius: 8px;
  font-size: 2rem;
  font-family: pixelOperator;
  &:hover {
    background-color: yellow;
    color: black;
    border: 2px solid white;
    font-size: 2.1rem;
  }
  &:after {
    pointer-events: none;
  }
`;

const ResultContainer = styled.div`
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorFront};
`;

export default function EntryChatGPT() {
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

  useEffect(() => {
    setQuestionInput(GeneratePrompt(userData));
  }, []);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  async function handleSubmit() {
    setDisableButton(true);

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
    } catch (error) {
      console.log(error);
    }
    return;
  }

  console.log("buttonDisabled?", disableButton);
  return (
    userData && (
      <>
        <StyledSubmitButton
          type={"button"}
          id={"readingButton"}
          onClick={() => handleSubmit()}
          disabled={disableButton}
        >
          get reading
        </StyledSubmitButton>
        <ResultContainer hidden={hideReading}>{result}</ResultContainer>
      </>
    )
  );
}
