import ChatApi from "../../components/chatAPI";
import AppContainer from "../../components/Styled/StyledAppContainer";
import StyledCardContainer from "../../components/Styled/StyledCardContainer";
import TopMenuBar from "../../components/Styled/StyledTopMenuBar";
import styled from "styled-components";
import StyledNavbar from "../../components/Styled/StyledNavbar";

const StyledOptions = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export default function FourOhFour() {
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
