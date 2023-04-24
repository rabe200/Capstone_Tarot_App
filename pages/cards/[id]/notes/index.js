import { useRouter } from "next/router";
import useStore from "../../../../src/store/store";
import AppContainer from "../../../../components/Styled/StyledAppContainer";
import StyledCardContainer from "../../../../components/Styled/StyledCardContainer";
import GridLayout3Columns from "../../../../components/Styled/GridLayoutWithSideNavigation";
import StyledList from "../../../../components/Styled/StyledList";
import TopMenuBar from "../../../../components/Styled/StyledTopMenuBar";
import StyledNavbar from "../../../../components/Styled/StyledNavbar";
import { Fragment } from "react";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
`;

const NoteText = styled.div`
  height: 100%;
  overflow: auto;
  margin: 0 auto;
  width: ${({ clicked }) => (clicked ? "200px" : "80%")}
  transition: transform 0.2s;
  font-size: ${({ clicked }) => (clicked ? "2em" : "1em")};
  padding: ${({ clicked }) => (clicked ? "20px" : "0px")};
`;

export default function CardNotes() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  const getDrawnCardById = useStore((state) => state.getDrawnCardById);
  const cards = useStore((state) => state.allCards);
  const router = useRouter();
  const id = router ? router.query.id : null;

  const card = getDrawnCardById(id);
  const cardForIndex = cards.find((card) => card.id === `${id}`);

  const currentCardIndex = cards.indexOf(cardForIndex);
  const nextCardId =
    currentCardIndex === cards.length - 1 ? 0 : currentCardIndex + 1;
  const nextPage = `/cards/${nextCardId}/notes`;
  const previousCardId =
    currentCardIndex === 0 ? cards.length - 1 : currentCardIndex - 1;
  const previousPage = `/cards/${previousCardId}/notes`;
  {
    return (
      <AppContainer>
        <StyledCardContainer>
          <GridLayout3Columns
            query1={previousPage}
            query2={nextPage}
            navigation={false}
          >
            <Container>
              <StyledList>
                <u>{card ? card.map((prop) => prop.name) : "loading"}</u>

                {card.length > 0 ? (
                  card.map((prop) => (
                    <Fragment key={prop.date}>
                      <li>
                        <u>{new Date(prop.date).toLocaleDateString()}</u>
                      </li>
                      <li onClick={() => handleClick()}>
                        <NoteText clicked={clicked}>{prop.notes}</NoteText>
                      </li>
                    </Fragment>
                  ))
                ) : (
                  <>
                    <u>{cardForIndex ? cardForIndex.name : "loading"}</u>

                    <li>no data</li>
                  </>
                )}
              </StyledList>
            </Container>
          </GridLayout3Columns>
        </StyledCardContainer>
        <TopMenuBar
          back={`/cards/${id}/detail`}
          mid={cardForIndex && cardForIndex.name}
          card={card[0] && card[0]}
        />
        <StyledNavbar />
      </AppContainer>
    );
  }
}
