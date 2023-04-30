import useStore from "../../../../../src/store/store";
import { useEffect, useState } from "react";
import SearchResults from "../../../../../components/SearchResults";

import TopMenuBar from "../../../../../components/Styled/StyledTopMenuBar";
import SearchBar from "../../../../../components/SearchBar";
import StyledNavbar from "../../../../../components/Styled/StyledNavbar";
import styled from "styled-components";
const Frame = styled.div`
  background: palevioletred;
  width: 375px;
  height: 667px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
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
        <p>provide a search term</p>
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
