import styled from "styled-components";
import TopMenuBar from "../components/Styled/StyledTopMenuBar";
import StyledNavbar from "../components/Styled/StyledNavbar";
import Frame from "../components/Frame";
import useStore from "../src/store/store";
import SearchBar from "../components/SearchBar";

const StyledOptions = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 20px;
  align-self: center;
  justify-self: center;
`;

export default function SearchPage() {
  const currentCardName = useStore((state) => state.currentCard.name);
  return (
    <Frame>
      <TopMenuBar mid={"tarot_reading"} back={"/"} />
      <StyledOptions>
        <SearchBar />
      </StyledOptions>
      <StyledNavbar />
    </Frame>
  );
}
