import useStore from "../../../src/store/store";
import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
import FlipCard from "../../../components/FlipCard";
import TopMenuBar from "../../../components/Styled/StyledTopMenuBar";
import StyledNavbar from "../../../components/Styled/StyledNavbar";
import Frame from "../../../components/Frame";

const Container = styled.div`
  display: grid;
  flex-direction: column;
  position: fixed;
  top: 10%;
  height: 80%;
  justify-items: center;
  text-align: center;
`;

const StyledContinueButton = styled.div`
  width: 100%;
  height: 40px;
  background: ${(props) => props.theme.colorText};
  color: ${(props) => props.theme.colorBackground};
  text-align: center;
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

const DisplayCardName = styled.div`
  position: relative;
  height: 20px;
`;

const SpacerName = styled.div`
  position: relative;
  height: 20px;
`;

const SpacerButton = styled.div`
  position: relative;
  height: 40px;
`;

export default function ShowCard() {
  const currentCard = useStore((state) => state.currentCard);
  const [hasMounted, setHasMounted] = useState(false);
  const [turned, setTurned] = useState(true);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  if (currentCard) {
    return (
      <Frame>
        <TopMenuBar mid={"your card"} />

        <Container onClick={() => setTurned(false)}>
          <SpacerName hidden={!turned} />
          <DisplayCardName hidden={turned}>{currentCard.name}</DisplayCardName>
          <FlipCard card={currentCard} />
          <StyledLink href={"/cards/dailycard/notes"}>
            <SpacerButton hidden={!turned} />
            <StyledContinueButton hidden={turned}>
              CONTINUE
            </StyledContinueButton>
          </StyledLink>
        </Container>
        <StyledNavbar />
      </Frame>
    );
  } else {
    return null;
  }
}
