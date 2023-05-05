import styled from "styled-components";
import CatApi from "../components/CatApi";
import StyledNavbar from "../components/Styled/StyledNavbar";
import Frame from "../components/Frame";

const StyledOptionsMenu = styled.ul`
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 300px;
  @media only screen and (min-width: 834px) {
    font-size: 1.4em;
    top: 60px;
    width: 834px;
    height: 800px;
  }
`;

export default function FourOhFour() {
  return (
    <Frame>
      <StyledOptionsMenu>
        <h1>404 PAGE NOT MEOW</h1>

        <CatApi />
      </StyledOptionsMenu>
      <StyledNavbar />
    </Frame>
  );
}
