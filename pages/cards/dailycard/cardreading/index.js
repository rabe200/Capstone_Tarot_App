import styled from "styled-components";
import TopMenuBar from "../../../../components/Styled/StyledTopMenuBar";
import ChatApi from "../../../../components/ChatApi";
import StyledNavbar from "../../../../components/Styled/StyledNavbar";
import Frame from "../../../../components/Frame";

const StyledOptions = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  top: 0;
  align-self: center;
  justify-self: center;
`;

export default function Reading() {
  return (
    <Frame>
      <TopMenuBar mid={"tarot_reading"} back={"/"} />
      <StyledOptions>
        <ChatApi />
      </StyledOptions>
      <StyledNavbar />
    </Frame>
  );
}
