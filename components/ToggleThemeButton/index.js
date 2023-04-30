import styled from "styled-components";
import useLocalStorage from "use-local-storage";

const ToggleButton = styled.div`
  width: 100%;
  height: 100%;
`;

export const themeDark = {
  id: "dark",
  colorBackground: "black",
  colorContainer: "black",
  colorText: "cyan",
  colorLink: "black",
  border: "2px black solid",
  colorDeep: "transparent",
  colorFront: "yellow",
  colorArrow: "",
};

export const themeWhite = {
  id: "white",
  colorBackground: "white",
  colorContainer: "white",
  colorText: "black",
  colorLink: "cyan",
  border: "2px black solid",
  colorDeep: "transparent",
  colorFront: "yellow",
  colorArrow: "",
};

export const feldspar = {
  id: "feldspar",
  colorBackground: "crimson",
  colorContainer: "#854079",
  colorText: "#e6fcef",
  colorLink: "black",
  border: "2px black solid",
  colorDeep: "white",
  colorFront:
    "radial-gradient(circle, rgba(250,93,85,1) 0%, rgba(240,147,60,1) 85%, rgba(240,195,60,1) 100%);",
  colorArrow: "black",
};

export const gossip = {
  id: "gossip",
  colorBackground: "#91E567",
  colorContainer: "yellow",
  colorText: "black",
  colorLink: "cyan",
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
  colorLink: "mediumpurple",
  border: "2px black solid",
  colorDeep: "transparent",
  colorFront: "yellow",
  colorArrow: "",
};

export const palevioletred = {
  id: "palevioletred",
  colorBackground: "#DB7093",
  colorContainer: "black",
  colorText: "white",
  colorLink: "black",
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
    if (localTheme.id === "white") setLocalTheme(themeDark);
    else if (localTheme.id === "dark") setLocalTheme(feldspar);
    else if (localTheme.id === "feldspar") setLocalTheme(gossip);
    else if (localTheme.id === "gossip") setLocalTheme(mediumpurple);
    else if (localTheme.id === "mediumpurple") setLocalTheme(palevioletred);
    else if (localTheme.id === "palevioletred") setLocalTheme(themeWhite);
  }

  return (
    <ToggleButton onClick={() => handleThemeToggle()}>
      <ToggleText>TOGGLE THEME</ToggleText>
    </ToggleButton>
  );
}
