import { useEffect, useState } from "react";
import Link from "next/link";
import useStore from "../../../../src/store/store";
import { getCardById } from "../../../../lib/data";
import StyledCardContainer from "../../../../components/Styled/StyledCardContainer";
import StyledMenuBar from "../../../../components/Styled/StyledMenuBar";
import styled from "styled-components";
import { useRouter } from "next/router";
import GoodMoodIcon from "../../../../components/Styled/GoodMoodIcon";
import BadMoodIcon from "../../../../components/Styled/BadMoodIcon";
import AppContainer from "../../../../components/Styled/StyledAppContainer";

const StyledBanner = styled.div`
  text-align: center;
  width: 300px;
  color: white;
`;

const MoodButtonGood = styled.div`
  width: 290px;
  height: 215px;
  background-color: palevioletred;
`;

const MoodButtonBad = styled.div`
  width: 290px;
  height: 231px;
  background-color: palegreen;
  bottom: 0;
`;

export default function MoodMeter() {
  const router = useRouter();
  const [disableButton, setDisableButton] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const drawCard = useStore((state) => state.drawCard);
  const increaseCardsDrawn = useStore((state) => state.increaseCardsDrawn);
  const setRandomCard = useStore((state) => state.setRandomCard);
  const updateCardsDrawn = useStore((state) => state.updateCardsDrawn);
  const setCardMoodPlusOne = useStore((state) => state.setCardMoodPlusOne);
  const setCardMoodMinusOne = useStore((state) => state.setCardMoodMinusOne);
  const setCurrentCard = useStore((state) => state.setCurrentCard);
  const difference = useStore((state) => state.difference);

  function handlePlusClick() {
    console.log(randomCard);
    increaseCardsDrawn();
    setCardMoodPlusOne(randomCard.name);
    setRandomCard(randomCard);
    drawCard(randomCard);
    updateCardsDrawn();
    setCurrentCard(difference);
    router.push(`/cards/dailycard/`);
  }
  function handleMinusClick() {
    console.log(randomCard);
    increaseCardsDrawn();
    setCardMoodMinusOne(randomCard.name);
    setRandomCard(randomCard);
    drawCard(randomCard);
    updateCardsDrawn();
    setCurrentCard(difference);
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
        <h4>how is your mood right now?</h4>
        <MoodButtonGood
          disabled={disableButton}
          type="button"
          aria-label="plus button"
          onClick={() => handlePlusClick()}
        >
          <GoodMoodIcon />
        </MoodButtonGood>
        <MoodButtonBad
          disabled={disableButton}
          type="button"
          aria-label="minus button"
          onClick={() => handleMinusClick()}
        >
          <BadMoodIcon />
        </MoodButtonBad>
      </StyledCardContainer>
      <StyledBanner>DON'T THINK</StyledBanner>
    </AppContainer>
  );
}
