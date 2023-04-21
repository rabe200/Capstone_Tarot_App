import StyledCardContainer from "../components/Styled/StyledCardContainer";
import SearchBar from "../components/SearchBar";
import StyledMenuBar from "../components/Styled/StyledMenuBar";
import StyledMenuBarContent from "../components/Styled/StyledMenuBarContent";
import styled from "styled-components";
import Link from "next/link";
import AppContainer from "../components/Styled/StyledAppContainer";

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
  position: relative;
  justify-content: center;
  align-items: center;
`;

export default function HomePage() {
  return (
    <AppContainer>
      <StyledCardContainer>
        <StyledLinkContainer>
          <StyledHeadline>TAROT</StyledHeadline>
          <MenuLink href={"/DailyCard"}>START</MenuLink>
          <MenuLink href={"/options"}>OPTIONS</MenuLink>
          <MenuLink href={"/credits"}>CREDITS</MenuLink>
        </StyledLinkContainer>
      </StyledCardContainer>
      <SearchBar />
    </AppContainer>
  );
}
