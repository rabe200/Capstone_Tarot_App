export default function GetNotes() {
  let localStorageDataNotes = [];
  for (let i = 0; i < 78; i++) {
    const notesKey = `notes.${i}`;
    const notesData = localStorage.getItem(notesKey);
    if (notesData) {
      localStorageDataNotes.push(JSON.parse(notesData));
    }
  }
  return localStorageDataNotes.flat();
}
