import { useState } from "react";
import useStore from "../../../src/store/store";
import { useRouter } from "next/router";
import styled from "styled-components";

const StyledSpacer = styled.div`
  display: grid;
  grid-template-columns: 3.5fr 1fr;
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
  background: red;
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
  background: white;
`;

const Navbar = styled.div`
  display: grid;
  grid-template-columns: 3.5fr 1.5fr;
  grid-template-rows: 20px;
  gap: 0px 0px;
  grid-template-areas: ". .";
`;

const StyledSelect = styled.select`
  background: palegreen;
`;

const StyledDiv = styled.div`
  background: aqua;
  &:hover {
    background: red;
  }
`;

export default function HistoryFilterBar() {
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
        <div>switch</div>
        <div onClick={() => toggle()}>collapse</div>
      </StyledSpacer>
      <StyledSearchContainer hidden={hidden}>
        <Navbar>
          <StyledFormular>
            <select
              style={{
                width: "100%",
                height: "100%",
                textAlign: "center",
                fontSize: "1.3rem",
              }}
              name="filter results by"
              onChange={(event) => setSelectedOption(event.target.value)}
            >
              <option value="dateUp">date up</option>
              <option value="dateDown">date down</option>
              <option value="nameUp" onClick={(event) => refreshList(event)}>
                name up
              </option>
              <option value="nameDown" onClick={(event) => refreshList(event)}>
                name down
              </option>
              <option value="secondUp">second up</option>
              <option value="secondDown">second down</option>
            </select>
          </StyledFormular>
          <StyledSwitch>
            <StyledButton
              form="searchFormular"
              type="submit"
              name="submit"
              aria-label="submit search query"
              onClick={handleSubmit}
            >
              search
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
