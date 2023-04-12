import { Fragment } from "react";
import { v4 } from "uuid";
import Link from "next/link";
import GetNotes from "../../../components/GetNotes";
export default function History() {
  const notes = GetNotes();
  return (
    <Fragment key={v4()}>
      <section>
        <>
          {notes.map((note) => (
            <ul key={v4()}>
              <h1>{new Date(note.date).toLocaleDateString()}</h1>
              <li>{note.name}</li>
              <li> {note.notes}</li>
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
