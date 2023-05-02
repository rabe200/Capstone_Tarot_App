import { useState, useEffect } from "react";
import useStore from "../../../src/store/store";
import Link from "next/link";

import styled from "styled-components";
import TopMenuBar from "../../../components/Styled/StyledTopMenuBar";
import { useCallback } from "react";
import HistoryNotes from "../../../components/Styled/StyledHistoryNotes";
import StyledNavbar from "../../../components/Styled/StyledNavbar";
import Frame from "../../../components/Frame";
const StyledEntry = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
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
`;

const StyledFormular = styled.form`
  position: fixed;
  bottom: 50px;
  height: 30px;
  width: 100%;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: fixed;
  top: 20px;
  width: 375px;
  height: 80%;
  overflow: auto;
  background: ${(p) => p.theme.colorBackground};
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
  color: ${(p) => p.theme.colorLink};
  color: black;
  text-decoration: none;
`;

const StyledFooter = styled.footer`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  bottom: 90px;
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

const StyledSelect = styled.select`
  display: flex;
  align-self: center;
  position: fixed;
  width: 50%;
  height: 20px;
  text-align: center;
  font-size: 1.2em;
  bottom: 55px;
  @media only screen and (min-width: 414px) {
    width: 414px;
  }

  @media only screen and (min-width: 585px) {
    width: 400px;
    left: 150px;
  }

  @media only screen and (min-width: 834px) {
    width: 300px;
    left: 150px;
  }

  @media only screen and (min-width: 1194px) {
    width: 300px;
    left: 550px;
  }
`;

const ContainerToPlaceSelectAndInfoBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 375px;
  height: 100%;
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

export default function History() {
  const [hasMounted, setHasMounted] = useState(false);

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

  function toggleShowButton() {
    setShowButtons(!showButtons);
  }

  const sortedItems = drawnCards.sort((a, b) => {
    if (selectedOption === "dateUp") {
      return new Date(a.date) - new Date(b.date);
    } else if (selectedOption === "dateDown") {
      return new Date(b.date) - new Date(a.date);
    } else if (selectedOption === "nameDown") {
      return b.name.trim().localeCompare(a.name);
    } else if (selectedOption === "nameUp") {
      return a.name.trim().localeCompare(b.name);
    } else if (selectedOption === "secondDown") {
      return b.second - a.second;
    } else if (selectedOption === "secondUp") {
      return a.second - b.second;
    }
  });

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

      <ListContainer>
        {sortedItems.map((card) => {
          return (
            <StyledEntry key={card.uuid}>
              <StyledLink href={`/cards/swiper/${card.id}`}>
                <b>{new Date(card.date).toLocaleDateString()}</b> {card.name}
              </StyledLink>
              {dayNames[card.day]}
              {card.hour === 0
                ? " midnight"
                : card.hour < 4
                ? " night"
                : card.hour < 7
                ? " early morning"
                : card.hour < 12
                ? " morning"
                : card.hour < 13
                ? " midday"
                : card.hour < 17
                ? " afternoon"
                : card.hour < 20
                ? " early evening"
                : card.hour < 25
                ? " late evening"
                : " out of time"}
              <HistoryNotes card={card} toggle={showButtons} />{" "}
            </StyledEntry>
          );
        })}
      </ListContainer>
      <ContainerToPlaceSelectAndInfoBar>
        <StyledFormular>
          <StyledSelect
            name="filter results by"
            onChange={(event) => setSelectedOption(event.target.value)}
          >
            <option value="dateUp">date up</option>
            <option value="dateDown">date down</option>
            <option value="nameUp">name up</option>
            <option value="nameDown">name down</option>
          </StyledSelect>
        </StyledFormular>
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
