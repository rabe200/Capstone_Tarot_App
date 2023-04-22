import { useState } from "react";
import useStore from "../../src/store/store";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledSpacer = styled.div`
  display: flex;
  color: white;
  width: 100%;
  text-align: center;
  justify-content: center;
`;

const StyledToggle = styled.div`
  color: white;
`;

const StyledFormular = styled.form`
  height: 100%;
  width: 100%;
`;

const StyledSearchContainer = styled.div`
  background: none;
  width: 100%;
  position: relative;
`;

const StyledButton = styled.button`
  background: black;
  border: 1px white solid;
  color: crimson;
  height: 100%;
  width: 100%;
  &:hover {
    background: yellow;
  }
`;

const StyledSwitch = styled.div`
  width: 100%;
  height: 100%;
  background: none;
`;

const Navbar = styled.div`
  display: grid;
  grid-template-columns: 3.5fr 1.5fr;
  grid-template-rows: 20px;
  gap: 0px 0px;
  grid-template-areas: ". .";
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
    router.push("/cards/search/results");
  }

  return (
    <>
      <StyledSpacer>
        <StyledToggle hidden={!hidden} onClick={() => toggle()}>
          search
        </StyledToggle>
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
                height: "100%",
                fontSize: "0.8rem",
                width: "100%",
                background: "black",
                border: "1px solid white",
                textAlign: "center",
                color: "white",
              }}
            />
          </StyledFormular>
          <StyledSwitch>
            <StyledButton
              hidden={hidden}
              form="searchFormular"
              type="submit"
              name="submit"
              aria-label="submit search query"
              onClick={handleSubmit}
            >
              submit
            </StyledButton>
          </StyledSwitch>
        </Navbar>
      </StyledSearchContainer>
    </>
  );
}
