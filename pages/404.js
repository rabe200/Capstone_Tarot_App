import AppContainer from "../components/Styled/StyledAppContainer";
import StyledCardContainer from "../components/Styled/StyledCardContainer";
import TopMenuBar from "../components/Styled/StyledTopMenuBar";
import styled from "styled-components";
import CatApi from "../components/CatApi";
import StyledNavbar from "../components/Styled/StyledNavbar";

const StyledOptionsMenu = styled.ul`
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
        <TopMenuBar mid={"404"} back={"/"} />

        <StyledCardContainer>
          <StyledOptionsMenu>
            <h1>404 PAGE NOT MEOW</h1>

            <CatApi />
          </StyledOptionsMenu>
        </StyledCardContainer>
        <StyledNavbar />
      </AppContainer>
    </>
  );
}
