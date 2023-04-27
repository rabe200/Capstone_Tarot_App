import { useState, useEffect, useRef } from "react";
import useStore from "../../../../src/store/store";
import Link from "next/link";
import StyledCardContainer from "../../../../components/Styled/StyledCardContainer";
import styled from "styled-components";
import AppContainer from "../../../../components/Styled/StyledAppContainer";
import TopMenuBar from "../../../../components/Styled/StyledTopMenuBar";
import StyledList from "../../../../components/Styled/StyledList";

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
    font-size: 3rem;
  }
`;

const ListContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  justify-content: center;
  align-items: center;
  align-self: center;
`;

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: pixelOperator;
`;

export default function Results() {
  const [hasMounted, setHasMounted] = useState(false);
  const currentCard = useStore((state) => state.currentCard);
  const drawnCards = useStore((state) => state.drawnCards);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  if (drawnCards.length > 0) {
    return (
      <AppContainer>
        <StyledCardContainer>
          <ListContainer>
            <StyledList>
              <li>Day: {dayNames[currentCard.day]}</li>
              <li>Hour: {currentCard.hour}</li>
              <li>Minute: {currentCard.minute}</li>
              <li>Second: {currentCard.second}</li>
              <li>{currentCard.name}</li>
              <li>Note: {currentCard.notes}</li>
              <li>Drawn: {currentCard.clicks}x times</li>
              <li>Mood: {currentCard.mood}</li>
              <li>currentMood: {currentCard.currentMood}</li>
              <li>AverageMood: {currentCard.averageMood}</li>
            </StyledList>
          </ListContainer>
        </StyledCardContainer>
        <StyledLink href={"/"}>
          <StyledSubmitButton>END SESSION</StyledSubmitButton>
        </StyledLink>
        <TopMenuBar mid={"results"} />
      </AppContainer>
    );
  } else {
    return (
      <AppContainer>
        <StyledCardContainer>
          no cards to review
          <TopMenuBar />
        </StyledCardContainer>
      </AppContainer>
    );
  }
}
