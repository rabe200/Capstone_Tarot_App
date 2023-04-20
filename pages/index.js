import Link from "next/link";
import { useState, useEffect } from "react";
import useStore from "../src/store/store";
import StyledCardContainer from "../components/Styled/StyledCardContainer";
import StyledMenuBar from "../components/Styled/StyledMenuBar";
import { StyledLinkGroup } from "../components/Styled/StyledMenuBar";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import StyledMenuBarIndex from "../components/Styled/StyledMenuBarIndex";

export default function HomePage() {
  const [hasMounted, setHasMounted] = useState(false);
  const lastCard = useStore((state) => state.currentCard);
  const link0 = "/cards/dailycard/moodmeter";
  const link1 = `/cards/${lastCard.id}`;
  const link2 = `/cards/history`;
  const [menuOption, setMenuOption] = useState(link0);
  const [counter, setCounter] = useState(0);
  const [linkDisplay, setLinkDisplay] = useState(0);

  function coundAndSetMenu() {
    if (counter === 0) {
      setLinkDisplay("DailyCard");
      setMenuOption(link0);
      setCounter(counter + 1);
    } else if (counter === 1) {
      setLinkDisplay("Cards");

      setMenuOption(link1);
      setCounter(counter + 1);
    } else if (counter === 2) {
      setLinkDisplay("History");

      setMenuOption(link2);
      setCounter(0);
    }
  }

  const StyledMenuLink = styled(Link)`
    display: flex;
    justify-content: center;
    gap: 20rem;
    margin: 0.3rem 0;
    color: #04120e;
    font-size: 2rem;
    text-decoration: none;
    &:hover,
    &:focus {
      color: magenta;
    }
  `;

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <>
      <StyledCardContainer>
        <StyledLinkGroup href="/cards/history/">history</StyledLinkGroup>
        {lastCard.name ? (
          <StyledLinkGroup href={`/cards/${lastCard.id}`}>
            overview
          </StyledLinkGroup>
        ) : (
          <Link href={`/cards/0`}>overview</Link>
        )}
        <SearchBar />
      </StyledCardContainer>
      <StyledMenuBarIndex onClick2={() => coundAndSetMenu()}>
        <StyledMenuLink href={menuOption}>{linkDisplay}</StyledMenuLink>
      </StyledMenuBarIndex>
    </>
  );
}
