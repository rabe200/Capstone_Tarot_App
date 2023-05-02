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
  //   const [count, setCount] = useState(
  //     language === "english"
  //       ? 0
  //       : language === "german"
  //       ? 1
  //       : language === "espanol"
  //       ? 2
  //       : language === "french"
  //       ? 3
  //       : 0
  //   );

  //   function handleClick() {
  //     count < 3 ? setCount(count + 1) : setCount(0);
  //     if (count === 0) setLocalLanguage("english");
  //     else if (count === 1) setLocalLanguage("german");
  //     else if (count === 2) setLocalLanguage("espanol");
  //     else if (count === 3) setLocalLanguage("french");
  //   }

  return (
    <ToggleButton onClick={() => handleClick()}>
      {localLanguage.toUpperCase()}
    </ToggleButton>
  );
}
