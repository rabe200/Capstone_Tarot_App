import React, { Fragment, useState, useEffect, useRef } from "react";
import { useStore } from "../../store";
import Link from "next/link";

import DeleteButton from "../../../components/DeleteButton";
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
              <>
                <li key={card.uuid}>{card.name}</li>
                <DeleteButton uuid={card.uuid}></DeleteButton>
              </>
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
