import GlobalStyle from "../styles/styles";
import Layout from "../components/Layout";
import localFont from "next/font/local";
import { ThemeProvider } from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import { themeWhite } from "../components/ToggleThemeButton";
import { themeDark } from "../components/ToggleThemeButton";
import { gossip } from "../components/ToggleThemeButton";
import { palevioletred } from "../components/ToggleThemeButton";
import { mediumpurple } from "../components/ToggleThemeButton";
import { feldspar } from "../components/ToggleThemeButton";
export const pixelOperator = localFont({
  src: "../styles/fonts/PixelOperatorMono.ttf",
});

export default function App({ Component, pageProps }) {
  const [localTheme, setLocalTheme] = useLocalStorageState("localTheme", {
    defaultValue: themeDark,
  });
  function getCurrentTheme() {
    let currentTheme = "";
    if (localTheme.id === "dark") return (currentTheme = themeDark);
    else if (localTheme.id === "white") return (currentTheme = themeWhite);
    else if (localTheme.id === "feldspar") return (currentTheme = feldspar);
    else if (localTheme.id === "palevioletred")
      return (currentTheme = palevioletred);
    else if (localTheme.id === "gossip") return (currentTheme = gossip);
    else if (localTheme.id === "mediumpurple")
      return (currentTheme = mediumpurple);
  }

  const currentTheme = getCurrentTheme();

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
