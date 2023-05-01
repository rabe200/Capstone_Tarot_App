import styled from "styled-components";
import TopMenuBar from "../../../../components/Styled/StyledTopMenuBar";
import ChatApi from "../../../../components/ChatApi";
import StyledNavbar from "../../../../components/Styled/StyledNavbar";
import Frame from "../../../../components/Frame";
import useStore from "../../../../src/store/store";

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

const DisplayCardName = styled.div`
  position: fixed;
  bottom: 50px;
`;

export default function Reading() {
  const currentCardName = useStore((state) => state.currentCard.name);
  return (
    <Frame>
      <TopMenuBar mid={"tarot_reading"} back={"/"} />
      <StyledOptions>
        <ChatApi />
      </StyledOptions>
      <DisplayCardName>{currentCardName}</DisplayCardName>
      <StyledNavbar />
    </Frame>
  );
}
