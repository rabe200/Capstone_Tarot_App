import { useStore } from "../../../../src/store/store";
import { useEffect, useState } from "react";
import SearchResults from "../../../../components/SearchResults";
import StyledCardContainer from "../../../../components/Styled/StyledCardContainer";
import StyledMenuBar from "../../../../components/Styled/StyledMenuBar";
import styled from "styled-components";
import Link from "next/link";

const StyledMenuLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-style: italic;
  font-size: 2rem;
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
      <>
        <p>no results</p>
      </>
    );
  }

  return (
    <>
      <StyledCardContainer>
        <h1>RESULTS</h1>
        <SearchResults />
      </StyledCardContainer>
      <StyledMenuBar query1={"/"} query2={"/"}>
        <StyledMenuLink href={`/`}>menu</StyledMenuLink>{" "}
      </StyledMenuBar>
    </>
  );
}
