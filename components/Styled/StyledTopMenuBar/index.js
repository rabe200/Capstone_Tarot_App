import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const StyledMenuLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-style: italic;
  font-size: 1rem;
`;

const StyledMenuText = styled.div`
  color: white;
  font-style: italic;
  font-size: 1rem;
`;
const StyledTopBarContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

const StyledTopBarLeft = styled.div`
  width: 100%;
  display: flex;
  background-color: black;
  height: 20px;
  justify-content: center;
  align-items: center;
`;

const StyledTopBarMiddle = styled.div`
  width: 100%;
  display: flex;
  background-color: black;
  height: 20px;
  justify-content: center;
  align-items: center;
  color: white;
`;

const StyledTopBarRight = styled.div`
  width: 100%;
  display: flex;
  background-color: black;
  height: 20px;
  align-items: center;
  justify-content: center;
`;

export default function TopMenuBar(card) {
  const router = useRouter();
  if (!card) {
    const card = null;
  }

  return (
    <StyledTopBarContainer>
      <StyledTopBarLeft>
        <StyledMenuLink href={"/"}>MENU</StyledMenuLink>{" "}
      </StyledTopBarLeft>
      <StyledTopBarMiddle>
        {card !== null ? card.card.name : null}
      </StyledTopBarMiddle>
      <StyledTopBarRight>
        <StyledMenuText onClick={() => router.back()}>BACK</StyledMenuText>{" "}
      </StyledTopBarRight>
    </StyledTopBarContainer>
  );
}
