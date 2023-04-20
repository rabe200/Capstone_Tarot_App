import useStore from "../../../src/store/store";
import CardPreviewImage from "../../../components/CardPreviewImage";
import StyledMenuBar from "../../../components/Styled/StyledMenuBar";
import StyledCardContainer from "../../../components/Styled/StyledCardContainer";
import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";

const StyledMenuLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-style: italic;
  font-size: 2rem;
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
        <StyledCardContainer>
          <CardPreviewImage card={currentCard}></CardPreviewImage>
        </StyledCardContainer>
        <StyledMenuBar
          query1={"/cards/dailycard/moodmeter"}
          query2={"/cards/dailycard/notes/"}
        >
          {" "}
          <StyledMenuLink href={`/`}>menu</StyledMenuLink>{" "}
        </StyledMenuBar>
      </>
    );
  } else {
    return null;
  }
}
