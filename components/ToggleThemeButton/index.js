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

export const feldspar = {
  id: "feldspar",
  colorBackground: "#D08F76",
  colorContainer: "white",
  colorText: "black",
  colorLink: "purple",
  border: "2px black solid",
};

export const gossip = {
  id: "gossip",
  colorBackground: "#91E567",
  colorContainer: "white",
  colorText: "black",
  colorLink: "purple",
  border: "2px black solid",
};

export const mediumpurple = {
  id: "mediumpurple",
  colorBackground: "mediumpurple",
  colorContainer: "yellow",
  colorText: "black",
  colorLink: "purple",
  border: "2px black solid",
};

export const palevioletred = {
  id: "palevioletred",
  colorBackground: "#DB7093",
  colorContainer: "white",
  colorText: "black",
  colorLink: "purple",
  border: "2px black solid",
};

export const ToggleText = styled.div`
  &:hover {
    background: red;
    border-radius: 8px;
    padding: -8px;
  }
`;

export default function ButtonThemeToggle() {
  const [localTheme, setLocalTheme] = useLocalStorage("localTheme", themeDark);

  function handleThemeToggle() {
    if (localTheme.id === "light") setLocalTheme(themeDark);
    else if (localTheme.id === "dark") setLocalTheme(feldspar);
    else if (localTheme.id === "feldspar") setLocalTheme(gossip);
    else if (localTheme.id === "gossip") setLocalTheme(mediumpurple);
    else if (localTheme.id === "mediumpurple") setLocalTheme(palevioletred);
    else if (localTheme.id === "palevioletred") setLocalTheme(themeLight);
  }

  return (
    <ToggleButton onClick={() => handleThemeToggle()}>
      <ToggleText>TOGGLE THEME</ToggleText>
    </ToggleButton>
  );
}
