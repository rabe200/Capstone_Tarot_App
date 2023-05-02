import styled from "styled-components";
import TopMenuBar from "../../../../components/Styled/StyledTopMenuBar";
import ChatApi from "../../../../components/ChatApi";
import StyledNavbar from "../../../../components/Styled/StyledNavbar";
import Frame from "../../../../components/Frame";
import useStore from "../../../../src/store/store";

export default function Reading() {
  const currentCardName = useStore((state) => state.currentCard.name);
  return (
    <Frame>
      <TopMenuBar mid={`${currentCardName}`} back={"/"} />
      <ChatApi />
      <StyledNavbar />
    </Frame>
  );
}
