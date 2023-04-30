import { useState } from "react";
import useStore from "../../src/store/store";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledSpacer = styled.div`
  display: none;
  height: 20px;
  width: 100%;
  text-align: center;
  justify-content: center;
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
  display: grid;
  grid-template-columns: 4fr 1fr;
  height: 40px;
  width: 100%;
`;

const StyledButton = styled.button`
  background: #293133;
  border: 2px white solid;
  color: #fcffec;
  height: 100%;
  width: 100%;
  font-size: 1em;
  weight: 400;
  margin: 0;
  padding: 0;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  font-family: pixelOperator;
  &:hover {
    background: yellow;
    color: #293133;
  }
`;

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const setSearchQuery = useStore((state) => state.setSearchQuery);
  const router = useRouter();
  const [hidden, setHiddenToggle] = useState(false);

  function toggle() {
    if (hidden === false) {
      setHiddenToggle(true);
    } else {
      setHiddenToggle(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearchQuery(inputValue);
    setInputValue("");
    router.push("/cards/swiper/search/results");
  }

  return (
    <>
      <StyledSpacer>
        <StyledToggle onClick={() => toggle()}>search</StyledToggle>
      </StyledSpacer>
      <StyledSearchContainer>
        <Navbar>
          <StyledFormular
            hidden={hidden}
            id="searchFormular"
            aria-label="search formular"
          >
            <input
              onChange={(event) => {
                return (
                  event.preventDefault(), setInputValue(event.target.value)
                );
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
                height: "100%",
                margin: 0,
                padding: 0,
                background: "#293133",
                border: "1px solid white",
                textAlign: "center",
                color: "white",
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
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
    </>
  );
}
