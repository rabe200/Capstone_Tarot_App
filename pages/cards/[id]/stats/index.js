import { useRouter } from "next/router";
import useStore from "../../../../src/store/store";
import AppContainer from "../../../../components/Styled/StyledAppContainer";
import StyledCardContainer from "../../../../components/Styled/StyledCardContainer";
import GridLayout3Columns from "../../../../components/Styled/GridLayoutWithSideNavigation";
import TopMenuBar from "../../../../components/Styled/StyledTopMenuBar";
import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-size: 1.4em;
  color: ${(p) => p.theme.colorText};
  border: ${(p) => p.theme.colorText} 4px solid;
  background: ${(p) => p.theme.colorFront};
  overflow: auto;
  border-radius: 8px;
  overflow-wrap: break-word;
  box-shadow: 0px 0px 60px ${(p) => p.theme.colorDeep} inset;
`;

const MenuLink = styled(Link)`
    font-size: 2rem;
    text-decoration: none;
    color: black
    display: flex;
  justify-content: center;
  background: ${(p) => p.theme.colorBackground};
  gap: 20rem;
  margin: 0.3rem 0;
  color: #04120e;
  &:hover {color: red;},
  &:focus {
    color: ${(p) => p.theme.colorText};
  }
  width: 100%;
  height: 50px;
  margin: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  `;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
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

const StyledOverview = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 1.4em;
`;

const LinkContainer = styled.div`
display: flex;
flex-direction: column;
  width: 100vw,
  height: 100px;
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
  const nextPage = `/cards/${nextCardId}/stats`;
  const previousCardId =
    currentCardIndex === 0 ? cards.length - 1 : currentCardIndex - 1;
  const previousPage = `/cards/${previousCardId}/stats`;

  {
    return (
      <AppContainer>
        <GridLayout3Columns
          query1={previousPage}
          query2={nextPage}
          navigation={false}
        >
          <StyledCardContainer>
            <Container>
              <StyledList>
                {card.length > 0 ? (
                  <StyledOverview key={card[0].date}>
                    <li>
                      <u>{card[0].name}</u>
                    </li>
                    <li onClick={() => handleClick()}>
                      <NoteText clicked={clicked}>
                        <li>x-times drawn: {card[0].clicks}</li>
                        <li>{new Date(card[0].date).toLocaleString()}</li>
                        <li>mood: {card[0].averageMood}</li>
                        <li>last mood: {card[0].currentMood}</li>
                      </NoteText>
                    </li>
                  </StyledOverview>
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
        <LinkContainer>
          <MenuLink href={`/cards/${id}/notes/`}>NOTES</MenuLink>
          <MenuLink href={`/cards/${id}/description/`}>DESCRIPTION</MenuLink>
        </LinkContainer>

        <TopMenuBar
          back={`/cards/${id}/detail`}
          mid={cardForIndex && cardForIndex.name}
          card={card[0] && card[0]}
        />
      </AppContainer>
    );
  }
}
