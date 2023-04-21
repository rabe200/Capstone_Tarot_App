import { useState } from "react";
import useStore from "../../src/store/store";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledSpacer = styled.div`
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 20px;
  gap: 0px 0px;
  grid-template-areas: ". .";
  color: white;
`;

const StyledFormular = styled.form`
  height: 100%;
  background: orange;
  width: 100%;
`;

const StyledSearchContainer = styled.div`
  background: none;
  width: 100%;
`;

const StyledButton = styled.button`
  background: orange;
  height: 100%;
  width: 100%;
  &:hover {
    background: red;
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
        <div onClick={() => toggle()}>search</div>
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
              style={{ height: "100%", fontSize: "2rem", width: "100%" }}
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
          {/* <StyledDiv onClick={() => toggle()}>Collapse</StyledDiv>
          <StyledSelect>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </StyledSelect> */}
        </Navbar>
      </StyledSearchContainer>
    </>
  );
}
