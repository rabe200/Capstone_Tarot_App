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
  colorDeep: "black",
  colorFront: "#D2D2D2",
  colorArrow: "white",
};

const themeLight = {
  id: "light",
  colorBackground: "white",
  colorText: "black",
  colorLink: "purple",
  border: "2px black solid",
  colorDeep: "white",
  colorFront: "#D2D2D2",
  colorArrow: "black",
};

export const feldspar = {
  id: "feldspar",
  colorBackground:
    "radial-gradient(circle, rgba(250,93,85,1) 0%, rgba(240,147,60,1) 85%, rgba(240,195,60,1) 100%);",
  colorContainer: "crimson",
  colorText: "aqua",
  colorLink: "purple",
  border: "2px black solid",
  colorDeep: "orange",
  colorFront:
    "radial-gradient(circle, rgba(250,93,85,1) 0%, rgba(240,147,60,1) 85%, rgba(240,195,60,1) 100%);",
  colorArrow: "black",
};

export const gossip = {
  id: "gossip",
  colorBackground: "#91E567",
  colorContainer: "yellow",
  colorText: "black",
  colorLink: "purple",
  border: "2px black solid",
  colorDeep: "#91E567",
  colorFront: "yellow",
  colorArrow: "white",
};

export const mediumpurple = {
  id: "mediumpurple",
  colorBackground: "yellow",
  colorContainer: "white",
  colorText: "black",
  colorLink: "purple",
  border: "2px black solid",
  colorDeep: "transparent",
  colorFront: "yellow",
  colorArrow: "",
};

export const palevioletred = {
  id: "palevioletred",
  colorBackground: "#DB7093",
  colorContainer: "black",
  colorText: "yellow",
  colorLink: "purple",
  border: "2px black solid",
  colorDeep: "transparent",
  colorFront: "palevioletred",
  colorArrow: "",
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
