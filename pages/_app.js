import GlobalStyle from "../styles";
import { cards } from "../lib/data";
import { useState, useEffect } from "react";
import { getCardById } from "../lib/data";
import { useStore } from "zustand";

export default function App({ Component, pageProps }) {
  // const [searchQuery, setSearchQuery] = useLocalStorageState("");

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} useStore={useStore} />
    </>
  );
}
