import styled from "styled-components";
import useLocalStorage from "use-local-storage";

const ToggleButton = styled.div`
  width: 100%;
  height: 100%;
`;

const themeDark = {
  id: "dark",
  colorBackground: "black",
  colorText: "white",
  colorLink: "yellow",
  border: "2px white solid",
};

const themeLight = {
  id: "light",
  colorBackground: "white",
  colorText: "black",
  colorLink: "purple",
  border: "2px black solid",
};

const ToggleText = styled.div`
  &:hover {
    background: red;
    border-radius: 8px;
    padding: -8px;
  }
`;

export default function ButtonThemeToggle() {
  const [localTheme, setLocalTheme] = useLocalStorage("localTheme", themeDark);

  function handleThemeToggle() {
    if (localTheme.id === "dark") setLocalTheme(themeLight);
    else setLocalTheme(themeDark);
  }

  return (
    <ToggleButton onClick={() => handleThemeToggle()}>
      <ToggleText>TOGGLE THEME</ToggleText>
    </ToggleButton>
  );
}
