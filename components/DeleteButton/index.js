import GetNotes from "../GetNotes";
import { useEffect, useState } from "react";

export default function DeleteButton({ itemDate, itemId, notes, setNotes }) {
  const [deleteThis, setDeleteThis] = useState([]);
  const [clicked, setClicked] = useState("false");

  function findItemByDate() {
    const itemToDelete = notes.filter((item) => {
      return item.date === itemDate;
    });
    setDeleteThis(itemToDelete);
    setClicked("true");
  }

  useEffect(() => {
    if (clicked === "true") {
      deleteThisItemFromLocalStorage();
      setClicked("false");
    }
  }, [clicked]);

  useEffect(() => {
    const notes = GetNotes();
  }),
    [];

  function deleteThisItemFromLocalStorage() {
    const deleteBy = deleteThis.map((item) => item.date);
    const filteredNotes = notes.filter((item) => !deleteBy.includes(item.date));
    localStorage.setItem(`notes.${itemId}`, JSON.stringify(filteredNotes));
    setNotes(filteredNotes);
  }

  return (
    <button type="button" onClick={findItemByDate} clicked={clicked}>
      delete
    </button>
  );
}
