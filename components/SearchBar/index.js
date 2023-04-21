import { useState } from "react";
import useStore from "../../src/store/store";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const setSearchQuery = useStore((state) => state.setSearchQuery);
  const router = useRouter();

  function handleChange(event) {
    event.preventDefault();
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearchQuery(inputValue);
    setInputValue("");
    router.push("/cards/search/results");
  }

  return (
    <>
      <form>
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          <li>
            <input
              onChange={(event) => {
                return (
                  event.preventDefault(), setInputValue(event.target.value)
                );
              }}
              id="searchbar"
              type="search"
              name="searchbar"
              placeholder="search..."
              aria-label="search bar"
              value={inputValue}
              style={{ height: 40, fontSize: "2rem", width: 200 }}
            />
          </li>
          <li>
            <button
              type="submit"
              aria-label="submit search query"
              onClick={handleSubmit}
            >
              search
            </button>
          </li>
        </ul>
      </form>
    </>
  );
}
