export default function GetNotesById(id) {
  let localStorageDataNotes = [];

  const notesKey = `notes.${id}`;
  const notesData = localStorage.getItem(notesKey);
  if (notesData) {
    localStorageDataNotes.push(JSON.parse(notesData));
  }

  return localStorageDataNotes.flat();
}
