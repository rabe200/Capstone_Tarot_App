import React, { useState, useEffect } from "react";
import useStore from "../../src/store/store";

export default function DeleteButton({ uuid }) {
  const [hasMounted, setHasMounted] = React.useState(false);
  const filterCardFromArray = useStore((state) => state.filterCardFromArray);
  const setDrawnCardsByInput = useStore((state) => state.setDrawnCardsByInput);
  function deleteCard(input) {
    const newArray = filterCardFromArray(input);
    setDrawnCardsByInput(newArray);
  }

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  if (uuid)
    return (
      <button type="button" onClick={() => deleteCard(uuid)}>
        delete
      </button>
    );
  else {
    return <button type="button">loading</button>;
  }
}
