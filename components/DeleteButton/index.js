import { useState, useEffect } from "react";
import useStore from "../../src/store/store";
import styled from "styled-components";

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
  background: black;
  color: white;
  width: 100px;
  border-radius: 8px;
  padding: 1px;
`;

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-items: center;
`;

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
      <StyledSection key={uuid}>
        <StyledButton
          type="button"
          onClick={() => deleteCardAndRaiseDeletedCardsCounter(uuid)}
        >
          delete
        </StyledButton>
      </StyledSection>
    );
  else {
    return <button type="button">loading</button>;
  }
}
