import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  position: relative;
  width: 375px;
  height: 667px;
  min-height: 667px;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;

  @media only screen and (min-width: 390px) {
    width: 390px;
    height: 844px;
  }

  @media only screen and (min-width: 393px) {
    width: 393px;
    height: 851px;
  }

  @media only screen and (min-width: 412px) {
    width: 412px;
    height: 915px;
  }

  @media only screen and (min-width: 414px) {
    width: 414px;
    height: 896px;
  }

  @media only screen and (min-width: 768px) {
    width: 768px;
    height: 1024px;
  }

  @media only screen and (min-width: 820px) {
    width: 820px;
    height: 1180px;
  }
`;

export default function Layout({ children }) {
  return <StyledMain>{children}</StyledMain>;
}
