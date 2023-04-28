import { useRouter } from "next/router";
import CardPreviewImage from "../../../components/CardPreviewImage";
import { useState, useEffect } from "react";
import StyledCardContainer from "../../../components/Styled/StyledCardContainer";
import useStore from "../../../src/store/store";
import SearchBar from "../../../components/SearchBar";
import TopMenuBar from "../../../components/Styled/StyledTopMenuBar";
import AppContainer from "../../../components/Styled/StyledAppContainer";
import GridLayout3Columns from "../../../components/Styled/GridLayoutWithSideNavigation";
import styled from "styled-components";
import CatApi from "../../../components/CatApi";
import StyledNavbar from "../../../components/Styled/StyledNavbar";
const StyledOptionsMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
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
  const nextPage = `/cards/${nextCardId}`;
  const previousCardId =
    currentCardIndex === 0 ? cards.length - 1 : currentCardIndex - 1;
  const previousPage = `/cards/${previousCardId}`;

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return id < 78 ? (
    <AppContainer>
      <TopMenuBar mid={card.name} card={card} />
      <SearchBar />

      <StyledCardContainer>
        <GridLayout3Columns query1={previousPage} query2={nextPage}>
          <CardPreviewImage card={card} clickable={true} />
        </GridLayout3Columns>
      </StyledCardContainer>
      <StyledNavbar />
    </AppContainer>
  ) : (
    <AppContainer>
      <TopMenuBar mid={"404"} back={"/cards/0"} />

      <StyledCardContainer>
        <StyledOptionsMenu>
          <h1>404 PAGE NOT MEOW</h1>
          <CatApi />
        </StyledOptionsMenu>
      </StyledCardContainer>
      <StyledNavbar />
    </AppContainer>
  );
}
