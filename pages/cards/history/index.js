import { Fragment, useState, useEffect, useRef } from "react";
import useStore from "../../../src/store/store";
import Link from "next/link";

import StyledCardContainer from "../../../components/Styled/StyledCardContainer";
import styled from "styled-components";
import AppContainer from "../../../components/Styled/StyledAppContainer";
import TopMenuBar from "../../../components/Styled/StyledTopMenuBar";
import { useCallback } from "react";
import NoteWithImage from "../../../components/Styled/StyledNoteWithImage";

const StyledCardName = styled.h1`
  display: flex;
  width: 100%;
  background: ${(p) => p.theme.colorFront};
  box-shadow: 0px 20px 30px ${(p) => p.theme.colorFront};
  justify-content: center;
  font-size: 1.4em;
`;

const StyledNavi = styled.div`
  display: flex;
  width: 100%;
`;

const StyledFormular = styled.form`
  height: 100%;
  width: 100%;
  box-shadow: 0px 0px 60px ${(p) => p.theme.colorBackground} inset;
`;
const ListContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  box-shadow: 0px 0px 60px ${(p) => p.theme.colorFront};
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
  height: 100%;
  overflow: auto;
  border-radius: 8px;
  width: 100%;
`;

const StyledLink = styled(Link)`
  color: ${(p) => p.theme.colorLink};
  color: black;
  text-decoration: none;
`;

const StyledBarContainer = styled.div`
  background: none;
  width: 100%;
`;

const StyledFooter = styled.footer`
  box-shadow: 0px 0px 60px ${(p) => p.theme.colorFront};

  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  font-size: 1.4rem;
  width: 100%;
  height: 1.25em;
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
  border: white solid 2px;
  height: 1.2em;
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
    <AppContainer>
      <StyledFooter>
        <StyledFooterLeft>drawn:{cardsDrawn}</StyledFooterLeft>
        <StyledButton onClick={toggleShowButton}>DELETE</StyledButton>
        <StyledFooterRight>deleted: {cardsDeleted}</StyledFooterRight>
      </StyledFooter>
      <StyledBarContainer>
        <StyledNavi>
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
        </StyledNavi>
      </StyledBarContainer>

      <StyledCardContainer>
        <ListContainer>
          <StyledList>
            {sortedItems.map((card) => {
              return (
                <Fragment key={card.uuid}>
                  <li>
                    <b>{new Date(card.date).toLocaleDateString()}</b>
                  </li>
                  <li>
                    <StyledCardName>
                      <StyledLink href={`/cards/${card.id}`}>
                        {card.name}
                      </StyledLink>
                    </StyledCardName>
                  </li>
                  <li>
                    {dayNames[card.day]}
                    {card.hour === 0
                      ? "midnight"
                      : card.hour < 4
                      ? "night"
                      : card.hour < 7
                      ? "early morning"
                      : card.hour < 12
                      ? "morning"
                      : card.hour < 13
                      ? "midday"
                      : card.hour < 17
                      ? "afternoon"
                      : card.hour < 20
                      ? "early evening"
                      : card.hour < 25
                      ? "late evening"
                      : "out of time"}
                  </li>
                  <NoteWithImage card={card} toggle={showButtons} />{" "}
                </Fragment>
              );
            })}
          </StyledList>
        </ListContainer>
      </StyledCardContainer>
      <TopMenuBar query2={"/dailyCard"} mid={"history"} />
    </AppContainer>
  );
}
