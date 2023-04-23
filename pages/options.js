import AppContainer from "../components/Styled/StyledAppContainer";
import StyledCardContainer from "../components/Styled/StyledCardContainer";
import StyledNavbar from "../components/Styled/StyledNavbar";
import TopMenuBar from "../components/Styled/StyledTopMenuBar";
import styled from "styled-components";
import Link from "next/link";
const StyledOptionsMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export default function OptionsMenu() {
  return (
    <AppContainer>
      <TopMenuBar mid={"credits"} back={"/"} />

      <StyledCardContainer>
        <StyledOptionsMenu>
          <h1>UNDER CONSTRUCTION</h1>
          <h1>UNDER CONSTRUCTION</h1>
          <h1>UNDER CONSTRUCTION</h1>
          <h1>UNDER CONSTRUCTION</h1>
        </StyledOptionsMenu>
      </StyledCardContainer>
      <StyledNavbar />
    </AppContainer>
  );
}
