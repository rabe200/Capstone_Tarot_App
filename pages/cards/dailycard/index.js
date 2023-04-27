import useStore from "../../../src/store/store";
import StyledCardContainer from "../../../components/Styled/StyledCardContainer";
import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
import AppContainer from "../../../components/Styled/StyledAppContainer";
import FlipCard from "../../../components/FlipCard";

const StyledContinueButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: yellow;
  text-align: center;
  height: 40px;
  border-radius: 8px;
  font-size: 2rem;
  &:hover {
    background-color: magenta;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: black;
  }
`;
export default function ShowCard() {
  const currentCard = useStore((state) => state.currentCard);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  if (currentCard) {
    return (
      <>
        <AppContainer>
          <StyledCardContainer>
            <FlipCard card={currentCard} />
          </StyledCardContainer>
          <StyledLink href={"/cards/dailycard/notes"}>
            <StyledContinueButton>CONTINUE</StyledContinueButton>
          </StyledLink>
        </AppContainer>
      </>
    );
  } else {
    return null;
  }
}
