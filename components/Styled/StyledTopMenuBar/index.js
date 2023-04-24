import styled from "styled-components";
import Link from "next/link";
import useStore from "../../../src/store/store";
import { useRouter } from "next/router";

const StyledMenuLink = styled(Link)`
  text-decoration: none;
  color: white;
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
`;

const StyledTopBarLeft = styled.div`
  width: 100%;
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

const StyledTopBarMiddle = styled.div`
  width: 100%;
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
  color: white;
`;

const StyledTopBarRight = styled.div`
  width: 100%;
  display: flex;
  background-color: black;
  align-items: center;
  justify-content: center;
`;

export default function TopMenuBar({ menu, mid, back }) {
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

  return (
    <StyledTopBarContainer>
      <StyledTopBarLeft>
        <StyledMenuLink href={`${menu}`}>MENU</StyledMenuLink>{" "}
      </StyledTopBarLeft>
      <StyledTopBarMiddle> {mid}</StyledTopBarMiddle>
      <StyledTopBarRight>
        <StyledMenuLink href={`${back}`}>
          {comingFromHistory ? "CLOSE" : "BACK"}
        </StyledMenuLink>{" "}
      </StyledTopBarRight>
    </StyledTopBarContainer>
  );
}
