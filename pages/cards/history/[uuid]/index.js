import { useState, useEffect } from "react";
import useStore from "../../../../src/store/store";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import TopMenuBar from "../../../../components/Styled/StyledTopMenuBar";
import { useCallback } from "react";

import StyledNavbar from "../../../../components/Styled/StyledNavbar";
import Frame from "../../../../components/Frame";
const StyledEntry = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  width: 375px;
  @media only screen and (min-width: 414px) {
    width: 414px;
  }

  @media only screen and (min-width: 585px) {
    width: 585px;

    font-size: 1.2em;
  }

  @media only screen and (min-width: 834px) {
    width: 834px;
  }

  @media only screen and (min-width: 1194px) {
    width: 1194px;
  }

  @media only screen and (min-width: 1400px) {
    width: 1400px;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: fixed;
  top: 20px;
  width: 375px;
  gap: 50px;
  height: 80%;
  overflow: auto;
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorBackground};
  z-index: 1000;
  @media only screen and (min-width: 414px) {
    width: 414px;
  }

  @media only screen and (min-width: 585px) {
    width: 585px;

    font-size: 1.2em;
  }

  @media only screen and (min-width: 834px) {
    width: 834px;
  }

  @media only screen and (min-width: 1194px) {
    width: 1194px;
  }
`;

const StyledLink = styled(Link)`
  color: ${(p) => p.theme.colorBackground};
  background: ${(p) => p.theme.colorText};
  text-decoration: none;
`;

const StyledFooter = styled.footer`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  bottom: 50px;
  width: 375px;
  height: 10px;
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
`;

const StyledFooterLeft = styled.div`
  font-size: 0.8em;
`;

const StyledFooterRight = styled.div`
  font-size: 0.8em;
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
  top: 0;
  right: 0;
  width: 4em;
  background: black;
  color: white;
  border-bottom-left-radius: 8px;
  height: 1em;
`;
const ContainerToPlaceSelectAndInfoBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 375px;
  height: 40px;

  @media only screen and (min-width: 414px) {
    width: 414px;
  }

  @media only screen and (min-width: 585px) {
    width: 585px;
  }

  @media only screen and (min-width: 834px) {
    width: 834px;
  }

  @media only screen and (min-width: 1194px) {
    width: 1194px;
  }
  @media only screen and (min-width: 1400px) {
    width: 1400px;
  }
`;

const StyledFormular = styled.form`
  position: fixed;
  bottom: 50px;
  height: 30px;
  width: 100%;
`;

const StyledSelect = styled.select`
  display: flex;
  align-self: center;
  position: relative;
  background: ${(p) => p.theme.colorText};
  color: ${(p) => p.theme.Background};
  width: 30%;
  height: 30px;
  text-align: center;
  font-size: 1em;
  bottom: 25px;
  margin: auto;
`;

const CardText = styled.div`
  display: flex;
  background: ${(p) => p.theme.colorContainer};
  color: ${(p) => p.theme.colorText};
`;

export default function History() {
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();
  const uuid = router.query.uuid;
  console.log(uuid);
  const cardsDeleted = useStore((state) => state.cardsDeleted);
  const updateCardsDrawn = useStore(
    useCallback((state) => state.updateCardsDrawn, [])
  );
  const drawnCards = useStore((state) => state.drawnCards);
  const cardsDrawn = useStore((state) => state.cardsDrawn);
  const [selectedOption, setSelectedOption] = useState("nameUp");
  const [showButtons, setShowButtons] = useState(false);
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(drawnCards);
  const [cardByUuid] = drawnCards.filter((card) => card.uuid === uuid);
  console.log(cardByUuid);

  function toggleShowButton() {
    setShowButtons(!showButtons);
  }

  useEffect(() => {
    updateCardsDrawn();
  }, [cardsDeleted]);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <Frame>
      <TopMenuBar query2={"/dailyCard"} mid={"history"} />
      <CardText>{cardByUuid.notes}</CardText>
      <ContainerToPlaceSelectAndInfoBar>
        <StyledFooter>
          <StyledFooterLeft>drawn:{cardsDrawn}</StyledFooterLeft>
          <StyledButton onClick={toggleShowButton}>DELETE</StyledButton>
          <StyledFooterRight>deleted: {cardsDeleted}</StyledFooterRight>
        </StyledFooter>
      </ContainerToPlaceSelectAndInfoBar>
      <StyledNavbar />
    </Frame>
  );
}
