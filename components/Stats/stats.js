import useStore from "../../src/store/store";
import { Fragment } from "react";
import styled from "styled-components";
import averageMood from "../averageMood";

const StyledList = styled.ul`
  text-decoration: none;
  margin: 0;
  padding: 0;
`;

export default function CardStats(slug) {
  const getDrawnCardById = useStore((state) => state.getDrawnCardById);
  const cardForStats = getDrawnCardById(slug.slug);
  return (
    <StyledList>
      {cardForStats.length > 0 ? (
        <Fragment key={cardForStats[0].date}>
          <li> {cardForStats[cardForStats.length - 1].clicks} time(s) drawn</li>
          <li>
            last draw:{" "}
            {new Date(cardForStats[cardForStats.length - 1].date).getDate()}/
            {new Date(cardForStats[cardForStats.length - 1].date).getMonth()}/
            {new Date(cardForStats[cardForStats.length - 1].date).getFullYear()}
          </li>
          <li>
            last mood:{" "}
            {cardForStats[cardForStats.length - 1].currentMood === 1
              ? "good"
              : "bad"}
          </li>

          <li>
            average mood: {averageMood(cardForStats[cardForStats.length - 1])}
          </li>
        </Fragment>
      ) : (
        <>
          <li>draw more cards to see stats</li>
        </>
      )}
    </StyledList>
  );
}
