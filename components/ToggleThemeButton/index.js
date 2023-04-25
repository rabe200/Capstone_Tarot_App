import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import useStore from "../../src/store/store";

const ToggleButton = styled.div`
  width: 100%;
  height: 100%;
`;

const themeDark = {
  id: "dark",
  colorBackground: "black",
  colorText: "white",
  colorLink: "yellow",
};

const themeDefault = {
  id: "default",
  colorText: "white",
  colorPrimary: "rebeccapurple",
  colorLink: "black",
};

const themeLight = {
  id: "light",
  colorBackground: "white",
  colorText: "black",
  colorLink: "purple",
  border: "2px black solid",
};

const StyledWrapper = styled.div`
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
`;

const ToggleText = styled.div`
  &:hover {
    background: red;
    border-radius: 8px;
    padding: -8px;
  }
`;

export default function ButtonThemeToggle() {
  const localTheme = useStore((state) => state.theme);
  const setLocalTheme = useStore((state) => state.setTheme);
  function handleThemeToggle() {
    if (localTheme.id === "dark") {
      setLocalTheme({
        ...themeDefault,
        ...themeLight,
      });
    } else {
      setLocalTheme({
        ...themeDefault,
        ...themeDark,
      });
    }
  }

  return (
    <ThemeProvider theme={localTheme}>
      <StyledWrapper>
        <ToggleButton onClick={() => handleThemeToggle()}>
          <ToggleText>TOGGLE THEME</ToggleText>
        </ToggleButton>
      </StyledWrapper>
    </ThemeProvider>
  );
}
