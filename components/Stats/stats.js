import useStore from "../../src/store/store";
import { Fragment } from "react";
export default function CardStats(slug) {
  const getDrawnCardById = useStore((state) => state.getDrawnCardById);
  const cardForStats = getDrawnCardById(slug.slug);
  return (
    <>
      {cardForStats.length > 0 ? (
        <Fragment key={cardForStats[0].date}>
          <li> {cardForStats[0].clicks} time(s) drawn</li>
          <li>
            last draw: {new Date(cardForStats[0].date).getDate()}/
            {new Date(cardForStats[0].date).getMonth()}/
            {new Date(cardForStats[0].date).getFullYear()}
          </li>
          <li>
            last mood: {cardForStats[0].currentMood === 1 ? "good" : "bad"}
          </li>
          <li>average mood: {cardForStats[0].averageMood}</li>
        </Fragment>
      ) : (
        <>
          <li>draw more cards to see stats</li>
        </>
      )}
    </>
  );
}
