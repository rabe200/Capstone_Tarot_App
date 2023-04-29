import styled from "styled-components";
import AppContainer from "../../../../components/Styled/StyledAppContainer";
import TopMenuBar from "../../../../components/Styled/StyledTopMenuBar";
import StyledCardContainer from "../../../../components/Styled/StyledCardContainer";
import ChatApi from "../../../../components/chatAPI";
import StyledNavbar from "../../../../components/Styled/StyledNavbar";

const StyledOptions = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export default function Reading() {
  return (
    <>
      <AppContainer>
        <TopMenuBar mid={"tarot_reading"} back={"/"} />
        <StyledCardContainer>
          <StyledOptions>
            <ChatApi />
          </StyledOptions>
        </StyledCardContainer>
        <StyledNavbar />
      </AppContainer>
    </>
  );
}
