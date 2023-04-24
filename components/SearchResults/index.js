import { useStore } from "../../src/store/store";
import { useEffect, useState } from "react";
import { cards } from "../../lib/data";
import TopMenuBar from "../Styled/StyledTopMenuBar";
import StyledNavbar from "../Styled/StyledNavbar";
import styled from "styled-components";
import Link from "next/link";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: orange;
  height: 30em;
  overflow: hidden;
`;

const StyledList = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: auto;
`;

const StyledListItem = styled.ul`
  display: block;
  overflow: hidden;
  height: 100%;
`;

export default function SearchResults() {
  const [hasMounted, setHasMounted] = useState(false);
  const searchQuery = useStore((state) => state.searchQuery);
  const nameList = document.getElementById("nameList");
  const descriptionList = document.getElementById("descriptionList");
  const meaningUpList = document.getElementById("meaningUpList");
  const meaningRevList = document.getElementById("meaningRevList");
  const cardByName = getCardByProp(searchQuery, "name");

  const [selectOption, setSelectOption] = useState("name");
  const [resultList, setResultList] = useState(cardByName);

  const [hidden1, setHidden1] = useState(false);
  const [hidden2, setHidden2] = useState(true);
  const cardByDesc = getCardByProp(searchQuery, "desc");
  const cardByMeaningUp = getCardByProp(searchQuery, "meaning_up");
  const cardByMeaningRev = getCardByProp(searchQuery, "meaning_rev");

  function getCardByProp(searchQuery, property) {
    let queryWords = searchQuery
      .split(" ")
      .filter((queryWord) => queryWord.length > 0);
    let results;
    results = cards.filter((card) =>
      queryWords.every((queryWord) => {
        let propertyValue = card[property] || "";
        return (
          propertyValue
            .toLowerCase()
            .split(" ")
            .includes(queryWord.toLowerCase()) ||
          propertyValue.toLowerCase().includes(queryWord.toLowerCase())
        );
      })
    );
    return results;
  }

  function renderResults(event) {
    setSelectOption(event.target.value);
    let resultList;
    if (selectOption === "name") {
      setHidden1(true);
      setHidden2(false);
    } else if (selectOption === "description") {
      setHidden1(true);
      setHidden2(false);
    } else if (selectOption === "meaningUp") {
      setHidden1(true);
      setHidden2(false);
    } else if (selectOption === "meaningRev") {
      setHidden1(true);
      setHidden2(false);
    }
  }

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  if (searchQuery === "") {
    return (
      <>
        <TopMenuBar />
        <p>no results</p>
        <StyledNavbar />
      </>
    );
  }

  return (
    <>
      <div>
        for input: <b>{searchQuery}</b>
        <ListContainer>
          <StyledList id="resultList" hidden={hidden2}>
            <li>
              hidden2{" "}
              {cardByDesc.map((card) => (
                <StyledList>
                  <li>
                    {" "}
                    <u>
                      {" "}
                      <Link href={`/cards/${card.id}`}>{card.name}</Link>{" "}
                    </u>
                  </li>
                  <li> {card.desc} </li>
                </StyledList>
              ))}
            </li>
          </StyledList>

          <StyledList id="intitalResultList" hidden={hidden1}>
            <li>hidden1</li>
          </StyledList>
        </ListContainer>
      </div>
      <form>
        <select
          name="options"
          id="option-select"
          onChange={(event) => renderResults(event)}
        >
          <option value="name">name</option>
          <option value="description">description</option>
          <option value="meaningUp">meaningUp</option>
          <option value="meaningRev">meaningRev</option>
        </select>
      </form>
    </>
  );
}
