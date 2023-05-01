import { useStore } from "../../src/store/store";
import { Fragment, useEffect, useState } from "react";
import { cards } from "../../lib/data";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Frame from "../Frame";

const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  height: 80%;
`;

const StyledResults = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: auto;
  border: 2px black solid;
  background: ${(p) => p.theme.colorLink};
`;

const StyledLink = styled(Link)`
  color: ${(p) => p.theme.colorFront};
  text-decoration: none;
  background: ${(p) => p.theme.colorLink};
  width: 100%;
`;

const StyledBoldText = styled.b`
  color: white;
`;

const StyledSearchStats = styled.div`
  font-size: 1em;
`;

export default function SearchResults() {
  const searchQuery = useStore((state) => state.searchQuery);
  const cardByName = getCardByProp(searchQuery, "name");
  const cardByDesc = getCardByProp(searchQuery, "desc");
  const cardByMeaningUp = getCardByProp(searchQuery, "meaning_up");
  const cardByMeaningRev = getCardByProp(searchQuery, "meaning_rev");
  const [selectOption, setSelectOption] = useState("name");

  const cardByShortDesc = cardByDesc.map((card) => {
    const index = card.desc
      .toLocaleLowerCase()
      .indexOf(searchQuery.toLocaleLowerCase());
    const start = Math.max(0, index - 50);
    const end = Math.min(index + 100, card.desc.length);
    const content = card.desc.substring(start, end);
    return { ...card, content };
  });

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
    setSelectOption(selectedOption);
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

  if (searchQuery === "") {
    return (
      <Frame>
        <p>no results</p>
      </Frame>
    );
  }

  return (
    <Fragment>
      <SearchResultsContainer>
        <StyledBoldText>{searchQuery}</StyledBoldText>
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
        <StyledResults id="resultsByDescription" hidden={hidden.desc}>
          {cardByShortDesc.map((card) => {
            return (
              <Fragment key={card.name}>
                <li>
                  <StyledLink href={`/cards/swiper/${card.id}`}>
                    {card.name}
                  </StyledLink>
                </li>
                <li onClick={() => toggleListElement()} hidden={!listElement}>
                  {card.content}
                </li>
                <li onClick={() => toggleListElement()} hidden={listElement}>
                  {card.desc}
                </li>
              </Fragment>
            );
          })}
        </StyledResults>
        <StyledResults id="resultsByName" hidden={hidden.name}>
          {cardByName.map((card) => (
            <Fragment key={card.name}>
              <li>
                <StyledLink href={`/cards/swiper/${card.id}`}>
                  {card.name}
                </StyledLink>
              </li>
              <li>
                <Image
                  src={card.image}
                  width={160}
                  height={250}
                  alt={card.name}
                  priority
                />
              </li>
            </Fragment>
          ))}
        </StyledResults>
        <StyledResults id="resultsMeaningUp" hidden={hidden.meaningUp}>
          {cardByMeaningUp.map((card) => (
            <Fragment key={card.name}>
              <li>
                <StyledLink href={`/cards/swiper/${card.id}`}>
                  {card.name}
                </StyledLink>
              </li>
              <li>{card.meaning_up}</li>
            </Fragment>
          ))}
        </StyledResults>
        <StyledResults id="resultsMeaningRev" hidden={hidden.meaningRev}>
          {cardByMeaningRev.map((card) => (
            <Fragment key={card.name}>
              <li>
                <StyledLink href={`/cards/swiper/${card.id}`}>
                  {card.name}
                </StyledLink>
              </li>
              <li>{card.meaning_rev}</li>
            </Fragment>
          ))}
        </StyledResults>
      </SearchResultsContainer>
      <select
        onChange={(e) => renderResults(e)}
        style={{
          position: "fixed",
          bottom: "70px",
          width: "100%",
          background: `${(p) => p.theme.colorBackground}`,
          color: `${(p) => p.theme.colorText}`,
          textAlignLast: "center",
          height: "40px",
          fontSize: "1.2rem",
        }}
        id={"filterSelection"}
        value={selectOption}
      >
        <option value="name">
          by name {": "}
          {cardByName.length > 0 && cardByName.length}
        </option>
        <option value="description">
          by description {": "}
          {cardByDesc.length > 0 && cardByDesc.length}
        </option>
        <option value="meaningUp">
          by meaning upright{": "}
          {cardByMeaningUp.length > 0 && cardByMeaningUp.length}
        </option>
        <option value="meaningRev">
          by meaning reversed{": "}
          {cardByMeaningRev.length > 0 && cardByMeaningRev.length}
        </option>
      </select>
    </Fragment>
  );
}
