import { useState, useEffect, useRef } from "react";
import useStore from "../../../../src/store/store";
import Link from "next/link";
import StyledMenuBar from "../../../../components/Styled/StyledMenuBar";
import StyledCardContainer from "../../../../components/Styled/StyledCardContainer";
import styled from "styled-components";

export default function Results() {
  const [hasMounted, setHasMounted] = useState(false);
  const currentCard = useStore((state) => state.currentCard);
  const drawnCards = useStore((state) => state.drawnCards);
  const setLastCard = useStore((state) => state.setLastCard);

  const StyledMenuLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-style: italic;
    font-size: 2rem;
  `;

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  if (drawnCards.length > 0) {
    return (
      <>
        <StyledCardContainer>
          <ul>
            <li>Results</li>
            <li>Day: {currentCard.day}</li>
            <li>Hour: {currentCard.hour}</li>
            <li>Minute: {currentCard.minute}</li>
            <li>Second: {currentCard.second}</li>
            <li>{currentCard.name}</li>
            <li>Note: {currentCard.notes}</li>
            <li>Drawn: {currentCard.clicks}x times</li>
            <li>Mood: {currentCard.mood}</li>
            <li>currentMood: {currentCard.currentMood}</li>
            <li>AverageMood: {currentCard.averageMood}</li>
            <li>
              <Link href="/">
                <button
                  type="button"
                  aria-label="end session"
                  onClick={setLastCard}
                >
                  end
                </button>
              </Link>
            </li>
          </ul>
        </StyledCardContainer>
        <StyledMenuBar query1={"/dailycard/notes"} query2={`/`}>
          <StyledMenuLink href={`/`}>menu</StyledMenuLink>{" "}
        </StyledMenuBar>
      </>
    );
  } else {
    return (
      <>
        <p>no cards to review</p>
        <StyledMenuBar
          query1={"/dailycard/moodmeter/"}
          query2={`cards/${currentCard.id}`}
        >
          <StyledMenuLink href={`/`}>menu</StyledMenuLink>{" "}
        </StyledMenuBar>
      </>
    );
  }
}
