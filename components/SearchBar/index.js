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

  const StyledList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
  `;

  return (
    <>
      <form>
        <StyledList>
          <li>
            <input
              onChange={handleChange}
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
        </StyledList>
      </form>
    </>
  );
}
