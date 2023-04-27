import AppContainer from "../components/Styled/StyledAppContainer";
import StyledCardContainer from "../components/Styled/StyledCardContainer";
import StyledNavbar from "../components/Styled/StyledNavbar";
import TopMenuBar from "../components/Styled/StyledTopMenuBar";
import styled from "styled-components";
import ButtonThemeToggle from "../components/ToggleThemeButton";

const StyledOptionsMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledH1 = styled.h1`
  &:hover {
    background: red;
    border-radius: 8px;
    padding: -8px;
  }
`;

export default function OptionsMenu() {
  return (
    <AppContainer>
      <TopMenuBar mid={"credits"} back={"/"} />

      <StyledCardContainer>
        <StyledOptionsMenu>
          <StyledH1>
            <ButtonThemeToggle />
          </StyledH1>
        </StyledOptionsMenu>
      </StyledCardContainer>
      <StyledNavbar />
    </AppContainer>
  );
}
