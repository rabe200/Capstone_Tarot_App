import StyledCardContainer from "../components/Styled/StyledCardContainer";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import Link from "next/link";
import AppContainer from "../components/Styled/StyledAppContainer";
import TopMenuBar from "../components/Styled/StyledTopMenuBar";
import useStore from "../src/store/store";

const MenuLink = styled(Link)`
    font-size: 2rem;
    text-decoration: none;
    color: black
    display: flex;
  justify-content: center;
  gap: 20rem;
  margin: 0.3rem 0;
  color: #04120e;
  &:hover {color: red;},
  &:focus {
    color: black;
  }
  `;

const StyledHeadline = styled.h1`
  color: red;
  top: 0;
  position: absolute;
`;

const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px hotpink solid;
  height: 100%;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export default function HomePage() {
  const setComingFromHistory = useStore((state) => state.setComingFromHistory);

  setComingFromHistory(false);

  const mid = "version 0.2";
  return (
    <AppContainer>
      {" "}
      <StyledCardContainer>
        <StyledLinkContainer>
          <StyledHeadline>TAROT</StyledHeadline>
          <MenuLink href={"/DailyCard"}>START</MenuLink>
          <MenuLink href={"/options"}>OPTIONS</MenuLink>
          <MenuLink href={"/credits"}>CREDITS</MenuLink>
        </StyledLinkContainer>
      </StyledCardContainer>
      <TopMenuBar menu={"/"} mid={mid} back={"/"} />
    </AppContainer>
  );
}
