import styled from "styled-components";
import Link from "next/link";
import useStore from "../../../src/store/store";
import { useRouter } from "next/router";
import NoteNotifier from "../../NoteNotifier";

const StyledMenuLink = styled(Link)`
  text-decoration: none;
  color: ${(p) => p.theme.colorText};
  font-style: italic;
  font-size: 1rem;
`;

const StyledTopBarContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  height: 40px;
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

export default function TopMenuBar({ menu, mid, back, card }) {
  if (!menu) {
    menu = "/";
  }
  if (!back) {
    back = "/DailyCard";
  }
  const router = useRouter();
  const currentPage = router.pathname;

  const comingFromHistory = useStore((state) => state.comingFromHistory);

  if (comingFromHistory === true) {
    back = "/cards/history";
  } else {
    back = back;
  }

  if (currentPage === "/cards/history") {
    back = "/DailyCard";
  }

  return card ? (
    <StyledTopBarContainer>
      <StyledTopBarLeft>
        <StyledMenuLink href={`${menu}`}>MENU</StyledMenuLink>{" "}
      </StyledTopBarLeft>
      <StyledTopBarMiddle>
        {mid} <NoteNotifier currentCard={card} />
      </StyledTopBarMiddle>
      <StyledTopBarRight>
        <StyledMenuLink href={`${back}`}>
          {comingFromHistory ? "CLOSE" : "BACK"}
        </StyledMenuLink>{" "}
      </StyledTopBarRight>
    </StyledTopBarContainer>
  ) : (
    <StyledTopBarContainer>
      <StyledTopBarLeft>
        <StyledMenuLink href={`${menu}`}>MENU</StyledMenuLink>{" "}
      </StyledTopBarLeft>
      <StyledTopBarMiddle>{mid}</StyledTopBarMiddle>
      <StyledTopBarRight>
        <StyledMenuLink href={`${back}`}>
          {comingFromHistory ? "CLOSE" : "BACK"}
        </StyledMenuLink>{" "}
      </StyledTopBarRight>
    </StyledTopBarContainer>
  );
}
