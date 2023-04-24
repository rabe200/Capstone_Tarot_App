import { useStore } from "../../src/store/store";
import { useEffect, useState } from "react";
import { cards } from "../../lib/data";
import TopMenuBar from "../Styled/StyledTopMenuBar";
import StyledNavbar from "../Styled/StyledNavbar";
import styled from "styled-components";
import Link from "next/link";

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  background: black;
  height: 18em;
  overflow: auto;
  color: white;
  list-style-type: none;
  margin: 0;
  padding-left: 36px;
  padding-right: 36px;
  font-size: 1.2em;
`;

const StyledList = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: auto;
`;

const StyledResultHeader = styled.div`
  &:hover {
    color: magenta;
    transition: all 0.2s;
    transform: scale(1.5);
  }
`;

const StyledLink = styled(Link)`
  color: yellow;
  text-decoration: none;
`;

const StyledListElement = styled.li`
  overflow: hidden;
  max-height: 5rem;
`;

const StyledBoldText = styled.b`
  color: white;
`;

const StyledSearchStats = styled.div`
  font-size: 0.7em;
`;

export default function SearchResults() {
  const [hasMounted, setHasMounted] = useState(false);
  const searchQuery = useStore((state) => state.searchQuery);
  const cardByName = getCardByProp(searchQuery, "name");
  const cardByDesc = getCardByProp(searchQuery, "desc");
  const cardByMeaningUp = getCardByProp(searchQuery, "meaning_up");
  const cardByMeaningRev = getCardByProp(searchQuery, "meaning_rev");
  const [selectOption, setSelectOption] = useState("name");

  const [hidden, setHidden] = useState({
    name: false,
    desc: true,
    meaningUp: true,
    meaningRev: true,
  });

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
    const selectedOption = event.target.value;
    setSelectOption();
    if (selectedOption === "name") {
      setHidden({
        name: false,
        desc: true,
        meaningUp: true,
        meaningRev: true,
      });
    } else if (selectedOption === "description") {
      setHidden({
        name: true,
        desc: false,
        meaningUp: true,
        meaningRev: true,
      });
    } else if (selectedOption === "meaningUp") {
      setHidden({
        name: true,
        desc: true,
        meaningUp: false,
        meaningRev: true,
      });
    } else if (selectedOption === "meaningRev") {
      setHidden({
        name: true,
        desc: true,
        meaningUp: true,
        meaningRev: false,
      });
    }
  }
  const [listElement, setListElement] = useState(false);

  function toggleListElement() {
    setListElement(!listElement);
  }

  useEffect(() => {
    setHidden({
      name: true,
      desc: true,
      meaningUp: true,
      meaningRev: true,
    });
    if (selectOption === "name") {
      setHidden((prev) => ({ ...prev, name: false }));
    } else if (selectOption === "description") {
      setHidden((prev) => ({ ...prev, desc: false }));
    } else if (selectOption === "meaningUp") {
      setHidden((prev) => ({ ...prev, meaningUp: false }));
    } else if (selectOption === "meaningRev") {
      setHidden((prev) => ({ ...prev, meaningRev: false }));
    }
  }, [selectOption]);

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
        searchresults for input: <StyledBoldText>{searchQuery}</StyledBoldText>
        <StyledSearchStats>
          <i>
            Name: <StyledBoldText>{cardByName.length}</StyledBoldText>
          </i>
          <i>
            Description: <StyledBoldText>{cardByDesc.length}</StyledBoldText>
          </i>
          <i>
            Meaning reversed:
            <StyledBoldText>{cardByMeaningRev.length}</StyledBoldText>
          </i>
          <i>
            Meaning upside:
            <StyledBoldText>{cardByMeaningUp.length}</StyledBoldText>
          </i>
        </StyledSearchStats>
        <select
          onChange={(e) => renderResults(e)}
          style={{
            width: "100%",
            background: "black",
            color: "#FFFFE0",
            textAlignLast: "center",
          }}
        >
          <option value="name">
            By name {": "}
            {cardByName.length > 0 && cardByName.length}
          </option>
          <option value="description">
            By description {": "}
            {cardByDesc.length > 0 && cardByDesc.length}
          </option>
          <option value="meaningUp">
            By meaning upright{": "}
            {cardByMeaningUp.length > 0 && cardByMeaningUp.length}
          </option>
          <option value="meaningRev">
            By meaning reversed{": "}
            {cardByMeaningRev.length > 0 && cardByMeaningRev.length}
          </option>
        </select>
        <ListContainer>
          <StyledList id="resultsByDescription" hidden={hidden.desc}>
            {cardByDesc.map((card) => {
              return (
                <>
                  <li>
                    <StyledResultHeader>
                      <StyledLink href={`/cards/${card.id}`}>
                        {card.name}
                      </StyledLink>
                    </StyledResultHeader>
                  </li>
                  <StyledListElement
                    hidden={!listElement}
                    onClick={() => toggleListElement()}
                  >
                    {card.desc}
                  </StyledListElement>
                  <li hidden={listElement} onClick={() => toggleListElement()}>
                    {card.desc}
                  </li>
                </>
              );
            })}
          </StyledList>

          <StyledList id="resultsByName" hidden={hidden.name}>
            {cardByName.map((card) => (
              <>
                <li>
                  <StyledResultHeader>
                    <StyledLink href={`/cards/${card.id}`}>
                      {card.name}
                    </StyledLink>
                  </StyledResultHeader>
                </li>
                <li>{card.name}</li>
              </>
            ))}
          </StyledList>

          <StyledList id="resultsMeaningUp" hidden={hidden.meaningUp}>
            {cardByMeaningUp.map((card) => (
              <>
                <li>
                  <StyledResultHeader>
                    <StyledLink href={`/cards/${card.id}`}>
                      {card.name}
                    </StyledLink>
                  </StyledResultHeader>
                </li>
                <li>{card.meaning_up}</li>
              </>
            ))}
          </StyledList>

          <StyledList id="resultsMeaningRev" hidden={hidden.meaningRev}>
            {cardByMeaningRev.map((card) => (
              <>
                <li>
                  <StyledResultHeader>
                    <StyledLink href={`/cards/${card.id}`}>
                      {card.name}
                    </StyledLink>
                  </StyledResultHeader>
                </li>
                <li>{card.meaning_rev}</li>
              </>
            ))}
          </StyledList>
        </ListContainer>
      </div>
    </>
  );
}
