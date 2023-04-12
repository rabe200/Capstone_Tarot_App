import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { getCardById } from "../../../lib/data";

export default function Details({ cards }) {
  const router = useRouter();
  const id = router ? router.query.id : null;
  const [currentPage, setCurrentPage] = useState(id);

  function getNotes() {
    let localStorageDataNotes = [];
    for (let i = 0; i < 78; i++) {
      const notesKey = `notes.${i}`;
      const notesData = localStorage.getItem(notesKey);
      if (notesData) {
        localStorageDataNotes.push(JSON.parse(notesData));
      }
    }
    return localStorageDataNotes.flat();
  }

  const notes = getNotes();

  function handleClickNext() {
    if (id < 77) {
      setCurrentPage(parseInt(id) + 1);
      router.push(`/cards/${parseInt(id) + 1}`);
    } else {
      setCurrentPage(0);
      router.push(`/cards/0`);
    }
  }

  function handleClickPrev() {
    if (id > 0) {
      setCurrentPage(parseInt(id) - 1);
      router.push(`/cards/${parseInt(id) - 1}`);
    } else {
      setCurrentPage(77);
      router.push(`/cards/77`);
    }
  }
  const [searchQuery, setSearchQuery] = useState("");
  //name search
  let query3 = "";
  //description search
  let query5 = "";
  //meaning up search
  let query6 = "";
  //meaning down search
  let query8 = "";
  //date search
  let query12 = "";
  //note search
  let query13 = "";
  //mood
  let query14 = "";
  //element
  let query15 = "";
  //weekday
  let query16 = "";
  //week of year (1-52)

  function searchForInput(event) {
    const { value } = event.target;

    setSearchQuery(value);

    if (value) {
      query3 = cards.filter((card) => {
        if (card.name.toLowerCase().includes(`${value}`.toLowerCase()));
        return card.name.toLowerCase().includes(`${value}`.toLowerCase());
      });

      query5 = cards.filter((card) => {
        if (card.desc.toLowerCase().includes(`${value}`.toLowerCase()));
        return card.desc.toLowerCase().includes(`${value}`.toLowerCase());
      });
      //meaning up
      query6 = cards.filter((card) => {
        if (card.meaning_up.toLowerCase().includes(`${value}`.toLowerCase()));
        return card.meaning_up.toLowerCase().includes(`${value}`.toLowerCase());
      });

      //meaning down
      query8 = cards.filter((card) => {
        if (card.meaning_rev.toLowerCase().includes(`${value}`.toLowerCase()));
        return card.meaning_rev
          .toLowerCase()
          .includes(`${value}`.toLowerCase());
      });

      let queryWords = value
        .split(" ")
        .filter((queryWord) => queryWord.length > 0);

      query13 = notes.filter((card) =>
        queryWords.every(
          (queryWord) =>
            card.notes.toLowerCase().split(" ").includes(queryWord) ||
            card.notes.toLowerCase().includes(queryWord)
        )
      );

      //dates
      query12 = notes.filter((card) => {
        // console.log(card.date.includes(`${value}`));
        if (card.date.includes(`${value}`));
        return card.date.includes(`${value}`);
      });

      //mood
      query14 = cards.filter((card) => {
        // console.log(card.desc.includes(`${value}`.toLowerCase));
        if (card.desc.includes(`${value}`.toLowerCase));
        return card.desc.includes(`${value}`.toLowerCase);
      });
      query15 = cards.filter((card) => {
        // console.log(card.desc.includes(`${value}`.toLowerCase));
        if (card.desc.includes(`${value}`.toLowerCase));
        return card.desc.includes(`${value}`.toLowerCase);
      });
      //element
      query16 = cards.filter((card) => {
        // console.log(card.desc.includes(`${value}`.toLowerCase));
        if (card.desc.includes(`${value}`.toLowerCase));
        return card.desc.includes(`${value}`.toLowerCase);
      });

      console.log("name", query3);
      console.log("desc", query5);
      console.log("meaning_up", query6);
      console.log("meaning_down", query8);
      console.log("date", query12);
      console.log("notes", query13);
    }
  }

  const card = getCardById(id);
  return (
    id < 78 && (
      <>
        <figure>
          <Image
            width={100}
            height={180}
            src={card.image}
            alt={card.name}
            priority={true}
          />
          <figcaption>{card.name}</figcaption>
          <Link href={`/cards/${card.id}/notes`}>
            <button type="button" aria-label="go to notes">
              notes
            </button>
          </Link>
        </figure>
        <Link href={`/cards/${card.id}/detail`}>
          <button type="button" aria-label="more details button">
            more details
          </button>
        </Link>
        <button
          type="button"
          aria-label="previous card"
          onClick={handleClickPrev}
        >
          PREV
        </button>
        <button type="button" aria-label="next card" onClick={handleClickNext}>
          NEXT
        </button>
        <Link href="/">
          <button type="button" aria-label="back to menu">
            back to menu
          </button>
        </Link>
        <input
          onChange={searchForInput}
          id="searchbar"
          type="search"
          name="searchbar"
          value={searchQuery}
          placeholder="search..."
        />
      </>
    )
  );
}
