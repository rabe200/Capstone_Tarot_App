import styled from "styled-components";
import Link from "next/link";
import TopMenuBar from "../components/Styled/StyledTopMenuBar";
import StyledNavbar from "../components/Styled/StyledNavbar";
import Frame from "../components/Frame";
import SearchBar from "../components/SearchBar";

const TopSpacer = styled.div`
  display: flex;
  position: fixed;
  height: 10px;
  color: white;
  background: black;
  top: 0px;
`;

export const MenuLink = styled(Link)`
position: relative;
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
    color: ${(p) => p.theme.colorText};
  }
  `;

const StyledHeadline = styled.h1`
  position: fixed;
  color: red;
  top: 10%;
`;

const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
  border: ${(p) => p.theme.border};
`;

export default function HomePage() {
  const mid = "version 0.2";
  return (
    <Frame>
      <TopSpacer>version 0</TopSpacer>
      {/* <TopMenuBar hidden={"hidden"} menu={"/"} mid={mid} back={"/"} /> */}

      <StyledLinkContainer>
        <StyledHeadline>TAROT</StyledHeadline>
        <MenuLink href={"/cards/dailycard/moodmeter"}>START</MenuLink>
        <MenuLink href={"/options"}>OPTIONS</MenuLink>
        <MenuLink href={"/credits"}>CREDITS</MenuLink>
        <MenuLink href={"/info"}>101</MenuLink>
        <SearchBar />
      </StyledLinkContainer>

      <StyledNavbar />
    </Frame>
  );
}
