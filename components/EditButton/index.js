import React, { Fragment, useState, useEffect } from "react";
import useStore from "../../src/store/store";
export default function EditButton({ card }) {
  const [hasMounted, setHasMounted] = React.useState(false);
  const [editThis, setEditThis] = useState([]);
  const [clicked, setClicked] = useState("false");
  const [hidden, setHidden] = useState("hidden");
  const [hiddenButton, setHiddenButton] = useState(true);
  const drawnCards = useStore((state) => state.drawnCards);

  function closeInputHideButton() {
    setHidden("hidden");
    setHiddenButton(true);
  }

  function findItemByDate() {
    const itemToEdit = drawnCards.filter((item) => {
      return item.date === card.uuid;
    });
    setEditThis(itemToEdit);
    setClicked("true");
    setHidden("text");
    setHiddenButton(false);
    return itemToEdit;
  }

  useEffect(() => {
    const item = document.getElementById(card.uuid);
  });

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <Fragment key={card.uuid}>
      <button
        type="button"
        aria-label={`edit entry ${card.name}`}
        onClick={findItemByDate}
      >
        edit
      </button>
      <form>
        <label forhtml={`input for drawnCards.${card.name}}`}>
          edit:
          <input
            type={hidden}
            name={`drawnCards.${card.uuid}`}
            value={editThis.drawnCards}
            id={card.uuid}
            defaultValue={editThis.drawnCards}
          ></input>
          <button
            type="button"
            hidden={hiddenButton}
            onClick={closeInputHideButton}
          >
            close
          </button>
        </label>
      </form>
    </Fragment>
  );
}
