import GlobalStyle from "../styles";
import { cards } from "../lib/data";
import { useState } from "react";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [randomNumber, setRandomNumber] = useState(undefined);
  function RandomNumber() {
    useEffect(() => {
      setRandomNumber(Math.floor(Math.random() * 77 + 0));
    }, []);
    return { randomNumber };
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        cards={cards}
        onClick={RandomNumber()}
        randomNumber={randomNumber}
      />
    </>
  );
}
