import useStore from "../../src/store/store";
import { Fragment } from "react";

export default function CardNotes(slug) {
  {
    const getDrawnCardById = useStore((state) => state.getDrawnCardById);

    const card = getDrawnCardById(slug.slug);
    return (
      <>
        {card.length > 0 ? (
          card.map((prop) => (
            <Fragment key={prop.date}>
              <li>
                <u>{new Date(prop.date).toLocaleDateString()}</u>
              </li>
              <li>{prop.notes}</li>
            </Fragment>
          ))
        ) : (
          <>
            <li>no notes for that card yet</li>
          </>
        )}
      </>
    );
  }
}
