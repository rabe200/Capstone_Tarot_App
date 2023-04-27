import StyledCardContainer from "../components/Styled/StyledCardContainer";
import styled from "styled-components";
import Link from "next/link";
import AppContainer from "../components/Styled/StyledAppContainer";
import TopMenuBar from "../components/Styled/StyledTopMenuBar";

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
    color: ${(p) => p.theme.colorText};
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
  border: ${(p) => p.theme.border};
  height: 100%;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
`;

export default function HomePage() {
  const mid = "version 0.2";
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
      <TopMenuBar menu={"/"} mid={mid} back={"/"} />
    </AppContainer>
  );
}
