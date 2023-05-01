import useStore from "../../../../../src/store/store";
import { useEffect, useState } from "react";
import SearchResults from "../../../../../components/SearchResults";
import Frame from "../../../../../components/Frame";
import TopMenuBar from "../../../../../components/Styled/StyledTopMenuBar";
import SearchBar from "../../../../../components/SearchBar";
import StyledNavbar from "../../../../../components/Styled/StyledNavbar";

export default function SearchResult() {
  const [hasMounted, setHasMounted] = useState(false);
  const searchQuery = useStore((state) => state.searchQuery);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  if (searchQuery === "") {
    return (
      <Frame>
        <TopMenuBar mid={"searchResults"}></TopMenuBar>

        <p>provide a search term</p>
        <SearchBar />

        <StyledNavbar />
      </Frame>
    );
  }

  return (
    <Frame>
      <TopMenuBar mid={"searchResults"}></TopMenuBar>
      <SearchBar />
      <SearchResults />
      <StyledNavbar />
    </Frame>
  );
}
