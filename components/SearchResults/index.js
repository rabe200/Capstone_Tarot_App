import { useStore } from "../../pages/store";
import React, { useEffect, useState } from "react";
import { cards } from "../../lib/data";

export default function SearchResults() {
  const [hasMounted, setHasMounted] = useState(false);
  const searchQuery = useStore((state) => state.searchQuery);
  function getCardByProp(searchQuery, property) {
    let queryWords = searchQuery
      .split(" ")
      .filter((queryWord) => queryWord.length > 0);
    let results;
    results = cards.filter((card) =>
      queryWords.every((queryWord) => {
        let propertyValue = card[property] || "";
        return (
          propertyValue.toLowerCase().split(" ").includes(queryWord) ||
          propertyValue.toLowerCase().includes(queryWord)
        );
      })
    );
    return results;
  }

  const cardByName = getCardByProp(searchQuery, "name");
  const cardByDesc = getCardByProp(searchQuery, "desc");
  const cardByMeaningUp = getCardByProp(searchQuery, "meaning_up");
  const cardByMeaningRev = getCardByProp(searchQuery, "meaning_rev");

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  if (searchQuery === "") {
    return (
      <>
        <p>no results</p>
      </>
    );
  }

  return (
    <>
      for input: <b>{searchQuery}</b>
      <ul>
        <h1>by name</h1>
        {cardByName.map((prop) => (
          <li key={prop.name}>{prop.name}</li>
        ))}
      </ul>
      <ul>
        <h1>by description</h1>
        {cardByDesc.map((prop) => (
          <li key={prop.name}>{prop.desc}</li>
        ))}
      </ul>
      <ul>
        <h1>by meaning</h1>
        {cardByMeaningUp.map((prop) => (
          <li key={prop.name}>{prop.meaning_up}</li>
        ))}
      </ul>
      <ul>
        <h1>by reversed meaning</h1>
        {cardByMeaningRev.map((prop) => (
          <li key={prop.name}>{prop.meaning_rev}</li>
        ))}
      </ul>
    </>
  );
}
