import { useState } from "react";
import useStore from "../../src/store/store";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledSpacer = styled.div`
  height: 50px;
  width: 100%;
  text-align: center;
  justify-content: center;
  position: ;
`;

const StyledToggle = styled.div`
  display: none;
  color: #fcffec;
  font-size: 1.2em;
`;

const StyledFormular = styled.form`
  height: 100%;
  width: 100%;
`;

const StyledSearchContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
`;

const Navbar = styled.div`
  position: fixed;
  bottom: 40px;
  display: grid;
  grid-template-columns: 4fr 1fr;
  height: 40px;
  width: 100%;
`;

const StyledButton = styled.button`
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
  height: 40px;
  width: 100%;
  font-size: 1em;
  weight: 400;
  margin: 0;
  padding: 0;
  font-family: pixelOperator;
  &:hover {
    background: yellow;
    color: ${(p) => p.theme.colorBackground};
    background: ${(p) => p.theme.colorText};
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
          <input
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
              width: "100%",
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
