import { useStore } from "../../../../src/store/store";
import { useEffect, useState } from "react";
import SearchResults from "../../../../components/SearchResults";
import StyledCardContainer from "../../../../components/Styled/StyledCardContainer";
import AppContainer from "../../../../components/Styled/StyledAppContainer";
import TopMenuBar from "../../../../components/Styled/StyledTopMenuBar";
import SearchBar from "../../../../components/SearchBar";
import StyledNavbar from "../../../../components/Styled/StyledNavbar";

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
      <>
        <p>provide a search term</p>
      </>
    );
  }

  return (
    <AppContainer>
      <TopMenuBar mid={"searchResults"}></TopMenuBar>

      <SearchBar />
      <StyledCardContainer>
        <SearchResults />
      </StyledCardContainer>
      <StyledNavbar />
    </AppContainer>
  );
}
