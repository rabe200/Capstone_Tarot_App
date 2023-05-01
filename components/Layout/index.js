import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  position: fixed;
  width: 375px;
  height: 567px;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  overflow: hidden;

  @media only screen and (min-width: 414px) {
    width: 414px;
    height: 780px;
  }

  @media only screen and (min-width: 585px) {
    width: 585px;
    height: 1161px;
  }

  @media only screen and (min-width: 834px) {
    width: 834px;
    height: 800px;
  }

  @media only screen and (min-width: 1194px) {
    width: 1194px;
    height: 764px;
  }
  @media only screen and (min-width: 1400px) {
    width: 1400px;
    height: 834px;
  }
`;

export default function Layout({ children }) {
  return <StyledMain>{children}</StyledMain>;
}
