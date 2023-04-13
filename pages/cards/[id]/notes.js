import { Fragment } from "react";
import { useRouter } from "next/router";
import BackButton from "../../../components/Backbutton/backbutton";
import { getCardById } from "../../../lib/data";
import { v4 } from "uuid";
export default function CardNotes() {
  const router = useRouter();
  const id = router ? router.query.id : null;

  function getNotes(id) {
    let localStorageDataNotes = [];
    {
      const notesKey = `notes.${id}`;
      const notesData = localStorage.getItem(notesKey);
      if (notesData) {
        localStorageDataNotes.push(JSON.parse(notesData));
      }
    }
    return localStorageDataNotes;
  }
  const notes = getNotes(id);
  const card = getCardById(id);
  return (
    <Fragment key={v4()}>
      <h1>{card ? card.name : "loading"}</h1>
      <section>
        {notes.map((note) => (
          <Fragment key={v4()}>
            {note.map((n) => (
              <ul key={v4()}>
                <h1 key={v4()}>{new Date(n.date).toLocaleDateString()}</h1>
                <li key={v4()}>{n.notes}</li>
              </ul>
            ))}
          </Fragment>
        ))}
      </section>
      <BackButton />
    </Fragment>
  );
}
