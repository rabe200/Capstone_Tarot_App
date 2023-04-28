import { useEffect, useState } from "react";
import useStore from "../../src/store/store";
import styled from "styled-components";

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

  useEffect(() => {
    setQuestionInput(generatePrompt(userData));
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

function generatePrompt(userData) {
  let prompt;
  const card = userData.name;
  const averageCardMood = userData.averageMood;
  const timesDrawn = userData.clicks;
  const moodClickedToday = userData.mood;
  const meaning_up = userData.meaning_up;
  const meaning_rev = userData.meaning_rev;
  const day = userData.day;
  const hour = userData.hour;
  const visits = userData.arrayIndex;
  const description = userData.description;
  const greeting =
    hour < 4
      ? "hey vamp"
      : hour < 12
      ? "Good morning"
      : hour < 16
      ? "Hello"
      : hour < 23
      ? "Good Evening"
      : hour <= 24
      ? "good, spooky midnight"
      : null;
  const moodToday = moodClickedToday === 1 ? "good" : "bad";
  const averageMood =
    averageCardMood < 0.1
      ? "extremely bad"
      : averageCardMood < 0.2
      ? "very bad"
      : averageCardMood < 0.3
      ? "bad"
      : averageCardMood < 0.4
      ? "nearly okay"
      : averageCardMood < 0.5
      ? okay
      : averageCardMood < 0.6
      ? "more than okay"
      : averageCardMood < 0.7
      ? "quite good"
      : averageCardMood < 0.8
      ? "really good"
      : averageCardMood < 0.9
      ? "very good"
      : averageCardMood < 1
      ? "extremley good"
      : averageCardMood === 1
      ? "not enough data"
      : averageCardMood === 0
      ? "not enough data"
      : null;

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dayName = dayNames[day];
  prompt = `
  We have met many times. I am your customer for many years. You are a tarot reader of high talent. Give me an extra-ordinar tarot reading based on the following stats: 

  ${greeting}, I have drawn "${card}", this is my ${visits}-th time getting your advice.
    I have drawn this Card ${timesDrawn} times already. I am in ${moodToday} today. If I am in bad mood, try to cheer me up.
    If I am in good mood, you can deliver a darker reading! The average mood for the card drawn today is
    ${averageMood}. 
    Here is some data reflecting the possible meanings for the card drawn: meaning up: "${meaning_up}", meaning reversed: "${meaning_rev}". And here is a visual description of that card: "${description}"
    If ${dayName} Friday or Saturday wish me a nice weekend at the end of your answer.`;
  return prompt;
}
