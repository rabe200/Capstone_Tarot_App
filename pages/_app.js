import GlobalStyle from "../styles/styles";
import Layout from "../components/Layout";
import localFont from "@next/font/local";
import { ThemeProvider } from "styled-components";
import useLocalStorage from "use-local-storage";
import { useEffect } from "react";
import { useState } from "react";
export const pixelOperator = localFont({
  src: "../styles/fonts/PixelOperatorMono.ttf",
});

export default function App({ Component, pageProps }) {
  const themeDark = {
    id: "dark",
    colorBackground: "black",
    colorText: "white",
    colorLink: "yellow",
  };

  const themeLight = {
    id: "light",
    colorBackground: "white",
    colorText: "black",
    colorLink: "purple",
    border: "2px black solid",
  };

  const [localTheme] = useLocalStorage("localTheme", themeLight);

  function getCurrentTheme() {
    let currentTheme = "";
    if (localTheme.id === "dark") return (currentTheme = themeDark);
    else if (localTheme.id === "light") return (currentTheme = themeLight);
  }

  const currentTheme = getCurrentTheme();

  console.log(currentTheme);
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
