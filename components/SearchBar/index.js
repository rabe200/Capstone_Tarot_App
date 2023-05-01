import { useState } from "react";
import useStore from "../../src/store/store";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledInput = styled.input`
  border-radius: 40px;
  font-size: 1em;
  height: 40px;
  margin: 0;
  padding: 0;
  background: ${(p) => p.theme.colorText};
  textalign: "center";
  color: ${(p) => p.theme.colorBackground};
  _webkituserselect: "none";
  _msuserselect: "none";
  userselect: "none";
  width: 50%;
  @media only screen and (min-width: 414px) {
    width: 359px;
    height: 50px;
  }
  @media only screen and (min-width: 585px) {
    width: 530px;
    height: 50px;
  }
`;

const Navbar = styled.div`
  position: fixed;
  bottom: 60px;
  display: flex;
  align-items: center;
`;

const StyledButton = styled.button`
  position: fixed;

  background: ${(p) => p.theme.colorContainer};
  color: ${(p) => p.theme.colorText};
  height: 20px;
  width: 80px;
  font-size: 1em;
  weight: 400;
  margin: 0;
  padding-left: 6px;
  padding-right: 6px;
  font-family: pixelOperator;
  border-radius: 40px;
  &:hover {
    background: yellow;
    color: ${(p) => p.theme.colorText};
    background: ${(p) => p.theme.colorBackground};
  }
  @media only screen and (min-width: 414px) {
    height: 20px;
  }
`;

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const setSearchQuery = useStore((state) => state.setSearchQuery);
  const router = useRouter();
  function handleSubmit(event) {
    event.preventDefault();
    setSearchQuery(inputValue);
    setInputValue("");
    router.push("/cards/swiper/search/results");
  }

  return (
    <Navbar>
      <form id="searchFormular" aria-label="search formular">
        <StyledInput
          onChange={(event) => {
            return event.preventDefault(), setInputValue(event.target.value);
          }}
          type="text"
          id="searchbar"
          name="searchbar"
          placeholder="search..."
          aria-label="search bar"
          value={inputValue}
          style={{
            fontSize: "0.8rem",
            height: "40px",
            margin: 0,
            padding: 0,
            background: `${(p) => p.theme.colorText}`,
            textAlign: "center",
            color: `${(p) => p.theme.colorBackground}`,
            _webkitUserSelect: "none",
            _msUserSelect: "none",
            userSelect: "none",
          }}
        />
      </form>
      <StyledButton
        form="searchFormular"
        type="submit"
        name="submit"
        aria-label="submit search query"
        onClick={handleSubmit}
      >
        SUBMIT
      </StyledButton>
    </Navbar>
  );
}
