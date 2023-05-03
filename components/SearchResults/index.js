import { useStore } from "../../src/store/store";
import { Fragment, useEffect, useState } from "react";
import { cards } from "../../lib/data";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Frame from "../Frame";

const SearchResultsContainer = styled.div`
  display: flex;
  height: 520px;
  width: 375px;
  flex-direction: column;
  position: fixed;
  top: 0px;
  height: 80%;
  align-items: center;
  justify-content: center;
`;

const StyledResults = styled.ul`
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: auto;
  border: 2px black solid;
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
  @media only screen and (min-width: 834px) {
    font-size: 1.2em;
  }
`;

const StyledLink = styled(Link)`
  color: ${(p) => p.theme.colorBackground};
  text-decoration: none;
  background: ${(p) => p.theme.colorText};
  width: 100%;
`;

const StyledBoldText = styled.b`
  color: white;
`;

const StyledSelect = styled.select`
  position: "fixed";
  bottom: "100px";
  width: "";
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
  textalignlast: "center";
  height: "30px";
  fontsize: "1.2rem";
`;

const StyledListElement = styled.li`
  padding: 10px;
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
        <StyledResults id="resultsByDescription" hidden={hidden.desc}>
          {cardByShortDesc.map((card) => {
            return (
              <Fragment key={card.name}>
                <StyledListElement>
                  <StyledLink href={`/cards/swiper/${card.id}/zoom`}>
                    {card.name}
                  </StyledLink>
                </StyledListElement>
                <li>"[...] {card.content} [...]"</li>
              </Fragment>
            );
          })}
        </StyledResults>
        <StyledResults id="resultsByName" hidden={hidden.name}>
          {cardByName.map((card) => (
            <Fragment key={card.name}>
              <li>
                <StyledLink href={`/cards/swiper/${card.id}/zoom`}>
                  {card.name}
                </StyledLink>
              </li>
              <li>
                <Link href={`/cards/swiper/${card.id}/zoom`}>
                  {" "}
                  <Image
                    src={card.image}
                    width={160}
                    height={250}
                    alt={card.name}
                    priority
                  />
                </Link>
              </li>
            </Fragment>
          ))}
        </StyledResults>
        <StyledResults id="resultsMeaningUp" hidden={hidden.meaningUp}>
          {cardByMeaningUp.map((card) => (
            <Fragment key={card.name}>
              <li>
                <StyledLink href={`/cards/swiper/${card.id}/zoom`}>
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
                <StyledLink href={`/cards/swiper/${card.id}/zoom`}>
                  {card.name}
                </StyledLink>
              </li>
              <li>{card.meaning_rev}</li>
            </Fragment>
          ))}
        </StyledResults>
      </SearchResultsContainer>
      <StyledSelect
        onChange={(e) => renderResults(e)}
        style={{
          position: "fixed",
          bottom: "100px",
          width: "",
          background: `${(p) => p.theme.colorBackground}`,
          color: `${(p) => p.theme.colorText}`,
          textAlignLast: "center",
          height: "30px",
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
      </StyledSelect>
    </Fragment>
  );
}
