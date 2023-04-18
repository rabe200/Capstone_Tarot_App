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
        <ul>
          {drawnCards.map((card) => {
            return (
              <Fragment key={card.uuid}>
                <li>{card.name}</li>
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
