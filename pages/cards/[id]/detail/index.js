import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import StyledCardContainer from "../../../../components/Styled/StyledCardContainer";
import StyledMenuBar from "../../../../components/Styled/StyledMenuBar";
import useStore from "../../../../src/store/store";
import styled from "styled-components";
import SearchBar from "../../../../components/SearchBar";
import TopMenuBar from "../../../../components/Styled/StyledTopMenuBar";
import AppContainer from "../../../../components/Styled/StyledAppContainer";
import GridLayout3Columns from "../../../../components/Styled/GridLayoutWithSideNavigation";

const StyledCategories = styled.div`
  display: block;
  flex-direction: column;
  background: white;
  height: 100%;
  overflow: auto;
`;

const StyledCategoryName = styled.u`
  font-size: 2rem;
`;

const StyledCategoryContent = styled.section`
  margin-bottom: 1em;
`;

export default function Details() {
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();
  const id = router ? router.query.id : null;
  const cards = useStore((state) => state.allCards);
  const card = cards.find((card) => card.id === `${id}`);
  const currentCardIndex = cards.indexOf(card);
  const nextCardId =
    currentCardIndex === cards.length - 1 ? 0 : currentCardIndex + 1;
  const nextPage = `/cards/${nextCardId}/detail`;
  const previousCardId =
    currentCardIndex === 0 ? cards.length - 1 : currentCardIndex - 1;
  const previousPage = `/cards/${previousCardId}/detail`;
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    id < 78 && (
      <AppContainer>
        <TopMenuBar card={card} />
        <StyledCardContainer>
          <GridLayout3Columns query1={previousPage} query2={nextPage}>
            <StyledCategories>
              <div>
                <StyledCategoryName>meaning upside</StyledCategoryName>
                <StyledCategoryContent>{card.meaning_up}</StyledCategoryContent>
              </div>
              <div>
                <StyledCategoryName>meaning reversed</StyledCategoryName>
                <StyledCategoryContent>
                  {card.meaning_rev}
                </StyledCategoryContent>
              </div>
            </StyledCategories>
          </GridLayout3Columns>
        </StyledCardContainer>
        <SearchBar />
      </AppContainer>
    )
  );
}
