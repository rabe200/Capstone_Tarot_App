import styled from "styled-components";

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  border-radius: 8px;
  background: ${(p) => p.theme.colorBackground};
  color: ${(p) => p.theme.colorText};
  @media only screen and (min-width: 360px) {
    width: 360px;
    height: 740px;
  }

  @media only screen and (min-width: 375px) {
    width: 375px;
    height: 667px;
  }

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
    font-size: 1.2em;
  }

  @media only screen and (min-width: 414px) {
    width: 414px;
    height: 896px;
    font-size: 1.2em;
  }

  @media only screen and (min-width: 540px) {
    width: 540px;
    height: 720px;
    font-size: 1.4em;
  }

  @media only screen and (min-width: 768px) {
    width: 768px;
    height: 1024px;
    font-size: 1.8em;
  }
`;

export default function AppContainer({ children }) {
  return <StyledAppContainer>{children}</StyledAppContainer>;
}
