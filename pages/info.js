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
  height: 70%;
  width: 80%;
  margin: 0;
  padding: 0;
  color: ${(p) => p.theme.colorText};
  overflow: auto;
`;

const StyledH1 = styled.h1`
  &:hover {
    background: ${(p) => p.theme.colorText};
    color: ${(p) => p.theme.colorBackground};
    border-radius: 8px;
    padding: -8px;
  }
`;

export default function InfoPage() {
  return (
    <Frame>
      <TopMenuBar mid={"credits"} back={"/"} />

      <StyledOptionsMenu>
        <StyledH1>HOW TO USE</StyledH1>
        <StyledH1>
          {" this app combines a diary with a mobile tarot reading."}
          {"if you click -> play <- you will be asked for your mood."}
          {"right in the moment you have decided and clicked, "}
          {"there will be drawn a tarot card for you. this can be "}
          {"either upside or reversed. now you will be asked to take"}
          {" a note. this is the diary aspect. in the last step you can"}
          {" receive your reading."}
          <p>
            {
              "in the 'cards' section you can navigate by double click/touch and sliding left/right"
            }
          </p>
          <p>
            {
              "dev_notes: add different reading methods, add different tarot-reader models per gpt-prompts, optimize language select, create visually appealing stats page, rework notes edit system and design. create option to toggle nav arrows for slider to applease desktop users. "
            }
          </p>
          <p>{"this app is a work in progress and not published yet"}</p>
        </StyledH1>
      </StyledOptionsMenu>
      <StyledNavbar />
    </Frame>
  );
}
