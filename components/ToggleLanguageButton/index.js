import styled from "styled-components";
import useStore from "../../src/store/store";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
const ToggleButton = styled.div`
  width: 100%;
  height: 100%;
`;

export default function ButtonToggleLanguage() {
  const setLanguage = useStore((state) => state.setLanguage);
  const language = useStore((state) => state.language);
  const [localLanguage, setLocalLanguage] = useLocalStorageState(
    "localLanguage",
    {
      defaultValue: "english",
    }
  );

  function handleClick() {
    if (localLanguage === "french") setLocalLanguage("english");
    else if (localLanguage === "english") setLocalLanguage("german");
    else if (localLanguage === "german") setLocalLanguage("espanol");
    else if (localLanguage === "espanol") setLocalLanguage("french");
  }

  return (
    <ToggleButton onClick={() => handleClick()}>
      {localLanguage ? localLanguage.toUpperCase() : LANGUAGE}
    </ToggleButton>
  );
}
