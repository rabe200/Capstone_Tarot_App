import { Fragment, useEffect, useState } from "react";
import { v4 } from "uuid";
export default function History() {
  function getNotes() {
    let localStorageDataNotes = [];
    for (let i = 0; i < 78; i++) {
      const notesKey = `notes.${i}`;
      const notesData = localStorage.getItem(notesKey);
      if (notesData) {
        localStorageDataNotes.push(JSON.parse(notesData));
      }
    }
    return localStorageDataNotes;
  }

  const notes = getNotes();

  return (
    <Fragment key={v4()}>
      <section>
        {notes.map((note) => {
          return (
            <>
              {note.map((note) => (
                <ul key={v4()}>
                  <h1>{new Date(note.date).toLocaleDateString()}</h1>
                  <li>{note.name}</li>
                  <li> {note.notes}</li>
                </ul>
              ))}
            </>
          );
        })}
      </section>
    </Fragment>
  );
}
