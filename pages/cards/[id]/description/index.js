import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import StyledCardContainer from "../../../../components/Styled/StyledCardContainer";
import useStore from "../../../../src/store/store";
import styled from "styled-components";
import TopMenuBar from "../../../../components/Styled/StyledTopMenuBar";
import AppContainer from "../../../../components/Styled/StyledAppContainer";
import GridLayout3Columns from "../../../../components/Styled/GridLayoutWithSideNavigation";
import StyledNavbar from "../../../../components/Styled/StyledNavbar";

const StyledCategoryName = styled.div`
  display: flex;
  font-size: 2rem;
  border: ${(p) => p.theme.colorText} 2px solid;
  background: ${(p) => p.theme.colorContainer};
  color: ${(p) => p.theme.colorText};
  margin-bottom: 0.64rem;
`;

const StyledCategoryContent = styled.div`
  position: sticky;
  top: 40px;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  align-content: start;
  background: ${(p) => p.theme.colorFront};
  color: ${(p) => p.theme.colorText};
  font-size: 1.4em;
  overflow: auto;
  height: 480px;
  box-shadow: 0 0px 10px 15px silver;
`;

export default function Details() {
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();

  const queryName = router.query.optionSelect;
  const setLastPageVisited = useStore((state) => state.setLastPageVisited);

  setLastPageVisited(queryName);
  const id = router ? router.query.id : null;
  const cards = useStore((state) => state.allCards);
  const card = cards.find((card) => card.id === `${id}`);
  const currentCardIndex = cards.indexOf(card);
  const nextCardId =
    currentCardIndex === cards.length - 1 ? 0 : currentCardIndex + 1;
  const nextPage = `/cards/${nextCardId}/description`;
  const previousCardId =
    currentCardIndex === 0 ? cards.length - 1 : currentCardIndex - 1;
  const previousPage = `/cards/${previousCardId}/description`;
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    id < 78 && (
      <AppContainer>
        <TopMenuBar card={card} mid={card.name} back={`/cards/${card.id}`} />

        <GridLayout3Columns query1={previousPage} query2={nextPage}>
          <StyledCardContainer>
            <StyledCategoryName>description</StyledCategoryName>
            <StyledCategoryContent>{card.desc}</StyledCategoryContent>
          </StyledCardContainer>
        </GridLayout3Columns>
        <StyledNavbar />
      </AppContainer>
    )
  );
}
