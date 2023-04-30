import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import NoteNotifier from "../../NoteNotifier";

const StyledMenuLink = styled(Link)`
  text-decoration: none;
  color: ${(p) => p.theme.colorText};
  font-style: italic;
  font-size: 1rem;
`;

const StyledMenuBack = styled.div`
  text-decoration: none;
  color: ${(p) => p.theme.colorText};
  font-style: italic;
  font-size: 1rem;
`;

const StyledTopBarContainer = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  height: 52px;
  margin: 0;
  padding: 0;
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
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

export default function TopMenuBar({ mid, card, hidden }) {
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
        <StyledMenuBack hidden={hidden} onClick={() => router.back()}>
          back
        </StyledMenuBack>
      </StyledTopBarRight>
    </StyledTopBarContainer>
  ) : (
    <StyledTopBarContainer>
      <StyledTopBarLeft>
        <StyledMenuLink hidden={hidden} href={`${"/"}`}>
          MENU
        </StyledMenuLink>{" "}
      </StyledTopBarLeft>
      <StyledTopBarMiddle>{mid}</StyledTopBarMiddle>
      <StyledTopBarRight>
        <StyledMenuBack hidden={hidden} onClick={() => router.back()}>
          {"back"}
        </StyledMenuBack>
      </StyledTopBarRight>
    </StyledTopBarContainer>
  );
}
