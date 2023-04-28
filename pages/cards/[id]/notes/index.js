import { useRouter } from "next/router";
import useStore from "../../../../src/store/store";
import AppContainer from "../../../../components/Styled/StyledAppContainer";
import StyledCardContainer from "../../../../components/Styled/StyledCardContainer";
import GridLayout3Columns from "../../../../components/Styled/GridLayoutWithSideNavigation";
import TopMenuBar from "../../../../components/Styled/StyledTopMenuBar";
import styled from "styled-components";
import { useState } from "react";
import StyledNavbar from "../../../../components/Styled/StyledNavbar";
const NoteText = styled.div`
  height: 100%;
  overflow: auto;
  margin: 0 auto;
  width: ${({ clicked }) => (clicked ? "200px" : "80%")}
  transition: transform 0.2s;
  font-size: ${({ clicked }) => (clicked ? "2em" : "1em")};
  padding: ${({ clicked }) => (clicked ? "20px" : "0px")};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 100%;
  align-items: center;
  justify-content: start;
  font-size: 1.4em;
  color: ${(p) => p.theme.colorText};
  border: ${(p) => p.theme.colorText} 20px solid;
  background: ${(p) => p.theme.colorFront};
  overflow: auto;
  border-radius: 8px;
  overflow-wrap: break-word;
  box-shadow: 0px 0px 60px ${(p) => p.theme.colorDeep} inset;
`;

const StyledHistory = styled.div`
  overflow-wrap: breakword;
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
        <TopMenuBar
          back={`/cards/${id}/detail`}
          mid={cardForIndex && cardForIndex.name}
          card={card[0] && card[0]}
        />
        <GridLayout3Columns query1={previousPage} query2={nextPage}>
          <StyledCardContainer>
            <Container>
              <StyledList>
                {card.length > 0 ? (
                  card.map((prop) => (
                    <StyledHistory key={prop.date}>
                      <li>
                        <u>{new Date(prop.date).toLocaleDateString()}</u>
                      </li>
                      <li onClick={() => handleClick()}>
                        <NoteText clicked={clicked}>{prop.notes}</NoteText>
                      </li>
                    </StyledHistory>
                  ))
                ) : (
                  <>
                    <u>{cardForIndex ? cardForIndex.name : "loading"}</u>

                    <li>no data</li>
                  </>
                )}
              </StyledList>
            </Container>
          </StyledCardContainer>
        </GridLayout3Columns>
        <StyledNavbar />
      </AppContainer>
    );
  }
}
