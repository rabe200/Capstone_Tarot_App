import React, { Fragment, useState, useEffect, useRef } from "react";
import useStore from "../../../src/store/store";
import Link from "next/link";

import DeleteButton from "../../../components/DeleteButton";
import EditButton from "../../../components/EditButton";
export default function History() {
  const [hasMounted, setHasMounted] = React.useState(false);
  const drawnCards = useStore((state) => state.drawnCards);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <Fragment>
      <section>
        <ul>
          {drawnCards.map((card) => {
            return (
              <Fragment key={card.uuid}>
                <li>{card.name}</li>
                <section>{card.note}</section>
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
