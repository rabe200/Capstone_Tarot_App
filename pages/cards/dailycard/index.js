import useStore from "../../../src/store/store";
import CardPreviewImage from "../../../components/CardPreviewImage";
import StyledCardContainer from "../../../components/Styled/StyledCardContainer";
import styled from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";

const StyledContinueButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: hotpink;
  text-align: center;
  height: 40px;
  border-radius: 8px;
  font-size: 2rem;
  &:hover {
    background-color: red;
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
        <div>
          {" "}
          <StyledCardContainer>
            <CardPreviewImage card={currentCard}></CardPreviewImage>
          </StyledCardContainer>
          <StyledLink href={"/cards/dailycard/notes"}>
            <StyledContinueButton>CONTINUE</StyledContinueButton>
          </StyledLink>
        </div>
      </>
    );
  } else {
    return null;
  }
}
