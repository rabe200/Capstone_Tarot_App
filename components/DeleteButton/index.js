import { useState, useEffect } from "react";
import useStore from "../../src/store/store";

export default function DeleteButton({ uuid }) {
  const [hasMounted, setHasMounted] = useState(false);
  const filterCardFromArray = useStore((state) => state.filterCardFromArray);
  const setDrawnCardsByInput = useStore((state) => state.setDrawnCardsByInput);
  const setCardsDeleted = useStore((state) => state.setCardsDeleted);
  function deleteCard(input) {
    const newArray = filterCardFromArray(input);
    setDrawnCardsByInput(newArray);
  }

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  function deleteCardAndRaiseDeletedCardsCounter(uuid) {
    deleteCard(uuid);
    setCardsDeleted();
  }

  if (uuid)
    return (
      <button
        type="button"
        onClick={() => deleteCardAndRaiseDeletedCardsCounter(uuid)}
      >
        delete
      </button>
    );
  else {
    return <button type="button">loading</button>;
  }
}
