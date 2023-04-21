import Link from "next/link";
import { useState, useEffect } from "react";
import useStore from "../src/store/store";
import StyledCardContainer from "../components/Styled/StyledCardContainer";
import StyledMenuBar from "../components/Styled/StyledMenuBar";
import { StyledLinkGroup } from "../components/Styled/StyledMenuBar";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import StyledMenuBarIndex from "../components/Styled/StyledMenuBarIndex";
import StyledMenuBarContent from "../components/Styled/StyledMenuBarContent";
import { useRouter } from "next/router";
export default function HomePage() {
  const [hasMounted, setHasMounted] = useState(false);
  const lastCard = useStore((state) => state.currentCard);
  const link0 = "/cards/dailycard/moodmeter";
  const link1 = `/cards/${lastCard.id}`;
  const link2 = `/cards/history`;
  const [counter, setCounter] = useState(0);
  const router = useRouter();

  function coundAndSetMenu(input) {
    if (input === "plus") {
      if (counter !== 2) setCounter(counter + 1);
      else {
        setCounter(0);
      }
    } else if (input === "minus") {
      if (counter !== 0) setCounter(counter - 1);
      else {
        setCounter(2);
      }
    }
  }

  if (counter === 0) {
    router.push("/DailyCard");
  } else if (counter === 1) {
    router.push("/Cards");
  } else if (counter === 2) {
    router.push("/History");
  }

  const queryName = router.query.optionSelect;
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <>
      <StyledCardContainer>
        <div>
          {queryName === "DailyCard" ? <p>DailyCard</p> : <p>null</p>}
          {queryName === "Cards" ? <p>Cards</p> : <p>null</p>}
          {queryName === "History" ? <p>History</p> : <p>null</p>}
        </div>
        <SearchBar />
      </StyledCardContainer>
      <StyledMenuBarIndex
        onClick1={() => coundAndSetMenu("minus")}
        onClick2={() => coundAndSetMenu("plus")}
      >
        <StyledMenuBarContent queryName={queryName}></StyledMenuBarContent>
      </StyledMenuBarIndex>
    </>
  );
}
