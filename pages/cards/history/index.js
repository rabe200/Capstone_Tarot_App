import { Fragment, useEffect, useState } from "react";
import { v4 } from "uuid";
import Link from "next/link";
import GetNotes from "../../../components/GetNotes";
import DeleteButton from "../../../components/DeleteButton";
export default function History() {
  const [notes, setNotes] = useState(GetNotes());

  return (
    <Fragment key={v4()}>
      <section>
        <>
          {notes.map((note) => (
            <ul key={note.date}>
              <h1>{new Date(note.date).toLocaleDateString()}</h1>
              <li>{note.name}</li>
              <li> {note.notes}</li>
              <DeleteButton
                itemDate={note.date}
                itemId={note.id}
                notes={notes}
                setNotes={setNotes}
              />
            </ul>
          ))}
        </>
      </section>
      <Link href="/">
        <button type="button">back</button>
      </Link>
    </Fragment>
  );
}
