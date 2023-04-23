import { Fragment, useState, useEffect, useRef } from "react";
import useStore from "../../../src/store/store";
import Link from "next/link";
import DeleteButton from "../../../components/DeleteButton";
import EditButton from "../../../components/EditButton";
import StyledCardContainer from "../../../components/Styled/StyledCardContainer";
import styled from "styled-components";
import AppContainer from "../../../components/Styled/StyledAppContainer";
import TopMenuBar from "../../../components/Styled/StyledTopMenuBar";
import GridLayout3Columns from "../../../components/Styled/GridLayoutWithSideNavigation";
import { useRouter } from "next/router";
import StyledNavbar from "../../../components/Styled/StyledNavbar";

const StyledNavi = styled.div`
  display: flex;
  width: 100%;
`;

const StyledFormular = styled.form`
  height: 100%;
  background: orange;
  width: 100%;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: black;
  color: white;
  height: 100%;
  overflow: scroll;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  margin: 0.3rem 0;
  color: yellow;
  text-decoration: none;
  &:hover {
    color: magenta;
  }
`;

const StyledBarContainer = styled.div`
  background: none;
  width: 100%;
`;

const StyledFooter = styled.footer`
  position: relative;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  bottom: 0;
  font-size: 1.4rem;
  width: 100%;
  bottom: 0px;
`;

const StyledFooterLeft = styled.div`
  font-size: 0.8em;
`;

const StyledFooterRight = styled.div`
  font-size: 0.8em;
`;

export default function History() {
  const [hasMounted, setHasMounted] = useState(false);

  const cardsDeleted = useStore((state) => state.cardsDeleted);
  const updateCardsDrawn = useStore((state) => state.updateCardsDrawn);
  const drawnCards = useStore((state) => state.drawnCards);
  const cardsDrawn = useStore((state) => state.cardsDrawn);
  const setLastPageVisited = useStore((state) => state.setLastPageVisited);
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("nameUp");

  setLastPageVisited(router.pathname);

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

  const setComingFromHistory = useStore((state) => state.setComingFromHistory);

  useEffect(() => {
    updateCardsDrawn();
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <AppContainer>
      <TopMenuBar mid={"history"} />

      <StyledCardContainer>
        <GridLayout3Columns
          query1={"null"}
          query2={"null"}
          navigation={"hidden"}
        >
          <StyledList>
            {sortedItems.map((card) => {
              return (
                <Fragment key={card.uuid}>
                  <hr />
                  <li>
                    <b>{new Date(card.date).toLocaleDateString()}</b>
                  </li>
                  <li>
                    <StyledLink
                      href={`/cards/${card.id}`}
                      onClick={setComingFromHistory(true)}
                    >
                      {card.name}
                    </StyledLink>
                  </li>
                  <li>second: {card.second} sec</li>
                  <section>
                    note: <i>{card.notes}</i>
                  </section>
                  <EditButton uuid={card.uuid} card={card} />
                  <DeleteButton uuid={card.uuid} />
                </Fragment>
              );
            })}
          </StyledList>
        </GridLayout3Columns>
      </StyledCardContainer>
      <StyledBarContainer>
        <StyledNavi>
          <StyledFormular>
            <select
              style={{
                width: "100%",
                height: "100%",
                textAlign: "center",
                fontSize: "1.05rem",
              }}
              name="filter results by"
              onChange={(event) => setSelectedOption(event.target.value)}
            >
              <option value="dateUp">date up</option>
              <option value="dateDown">date down</option>
              <option value="nameUp">name up</option>
              <option value="nameDown">name down</option>
              <option value="secondUp">second up</option>
              <option value="secondDown">second down</option>
            </select>
          </StyledFormular>
        </StyledNavi>
        <StyledFooter>
          <StyledFooterLeft>drawn:{cardsDrawn}</StyledFooterLeft>{" "}
          <StyledFooterRight>deleted: {cardsDeleted}</StyledFooterRight>
        </StyledFooter>
      </StyledBarContainer>
      <StyledNavbar />
    </AppContainer>
  );
}
