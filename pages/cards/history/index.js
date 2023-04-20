import { Fragment, useState, useEffect, useRef } from "react";
import useStore from "../../../src/store/store";
import Link from "next/link";

import DeleteButton from "../../../components/DeleteButton";
import EditButton from "../../../components/EditButton";
export default function History() {
  const [hasMounted, setHasMounted] = useState(false);
  const drawnCards = useStore((state) => state.drawnCards);
  const updateCardsDrawn = useStore((state) => state.updateCardsDrawn);
  const difference = useStore((state) => state.difference);
  const cardsDrawn = useStore((state) => state.cardsDrawn);
  const cardsDeleted = useStore((state) => state.cardsDeleted);
  useEffect(() => {
    updateCardsDrawn();
    console.log("difference between drawn and deleted card:", difference);
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <Fragment>
      <span>
        {cardsDrawn ? (
          <>
            <b>total number of drawn cards: {cardsDrawn}</b>
            <br />
            <b>total number of deleted cards: {cardsDeleted}</b>
          </>
        ) : (
          "noDrawnCards"
        )}
      </span>
      <section>
        <select name="filter results by" multiple size="4">
          <optgroup label="time">
            <option value="year">year</option>
            <option value="date">date</option>
            <option value="day">day</option>
            <option value="hour">hour</option>
            <option value="minute">minute</option>
            <option value="second">second</option>
          </optgroup>
          <optgroup label="name">
            <option value="ascending">in order</option>
            <option value="ascending">reversed</option>
          </optgroup>
        </select>
        <ul>
          {drawnCards.map((card) => {
            return (
              <Fragment key={card.uuid}>
                <li>{card.date}</li>
                <li>{card.name}</li>
                <li>Drawn: {card.clicks} times</li>
                <li>AverageMood: {card.averageMood}</li>
                <li>TotalMood: {card.mood}</li>
                <li>moodClicked: {card.currentMood}</li>
                <section>{card.notes}</section>
                <EditButton uuid={card.uuid} card={card} />
                <DeleteButton uuid={card.uuid} />
              </Fragment>
            );
          })}
        </ul>
      </section>
      <Link href="/">
        <button type="button">back</button>
      </Link>
    </Fragment>
  );
}
