import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import GetNotes from "../GetNotes";
import { cards } from "../../lib/data";
import useLocalStorageState from "use-local-storage";

export default function SearchBar({}) {
  const router = useRouter();
  const id = router ? router.query.id : null;
  const [input, setInput] = useState("");
  const [searchOptionSelect, setSearchOptionSelect] = useState("resultsByName");
  const notes = GetNotes();
  const [searchResults, setSearchResults] = useLocalStorageState(
    "searchquery",
    { defaultValue: [] }
  );

  function searchForInput(event) {
    const { value } = event.target;
    setInput(value);
    let results = "";
    let queryWords = value
      .split(" ")
      .filter((queryWord) => queryWord.length > 0);
    if (value) {
      if (searchOptionSelect === "resultsByName") {
        results = cards.filter((card) =>
          queryWords.every(
            (queryWord) =>
              card.name.toLowerCase().split(" ").includes(queryWord) ||
              card.name.toLowerCase().includes(queryWord)
          )
        );
        setSearchResults(results);
        setSearchOptionSelect("resultsByName");
      } else if (searchOptionSelect === "resultsByDescription") {
        results = cards.filter((card) =>
          queryWords.every(
            (queryWord) =>
              card.desc.toLowerCase().split(" ").includes(queryWord) ||
              card.desc.toLowerCase().includes(queryWord)
          )
        );
        setSearchResults(results);
      } else if (searchOptionSelect === "resultsByMeaningUp") {
        results = cards.filter((card) =>
          queryWords.every(
            (queryWord) =>
              card.meaning_up.toLowerCase().split(" ").includes(queryWord) ||
              card.meaning_up.toLowerCase().includes(queryWord)
          )
        );
        setSearchResults(results);
      } else if (searchOptionSelect === "resultsByMeaningDown") {
        results = cards.filter((card) =>
          queryWords.every(
            (queryWord) =>
              card.meaning_rev.toLowerCase().split(" ").includes(queryWord) ||
              card.meaning_rev.toLowerCase().includes(queryWord)
          )
        );
        setSearchResults(results);
      } else if (searchOptionSelect === "resultsByNotes") {
        results = notes.filter((card) =>
          queryWords.every(
            (queryWord) =>
              card.notes.toLowerCase().split(" ").includes(queryWord) ||
              card.notes.toLowerCase().includes(queryWord)
          )
        );

        setSearchResults(results);
      } else if (searchOptionSelect === "resultsByDate") {
        results = notes.filter((card) =>
          queryWords.every(
            (queryWord) =>
              card.date.split(" ").includes(queryWord.toString()) ||
              card.date.includes(queryWord.toString())
          )
        );
        setSearchResults(results);
      }
    }
  }

  function logOptions(event) {
    setSearchOptionSelect(`resultsBy${event.target.value}`);
    setInput("");
  }

  return (
    <>
      <form>
        <input
          onChange={searchForInput}
          id="searchbar"
          type="search"
          name="searchbar"
          value={input}
          placeholder="search..."
          aria-label="search bar"
        />

        <select
          name="searchOptions"
          id="searchOptionsSelect"
          onChange={logOptions}
          required
        >
          <option value="Name" selected="selected">
            name
          </option>
          <option value="Date">date</option>
          <option value="Description">description</option>
          <option value="MeaningUp">meaningUp</option>
          <option value="MeaningDown">meaningReversed</option>
          <option value="Notes">notes</option>
        </select>
        <Link href="/cards/search">
          <button type="submit" aria-label="submit search query">
            search
          </button>
        </Link>
      </form>
    </>
  );
}