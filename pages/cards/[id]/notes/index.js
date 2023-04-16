import { Fragment } from "react";
import { useRouter } from "next/router";
import BackButton from "../../../../components/Backbutton/backbutton";
import { v4 } from "uuid";
import { useStore } from "../../../store";

export default function CardNotes() {
  const getDrawnCardById = useStore((state) => state.getDrawnCardById);

  const router = useRouter();
  const id = router ? router.query.id : null;

  const notes = useStore((state) => state.getAllNotes);
  const card = getDrawnCardById(id);
  console.log("notes.js", card);
  return (
    <Fragment key={card.uuid}>
      <h1>{card ? card.name : "loading"}</h1>
      <section>{card.map((prop) => prop.notes)}</section>
      <BackButton />
    </Fragment>
  );
}
