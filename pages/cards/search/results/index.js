import { useStore } from "../../../../src/store/store";
import { useEffect, useState } from "react";
import SearchResults from "../../../../components/SearchResults";
import StyledCardContainer from "../../../../components/Styled/StyledCardContainer";
import GridLayout3Columns from "../../../../components/Styled/GridLayoutWithSideNavigation";
import AppContainer from "../../../../components/Styled/StyledAppContainer";
import TopMenuBar from "../../../../components/Styled/StyledTopMenuBar";
import SearchBar from "../../../../components/SearchBar";

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
        <p>no results</p>
      </>
    );
  }

  return (
    <AppContainer>
      <SearchBar />
      <StyledCardContainer>
        <GridLayout3Columns
          query1={"null"}
          query2={"null"}
          navigation={"hidden"}
        >
          <SearchResults />
        </GridLayout3Columns>
      </StyledCardContainer>
      <TopMenuBar mid={"searchResults"}></TopMenuBar>
    </AppContainer>
  );
}
