import TopMenuBar from "../components/Styled/StyledTopMenuBar";
import styled from "styled-components";
import ButtonThemeToggle from "../components/ToggleThemeButton";
import StyledNavbar from "../components/Styled/StyledNavbar";
import Frame from "../components/Frame";
import ButtonToggleLanguage from "../components/ToggleLanguageButton";

const StyledOptionsMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
  color: ${(p) => p.theme.colorText};
`;

const StyledH1 = styled.h1`
  &:hover {
    background: ${(p) => p.theme.colorText};
    color: ${(p) => p.theme.colorBackground};
    border-radius: 8px;
    padding: -8px;
  }
`;

export default function OptionsMenu() {
  return (
    <Frame>
      <TopMenuBar mid={"options"} back={"/"} />

      <StyledOptionsMenu>
        <StyledH1>
          <ButtonThemeToggle />
        </StyledH1>
        <StyledH1>
          <ButtonToggleLanguage />
        </StyledH1>
      </StyledOptionsMenu>
      <StyledNavbar />
    </Frame>
  );
}
