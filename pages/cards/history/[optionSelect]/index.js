import { Fragment, useState, useEffect, useRef } from "react";
import useStore from "../../../../src/store/store";
import Link from "next/link";
import StyledMenuBar from "../../../../components/Styled/StyledMenuBar";
import DeleteButton from "../../../../components/DeleteButton";
import EditButton from "../../../../components/EditButton";
import StyledCardContainer from "../../../../components/Styled/StyledCardContainer";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledMenuLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-style: italic;
  font-size: 2rem;
`;

const StyledSelect = styled.select`
  select {
    /* styling */
    background-color: white;
    border: thin solid blue;
    border-radius: 4px;
    display: inline-block;
    font: inherit;
    line-height: 1.5em;
    padding: 0.5em 3.5em 0.5em 1em;

    /* reset */

    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`;

export default function History() {
  const router = useRouter();
  const { optionSelect } = router.query;
  console.log(optionSelect);
  const [hasMounted, setHasMounted] = useState(false);
  const drawnCards = useStore((state) => state.drawnCards);
  const updateCardsDrawn = useStore((state) => state.updateCardsDrawn);
  const cardsDrawn = useStore((state) => state.cardsDrawn);
  const cardsDeleted = useStore((state) => state.cardsDeleted);
  const [selectedOption, setSelectedOption] = useState(optionSelect);
  const [displayedCards, setDisplayedCards] = useState(drawnCards);
  const createLocalSortedHistory = useStore(
    (state) => state.createLocalSortedHistory
  );

  function refreshList(event) {
    event.preventDefault();
    const sortingFunctions = {
      dateUp: (a, b) => new Date(a.date) - new Date(b.date),
      dateDown: (a, b) => new Date(b.date) - new Date(a.date),
      secondUp: (a, b) =>
        new Date(a.date).getSeconds() - new Date(b.date).getSeconds(),
      secondDown: (a, b) =>
        new Date(b.date).getSeconds() - new Date(a.date).getSeconds(),

      minuteUp: (a, b) =>
        new Date(a.date).getMinutes() - new Date(b.date).getMinutes(),

      minuteDown: (a, b) =>
        new Date(b.date).getMinutes() - new Date(a.date).getMinutes(),

      up: (a, b) => a.name.trim().localeCompare(b.name),
      down: (a, b) => b.name.trim().localeCompare(a.name),
      yearUp: (a, b) =>
        new Date(a.date).getFullYear() - new Date(b.date).getFullYear(),
      yearDown: (a, b) =>
        new Date(b.date).getFullYear() - new Date(a.date).getFullYear(),
      monthUp: (a, b) =>
        new Date(a.date).getMonth() - new Date(b.date).getMonth(),
      monthDown: (a, b) =>
        new Date(b.date).getMonth() - new Date(a.date).getMonth(),
    };

    if (selectedOption in sortingFunctions) {
      const sortingFunction = sortingFunctions[selectedOption];
      const sortedCards = drawnCards.slice().sort(sortingFunction);
      updateCardsDrawn();
      setDisplayedCards(sortedCards);
      createLocalSortedHistory();
      console.log("lol");
    }
  }

  useEffect(() => {
    setDisplayedCards(drawnCards);
  }, [drawnCards, setDisplayedCards]);

  function updateCards(event) {
    event.preventDefault();
    refreshList();
    updateCardsDrawn();
  }

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  function handleSelectChange(event) {
    setSelectedOption(event.target.value);
    refreshList(event);
    router.push(`./${event.target.value}`);
  }

  return (
    <Fragment>
      <StyledCardContainer>
        <span>
          {cardsDrawn ? (
            <>
              <b>total number of drawn cards: {cardsDrawn}</b>
              <br />
              <b>total number of deleted cards: {cardsDeleted}</b>
            </>
          ) : (
            "noDrawnCards"
          )}
        </span>
        <section>
          <ul>
            {displayedCards.map((card) => {
              return (
                <Fragment key={card.uuid}>
                  <hr />
                  <li>
                    <b>{new Date(card.date).toLocaleDateString()}</b>
                  </li>
                  <li>{card.name}</li>
                  <li>Drawn: {card.clicks} times</li>
                  <li>AverageMood: {card.averageMood}</li>
                  <li>TotalMood: {card.mood}</li>
                  <li>moodClicked: {card.currentMood}</li>

                  <li>second: {card.second}</li>
                  <li>minute: {card.minute}</li>
                  <li>hour: {card.hour}</li>
                  <li>day: {card.day}</li>
                  <section>
                    note: <i>{card.notes}</i>
                  </section>
                  <EditButton uuid={card.uuid} card={card} />
                  <DeleteButton
                    uuid={card.uuid}
                    onClick={() => updateCards()}
                  />
                </Fragment>
              );
            })}
          </ul>
        </section>
        <Link href="/">
          <button type="button">back</button>
        </Link>
        <StyledMenuBar query1={"/"} query2={"/"}>
          {/* <form> */}
          <StyledSelect name="filter results by" onChange={handleSelectChange}>
            <option value="dateUp">date up</option>
            <option value="dateDown">date down</option>
            {/* <option value="yearUp">year Up</option> */}
            {/* <option value="yearDown">year Down</option> */}
            {/* <option value="monthUp">month Up</option> */}
            {/* <option value="monthDown">month Down</option> */}
            {/* <option value="dayUp">dayUp</option> */}
            {/* <option value="dayDown">day Down</option> */}
            {/* <option value="hourUp">hourUp</option> */}
            {/* <option value="hourDown">hour Down</option> */}
            {/* <option value="minuteUp">minuteUp</option> */}
            {/* <option value="minuteDown">minute Down</option> */}
            {/* <option value="secondUp">secondsUp</option> */}
            {/* <option value="secondDown">secondsDown</option> */}
            <option value="up" onClick={(event) => refreshList(event)}>
              name up
            </option>
            <option value="down" onClick={(event) => refreshList(event)}>
              name down
            </option>
          </StyledSelect>
          {/* <button onClick={(event) => refreshList(event)}>refresh</button> */}
          {/* </form> */}
        </StyledMenuBar>
      </StyledCardContainer>
    </Fragment>
  );
}
