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

  const [mood, setMood] = useLocalStorageState(`${id}.mood`, [0]);
  const [clicks, setClicks] = useLocalStorageState(`${id}.clicks`, [0]);
  const [averageMood, setAverageMood] = useLocalStorageState(
    `${id}.averageMood`,
    [0.5]
  );
  const [usedIds, setUsedIds] = useLocalStorageState("usedIds", {
    defaultValue: [],
  });

  const dailyCard = getCardById(id);

  useEffect(() => {
    const usedIds = localStorage.getItem("usedIds");
  });

  useEffect(() => {
    setAverageMood(mood / clicks);
    clicks ? setClicks(clicks) : setClicks(0);
    mood ? setMood(mood) : setMood(0);

    // usedIds ? setUsedIds(usedIds) : setUsedIds([id]);
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
          setMood={setMood}
          setClicks={setClicks}
          setAverageMood={setAverageMood}
          averageMood={averageMood}
          mood={mood}
          clicks={clicks}
          usedIds={usedIds}
          setUsedIds={setUsedIds}
        />
      </>
    );
  else return null;
}
