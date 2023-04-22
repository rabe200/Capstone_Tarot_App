import Link from "next/link";
import { useState, useEffect } from "react";
import useStore from "../../src/store/store";
import StyledCardContainer from "../../components/Styled/StyledCardContainer";
import { useRouter } from "next/router";
import HistoryIcon from "../../components/Styled/HistoryIcon";
import CardsIcon from "../../components/Styled/CardsIcon";
import DailyCardIcon from "../../components/Styled/DailyCardIcon";
import TopMenuBar from "../../components/Styled/StyledTopMenuBar";
import GridLayout3Columns from "../../components/Styled/GridLayoutWithSideNavigation";
import AppContainer from "../../components/Styled/StyledAppContainer";
import SearchBar from "../../components/SearchBar";
import StyledNavbar from "../../components/Styled/StyledNavbar";
export default function HomePage() {
  const [hasMounted, setHasMounted] = useState(false);
  const lastCard = useStore((state) => state.currentCard);
  const [counter, setCounter] = useState(0);
  const router = useRouter();
  const queryName = router.query.optionSelect;
  const setLastPageVisited = useStore((state) => state.setLastPageVisited);
  const setComingFromHistory = useStore((state) => state.setComingFromHistory);
  setComingFromHistory(false);
  setLastPageVisited(queryName);

  function countAndSetMenu(input) {
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
    if (counter === 0) {
      router.push("/DailyCard");
    } else if (counter === 1) {
      router.push("/collection");
    } else if (counter === 2) {
      router.push("/History");
    }
  }

  useEffect(() => {
    if (counter === 0) {
      router.push("/DailyCard");
    } else if (counter === 1) {
      router.push("/collection");
    } else if (counter === 2) {
      router.push("/History");
    }
  }, [counter]);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  if (router.query.optionSelect) {
    return (
      <AppContainer>
        <div>
          <TopMenuBar
            menu={"/"}
            mid={router.query.optionSelect.toLocaleLowerCase()}
            back={"/"}
          />
          <StyledCardContainer>
            <GridLayout3Columns
              query1={"null"}
              query2={"null"}
              onClick1={() => countAndSetMenu("minus")}
              onClick2={() => countAndSetMenu("plus")}
            >
              <div>
                {queryName === "DailyCard" ? (
                  <Link href={"cards/dailycard/moodmeter"}>
                    <DailyCardIcon />
                  </Link>
                ) : null}
                {queryName === "collection" ? (
                  <Link href={`/cards/${lastCard.id}`}>
                    <CardsIcon />
                  </Link>
                ) : null}
                {queryName === "History" ? (
                  <Link href={"/cards/history"}>
                    <HistoryIcon />
                  </Link>
                ) : null}
              </div>
            </GridLayout3Columns>
          </StyledCardContainer>
        </div>
        <SearchBar />
        <StyledNavbar />
      </AppContainer>
    );
  }
}
