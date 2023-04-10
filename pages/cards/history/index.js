import { Fragment, useEffect, useState } from "react";
import { getCardById } from "../../../lib/data";
import { v4 } from "uuid";
export default function History({ cards }) {
  function getStats() {
    let localStorageDataStats = [];
    for (let i = 0; i < 78; i++) {
      const statsKey = `stats.${i}`;

      if (localStorage.getItem(statsKey)) {
        const statsData = JSON.parse(localStorage.getItem(statsKey));
        localStorageDataStats.push(statsData);
      }
    }
    return localStorageDataStats;
  }

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

  function forNotesLength() {
    for (let i = 0; i < notes.length; i++) {
      return <p>what</p>;
    }
  }

  const [stats] = getStats();
  const notes = getNotes();
  const card = getCardById(stats.id);

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
