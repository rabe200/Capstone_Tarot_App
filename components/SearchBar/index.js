import { useState } from "react";
import useStore from "../../src/store/store";
import styled from "styled-components";
import useSafePush from "../useSafePush";

const StyledInput = styled.input`
  border-radius: 40px;
  font-size: 1em;
  height: 40px;
  margin: 0;
  padding: 0;
  width: 300px;
  textalign: "center";
  _webkituserselect: "none";
  _msuserselect: "none";
  userselect: "none";
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
  position: relative;
  width: 375px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

const StyledButton = styled.button`
  position: relative;
  box-shadow: 0px 2px 2px;
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
  const { safePush } = useSafePush();
  function handleSubmit(event) {
    event.preventDefault();
    setSearchQuery(inputValue);
    setInputValue("");
    safePush("/cards/swiper/search/results");
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
