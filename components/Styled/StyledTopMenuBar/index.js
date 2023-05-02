import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import NoteNotifier from "../../NoteNotifier";

const StyledMenuLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    background: darkgrey;
    padding: 4px;
    border-radius: 8px;
  }
`;

const StyledMenuBack = styled.div`
  text-decoration: none;
  color: white;
`;

const StyledTopBarContainer = styled.div`
  position: fixed;
  overflow: hidden;

  z-index: 2000;
  top: 0;
  width: 375px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  height: 25px;
  margin: 0;
  padding: 0;
  background: black;
  color: white;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  @media only screen and (min-width: 414px) {
    width: 414px;
  }

  @media only screen and (min-width: 585px) {
    width: 585px;
  }
  @media only screen and (min-width: 834px) {
    width: 834px;
  }
  @media only screen and (min-width: 1194px) {
    width: 1194px;
  }
`;

const StyledTopBarLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTopBarMiddle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTopBarRight = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function TopMenuBar({ mid, card, hidden, backbutton }) {
  const router = useRouter();

  return card ? (
    <StyledTopBarContainer>
      <StyledTopBarLeft>
        <StyledMenuLink href={`/`} hidden={hidden}>
          MENU
        </StyledMenuLink>{" "}
      </StyledTopBarLeft>
      <StyledTopBarMiddle>
        {mid} <NoteNotifier currentCard={card} />
      </StyledTopBarMiddle>
      <StyledTopBarRight>
        {backbutton ? (
          <StyledMenuBack hidden={hidden}>
            <StyledMenuLink href={`${backbutton}`}> back</StyledMenuLink>
          </StyledMenuBack>
        ) : (
          <StyledMenuBack hidden={hidden} onClick={() => router.back()}>
            back
          </StyledMenuBack>
        )}
      </StyledTopBarRight>
    </StyledTopBarContainer>
  ) : (
    <StyledTopBarContainer>
      <StyledTopBarLeft>
        <StyledMenuLink hidden={hidden} href={`${"/"}`}>
          menu
        </StyledMenuLink>{" "}
      </StyledTopBarLeft>
      <StyledTopBarMiddle>{mid}</StyledTopBarMiddle>
      <StyledTopBarRight>
        {backbutton ? (
          <StyledMenuBack hidden={hidden}>
            <StyledMenuLink href={`${backbutton}`}> back</StyledMenuLink>
          </StyledMenuBack>
        ) : (
          <StyledMenuBack hidden={hidden} onClick={() => router.back()}>
            back
          </StyledMenuBack>
        )}
      </StyledTopBarRight>
    </StyledTopBarContainer>
  );
}
