import { useRouter } from "next/router";
import CardPreviewImage from "../../../components/CardPreviewImage";
import { useState, useEffect } from "react";
import StyledCardContainer from "../../../components/Styled/StyledCardContainer";
import useStore from "../../../src/store/store";
import styled from "styled-components";

import SearchBar from "../../../components/SearchBar";
import TopMenuBar from "../../../components/Styled/StyledTopMenuBar";
import AppContainer from "../../../components/Styled/StyledAppContainer";
import GridLayout3Columns from "../../../components/Styled/GridLayoutWithSideNavigation";
import StyledNavbar from "../../../components/Styled/StyledNavbar";

export default function Details() {
  const [hasMounted, setHasMounted] = useState(false);
  const router = useRouter();
  const id = router ? router.query.id : null;
  console.log(id);
  const cards = useStore((state) => state.allCards);
  const card = cards.find((card) => card.id === `${id}`);
  const currentCardIndex = cards.indexOf(card);
  const nextCardId =
    currentCardIndex === cards.length - 1 ? 0 : currentCardIndex + 1;
  const nextPage = `/cards/${nextCardId}`;
  console.log(nextPage);
  const previousCardId =
    currentCardIndex === 0 ? cards.length - 1 : currentCardIndex - 1;
  const previousPage = `/cards/${previousCardId}`;

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    id < 78 && (
      <AppContainer>
        <TopMenuBar mid={card.name} />
        <StyledCardContainer>
          <GridLayout3Columns query1={previousPage} query2={nextPage}>
            <CardPreviewImage card={card} clickable={true} />
          </GridLayout3Columns>
        </StyledCardContainer>
        <SearchBar />
        <StyledNavbar />
      </AppContainer>
    )
  );
}
