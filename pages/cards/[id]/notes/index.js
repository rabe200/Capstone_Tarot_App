import { Fragment } from "react";
import { useRouter } from "next/router";
import BackButton from "../../../../components/Backbutton/backbutton";
import useStore from "../../../../src/store/store";

export default function CardNotes() {
  const getDrawnCardById = useStore((state) => state.getDrawnCardById);

  const router = useRouter();
  const id = router ? router.query.id : null;

  const card = getDrawnCardById(id);
  return (
    <Fragment key={card.uuid}>
      <h1>{card ? card.name : "loading"}</h1>
      <section>{card.map((prop) => prop.notes)}</section>
      <BackButton />
    </Fragment>
  );
}
