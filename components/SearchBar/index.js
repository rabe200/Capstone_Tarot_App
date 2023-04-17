import { useState } from "react";
import useStore from "../../src/store/store";
import { useRouter } from "next/router";

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
    console.log(inputValue);
    setSearchQuery(inputValue);
    setInputValue("");
    router.push("./search/results");
  }

  return (
    <>
      <form>
        <input
          onChange={handleChange}
          id="searchbar"
          type="search"
          name="searchbar"
          placeholder="search..."
          aria-label="search bar"
          value={inputValue}
        />

        <button
          type="submit"
          aria-label="submit search query"
          onClick={handleSubmit}
        >
          search
        </button>
      </form>
    </>
  );
}
