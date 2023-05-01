import { useState } from "react";
import useStore from "../../src/store/store";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledInput = styled.input`
  fontsize: 1em;
  height: 40px;
  margin: 0;
  padding: 0;
  width: 320px;
  background: ${(p) => p.theme.colorText};
  textalign: "center";
  color: ${(p) => p.theme.colorBackground};
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

const StyledFormular = styled.form`
  height: 100%;
  width: 100%;
`;

const StyledSearchContainer = styled.div`
  width: 375px;
  height: 40px;
  display: flex;
  position: relative;
  margin: 0;
  padding: 0;
  @media only screen and (min-width: 414px) {
    width: 414px;
  }
  @media only screen and (min-width: 585px) {
    width: 585px;
  }
  @media only screen and (min-width: 1194px) {
    width: 1194px;
  }
`;

const Navbar = styled.div`
  position: fixed;
  bottom: 40px;
  display: grid;
  grid-template-columns: 4fr 1fr;
  width: 300px;
`;

const StyledButton = styled.button`
  background: ${(p) => p.theme.colorContainer};
  color: ${(p) => p.theme.colorText};
  height: 40px;
  width: 55px;
  font-size: 1em;
  weight: 400;
  margin: 0;
  padding: 0;
  font-family: pixelOperator;
  &:hover {
    background: yellow;
    color: ${(p) => p.theme.colorText};
    background: ${(p) => p.theme.colorBackground};
  }
  @media only screen and (min-width: 414px) {
    height: 46px;
  }
`;

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const setSearchQuery = useStore((state) => state.setSearchQuery);
  const router = useRouter();
  const [hidden] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSearchQuery(inputValue);
    setInputValue("");
    router.push("/cards/swiper/search/results");
  }

  return (
    <StyledSearchContainer>
      <Navbar>
        <StyledFormular
          hidden={hidden}
          id="searchFormular"
          aria-label="search formular"
        >
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
        </StyledFormular>
        <StyledButton
          hidden={hidden}
          form="searchFormular"
          type="submit"
          name="submit"
          aria-label="submit search query"
          onClick={handleSubmit}
        >
          SUBMIT{" "}
        </StyledButton>
      </Navbar>
    </StyledSearchContainer>
  );
}
