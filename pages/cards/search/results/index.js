import DetailsButton from "../../../../components/DetailsButton";
import BackButton from "../../../../components/Backbutton/backbutton";
import { useStore } from "../../../store";
import React, { useEffect, useState } from "react";
import SearchResults from "../../../../components/SearchResults";

export default function SearchResult() {
  const [hasMounted, setHasMounted] = useState(false);
  const searchQuery = useStore((state) => state.searchQuery);

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
        <BackButton />
      </>
    );
  }

  return (
    <>
      <h1>RESULTS</h1>
      <SearchResults />
      <p />
      <BackButton />
    </>
  );
}
