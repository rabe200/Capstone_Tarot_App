import useStore from "../../src/store/store";
import { Fragment } from "react";
import { useRouter } from "next/router";

export default function CardNotes() {
  {
    const getDrawnCardById = useStore((state) => state.getDrawnCardById);
    const router = useRouter();
    const slug = router.query.slug;
    const card = getDrawnCardById(slug);
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
