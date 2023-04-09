import { Fragment } from "react";
import { useRouter } from "next/router";
import BackButton from "../../../components/Backbutton/backbutton";
import { getCardById } from "../../../lib/data";

export default function History() {
  const router = useRouter();
  const id = router ? router.query.id : null;
  function getElementsFromLocalStorage(id) {
    let elements = [];
    if (localStorage.getItem(id)) {
      elements = JSON.parse(localStorage.getItem(id));
    }
    return elements;
  }

  const elements = getElementsFromLocalStorage(id);
  const card = getCardById(id);

  return (
    card && (
      <>
        <h1>notes for {card.name}</h1>
        {elements.length > 0 ? (
          elements.map((item) => (
            <Fragment key={item.date}>
              <p>{item.date}</p>
              <p>{item.note} </p>
            </Fragment>
          ))
        ) : (
          <p>no notes</p>
        )}
        <BackButton />
      </>
    )
  );
}
