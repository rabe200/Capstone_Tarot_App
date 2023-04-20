import { Fragment, useState, useEffect, useRef } from "react";
import useStore from "../../../src/store/store";
import Link from "next/link";

import DeleteButton from "../../../components/DeleteButton";
import EditButton from "../../../components/EditButton";
export default function History() {
  const [hasMounted, setHasMounted] = useState(false);
  const drawnCards = useStore((state) => state.drawnCards);
  const updateCardsDrawn = useStore((state) => state.updateCardsDrawn);
  const cardsDrawn = useStore((state) => state.cardsDrawn);
  const cardsDeleted = useStore((state) => state.cardsDeleted);
  const [selectedOption, setSelectedOption] = useState(null);
  const [displayedCards, setDisplayedCards] = useState(drawnCards);
  let sortedCards = drawnCards.slice();

  function sortCards() {
    if (selectedOption === "dateUp") {
      sortedCards = drawnCards
        .slice()
        .sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (selectedOption === "dateDown") {
      sortedCards = drawnCards
        .slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (selectedOption === "secondUp") {
      sortedCards = drawnCards
        .slice()
        .map((card) => {
          const seconds = new Date(card.date).getSeconds();
          return { card, seconds };
        })
        .sort((a, b) => a.seconds - b.seconds)
        .map((item) => item.card);
    } else if (selectedOption === "secondDown") {
      sortedCards = drawnCards
        .slice()
        .map((card) => {
          const seconds = new Date(card.date).getSeconds();
          return { card, seconds };
        })
        .sort((a, b) => b.seconds - a.seconds)
        .map((item) => item.card);
    } else if (selectedOption === "up") {
      sortedCards = drawnCards
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedOption === "down") {
      sortedCards = drawnCards
        .slice()
        .sort((a, b) => b.name.localeCompare(a.name));
    } else if (selectedOption === "yearUp") {
      sortedCards = drawnCards
        .slice()
        .map((card) => {
          const year = new Date(card.date).getFullYear();
          return { card, year };
        })
        .sort((a, b) => a.year - b.year)
        .map((item) => item.card);
    } else if (selectedOption === "yearDown") {
      sortedCards = drawnCards
        .slice()
        .map((card) => {
          const year = new Date(card.date).getFullYear();
          return { card, year };
        })
        .sort((a, b) => b.year - a.year)
        .map((item) => item.card);
    } else if (selectedOption === "monthUp") {
      sortedCards = drawnCards
        .slice()
        .map((card) => {
          const month = new Date(card.date).getMonth();
          return { card, month };
        })
        .sort((a, b) => a.month - b.month)
        .map((item) => item.card);
    } else if (selectedOption === "monthDown") {
      sortedCards = drawnCards
        .slice()
        .map((card) => {
          const month = new Date(card.date).getMonth();
          return { card, month };
        })
        .sort((a, b) => b.month - a.month)
        .map((item) => item.card);
    } else if (selectedOption === "secondUp") {
      sortedCards = drawnCards
        .slice()
        .map((card) => {
          const seconds = new Date(card.date).getSeconds();
          return { card, seconds };
        })
        .sort((a, b) => a.seconds - b.seconds)
        .map((item) => item.card);
    } else if (selectedOption === "secondDown") {
      sortedCards = drawnCards
        .slice()
        .map((card) => {
          const seconds = new Date(card.date).getSeconds();
          return { card, seconds };
        })
        .sort((a, b) => b.seconds - a.seconds)
        .map((item) => item.card);
    } else if (selectedOption === "up") {
      sortedCards = drawnCards
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedOption === "down") {
      sortedCards = drawnCards
        .slice()
        .sort((a, b) => b.name.localeCompare(a.name));
    } else {
    }
    return setDisplayedCards(sortedCards);
  }

  function refreshList(event) {
    event.preventDefault();
    sortCards();
    setDisplayedCards(sortedCards);
  }

  useEffect(() => {
    updateCardsDrawn();
  });

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  function handleSelectChange(event) {
    setSelectedOption(event.target.value);
  }
  return (
    <Fragment>
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
        <form>
          <select
            name="filter results by"
            multiple
            size="4"
            onChange={handleSelectChange}
          >
            <optgroup label="time">
              <option value="dateUp">date up</option>
              <option value="dateDown">date down</option>
              <option value="yearUp">year Up</option>
              <option value="yearDown">year Down</option>
              <option value="monthUp">month Up</option>
              <option value="monthDown">month Down</option>
              <option value="dayUp">dayUp</option>
              <option value="dayDown">day Down</option>
              <option value="hourUp">hourUp</option>
              <option value="hourDown">hour Down</option>
              <option value="minuteUp">minuteUp</option>
              <option value="minute">minute Down</option>
              <option value="secondUp">secondsUp</option>
              <option value="secondDown">secondsDown</option>
            </optgroup>
            <optgroup label="name">
              <option value="up">up</option>
              <option value="down">down</option>
            </optgroup>
          </select>
          <button onClick={(event) => refreshList(event)}>refresh</button>
        </form>
        <ul>
          {displayedCards.map((card) => {
            return (
              <Fragment key={card.uuid}>
                {/* <li>{card.date}</li> */}
                <li>{card.name}</li>
                <li>Drawn: {card.clicks} times</li>
                <li>AverageMood: {card.averageMood}</li>
                <li>TotalMood: {card.mood}</li>
                <li>moodClicked: {card.currentMood}</li>
                <li>second: {card.second}</li>
                <section>{card.notes}</section>
                <EditButton uuid={card.uuid} card={card} />
                <DeleteButton uuid={card.uuid} />
              </Fragment>
            );
          })}
        </ul>
      </section>
      <Link href="/">
        <button type="button">back</button>
      </Link>
    </Fragment>
  );
}
