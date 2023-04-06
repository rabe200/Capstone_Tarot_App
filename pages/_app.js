import GlobalStyle from "../styles";
import { cards } from "../lib/data";
import { useState, useEffect } from "react";
import { getCardById } from "../lib/data";

export default function App({ Component, pageProps }) {
  const [id, setId] = useState(undefined);
  useEffect(() => {
    setId(Math.floor(Math.random() * 77));
  }, []);

  const dailyCard = getCardById(id);

  if (dailyCard)
    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} dailyCard={dailyCard} cards={cards} id={id} />
      </>
    );
  else return null;
}
