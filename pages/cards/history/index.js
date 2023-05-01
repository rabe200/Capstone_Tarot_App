import { Fragment, useState, useEffect, useRef } from "react";
import useStore from "../../../src/store/store";
import Link from "next/link";

import StyledCardContainer from "../../../components/Styled/StyledCardContainer";
import styled from "styled-components";
import AppContainer from "../../../components/Styled/StyledAppContainer";
import TopMenuBar from "../../../components/Styled/StyledTopMenuBar";
import { useCallback } from "react";
import NoteWithImage from "../../../components/Styled/StyledNoteWithImage";
import StyledNavbar from "../../../components/Styled/StyledNavbar";
import Frame from "../../../components/Frame";
const StyledEntry = styled.div`
  padding: 2px;
  background: white;
  border: black 2px solid;
  border-radius: 8px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const StyledFormular = styled.form`
  height: 50px;
  width: 100%;
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 77vh;
  overflow: auto;
  background: ${(p) => p.theme.colorBackground};
  z-index: 1000;
`;

const StyledLink = styled(Link)`
  color: ${(p) => p.theme.colorLink};
  color: black;
  text-decoration: none;
`;

const StyledFooter = styled.footer`
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100px;
  /* background: ${(p) => p.theme.colorBackground}; */
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
      <StyledFooter>
        <StyledFormular>
          <select
            style={{
              width: "100%",
              height: "100%",
              textAlign: "center",
              fontSize: "1.05rem",
              fontSize: "1.2em",
            }}
            name="filter results by"
            onChange={(event) => setSelectedOption(event.target.value)}
          >
            <option value="dateUp">date up</option>
            <option value="dateDown">date down</option>
            <option value="nameUp">name up</option>
            <option value="nameDown">name down</option>
          </select>
        </StyledFormular>
        <StyledFooterLeft>drawn:{cardsDrawn}</StyledFooterLeft>
        <StyledButton onClick={toggleShowButton}>DELETE</StyledButton>
        <StyledFooterRight>deleted: {cardsDeleted}</StyledFooterRight>
      </StyledFooter>
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
              <NoteWithImage card={card} toggle={showButtons} />{" "}
            </StyledEntry>
          );
        })}
      </ListContainer>

      <StyledNavbar />
    </Frame>
  );
}
