import GlobalStyle from "../styles";
import { cards } from "../lib/data";
import { useState, useEffect } from "react";
import { getCardById } from "../lib/data";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [id, setId] = useState(undefined);
  useEffect(() => {
    setId(Math.floor(Math.random() * 77));
  }, []);

  const [searchQuery, setSearchQuery] = useLocalStorageState("");

  const [usedIds, setUsedIds] = useLocalStorageState("usedIds", {
    defaultValue: [],
  });

  const dailyCard = getCardById(id);

  useEffect(() => {
    const usedIds = localStorage.getItem("usedIds");
  });

  if (dailyCard)
    return (
      <>
        <GlobalStyle />
        <Component
          {...pageProps}
          dailyCard={dailyCard}
          cards={cards}
          id={id}
          usedIds={usedIds}
          setUsedIds={setUsedIds}
          setSearchQuery={setSearchQuery}
          searchQuery={searchQuery}
        />
      </>
    );
  else return null;
}
