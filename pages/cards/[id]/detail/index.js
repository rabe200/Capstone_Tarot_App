import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import StyledCardContainer from "../../../../components/Styled/StyledCardContainer";
import useStore from "../../../../src/store/store";
import styled from "styled-components";
import SearchBar from "../../../../components/SearchBar";
import TopMenuBar from "../../../../components/Styled/StyledTopMenuBar";
import AppContainer from "../../../../components/Styled/StyledAppContainer";
import GridLayout3Columns from "../../../../components/Styled/GridLayoutWithSideNavigation";
import { MenuLink } from "../../..";
import StyledNavbar from "../../../../components/Styled/StyledNavbar";
export const StyledCategories = styled.div`
  display: flex;
  position: sticky;
  flex-direction: column;
  border: ${(p) => p.theme.colorText} 2px solid;
  background: ${(p) => p.theme.colorDeep};
  color: ${(p) => p.theme.colorText};
  height: 100%;
  overflow: auto;
  justify-content: start;
  align-items: center;
  width: 100%;
  box-shadow: 0px 35px 22px ${(p) => p.theme.colorFront};
`;

export const StyledCategoryName = styled.div`
  font-size: 2rem;
  border: ${(p) => p.theme.colorText} 2px solid;
  background: ${(p) => p.theme.colorFront};
  color: ${(p) => p.theme.colorText};
  height: 100%;
  width: 100%;
`;

export const StyledCategoryContent = styled.div`
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  border: ${(p) => p.theme.colorText} 2px solid;
  background: ${(p) => p.theme.colorContainer};
  color: ${(p) => p.theme.colorText};
  font-size: 1.4em;
  height: 100%;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
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
        <TopMenuBar card={card} mid={card.name} back={`/cards/${card.id}`} />
        <SearchBar />
        <GridLayout3Columns query1={previousPage} query2={nextPage}>
          <StyledCardContainer>
            <StyledCategories>
              <StyledCategoryName>meaning upside</StyledCategoryName>
              <StyledCategoryContent>{card.meaning_up}</StyledCategoryContent>

              <ContentContainer>
                <StyledCategoryName>meaning reversed</StyledCategoryName>
                <StyledCategoryContent>
                  {card.meaning_rev}
                </StyledCategoryContent>
              </ContentContainer>
              <StyledCategoryContent>
                <StyledCategoryName>
                  <MenuLink href={`/cards/${card.id}/notes/`}>NOTES</MenuLink>
                </StyledCategoryName>
                <StyledCategoryName>
                  <MenuLink href={`/cards/${card.id}/stats/`}>STATS</MenuLink>
                </StyledCategoryName>
                <StyledCategoryName>
                  <MenuLink href={`/cards/${card.id}/description/`}>
                    DESCRIPTION
                  </MenuLink>
                </StyledCategoryName>
              </StyledCategoryContent>
            </StyledCategories>
          </StyledCardContainer>
        </GridLayout3Columns>
        <StyledNavbar />
      </AppContainer>
    )
  );
}
