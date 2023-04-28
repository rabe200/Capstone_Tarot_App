import { useEffect, useState } from "react";
import useStore from "../../../../src/store/store";
import { getCardById } from "../../../../lib/data";
import StyledCardContainer from "../../../../components/Styled/StyledCardContainer";
import styled from "styled-components";
import { useRouter } from "next/router";
import GoodMoodIcon from "../../../../components/Styled/GoodMoodIcon";
import BadMoodIcon from "../../../../components/Styled/BadMoodIcon";
import AppContainer from "../../../../components/Styled/StyledAppContainer";
import TopMenuBar from "../../../../components/Styled/StyledTopMenuBar";
import GridLayout3Columns from "../../../../components/Styled/GridLayoutWithSideNavigation";

const MoodButtonGood = styled.div`
  width: 100%;
  height: 100%;
`;

const MoodButtonBad = styled.div`
  width: 100%;
  height: 100%;
`;

const MoodContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15% 33fr 33fr;
  gap: 0px 0px;
  grid-template-areas:
    "."
    "."
    ".";
  justify-content: center;
  align-content: space-evenly;
  justify-items: center;
  align-items: center;
  height: 100%;
`;

export default function MoodMeter() {
  const router = useRouter();
  const [hasMounted, setHasMounted] = useState(false);
  const drawCard = useStore((state) => state.drawCard);
  const increaseCardsDrawn = useStore((state) => state.increaseCardsDrawn);
  const setRandomCard = useStore((state) => state.setRandomCard);
  const updateCardsDrawn = useStore((state) => state.updateCardsDrawn);
  const setCardMoodPlusOne = useStore((state) => state.setCardMoodPlusOne);
  const setCardMoodMinusOne = useStore((state) => state.setCardMoodMinusOne);
  const setCurrentCard = useStore((state) => state.setCurrentCard);
  const difference = useStore((state) => state.difference);
  const setLastCard = useStore((state) => state.setLastCard);

  function handlePlusClick() {
    increaseCardsDrawn();
    setCardMoodPlusOne(randomCard.name);
    setRandomCard(randomCard);
    drawCard(randomCard);
    updateCardsDrawn();
    setCurrentCard(difference);
    setLastCard();
    router.push(`/cards/dailycard/`);
  }
  function handleMinusClick() {
    increaseCardsDrawn();
    setCardMoodMinusOne(randomCard.name);
    setRandomCard(randomCard);
    drawCard(randomCard);
    updateCardsDrawn();
    setCurrentCard(difference);
    setLastCard();
    router.push(`/cards/dailycard/`);
  }

  function randomIndex(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const randomCardIndex = randomIndex(0, 77);
  const randomCard = getCardById(randomCardIndex);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <AppContainer>
      <StyledCardContainer>
        <MoodContainer>
          <h4>pick ya mood now</h4>
          <MoodButtonGood
            type="button"
            aria-label="plus button"
            onClick={() => handlePlusClick()}
          >
            <GoodMoodIcon />
          </MoodButtonGood>
          <MoodButtonBad
            type="button"
            aria-label="minus button"
            onClick={() => handleMinusClick()}
          >
            <BadMoodIcon />
          </MoodButtonBad>
        </MoodContainer>
      </StyledCardContainer>
      <TopMenuBar mid={"moodmeter"} />
    </AppContainer>
  );
}
