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
  colorAscii: "red",
};

export const themeWhite = {
  id: "white",
  colorBackground: "white",
  colorContainer: "white",
  colorText: "red",
  colorLink: "darkgrey",
  border: "2px black solid",
  colorDeep: "transparent",
  colorFront: "yellow",
  colorArrow: "",
  colorAscii: "white",
};

export const feldspar = {
  id: "feldspar",
  colorBackground: "white",
  colorContainer: "white",
  colorText: "black",
  colorLink: "darkgray",
  border: "2px black solid",
  colorDeep: "white",
  colorFront: "crimson",
  colorArrow: "black",
  colorAscii: "red",
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
  colorAscii: "white",
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
  colorAscii: "mediumpurple",
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
  colorAscii: "white",
};

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
      TOGGLE THEME
    </ToggleButton>
  );
}
