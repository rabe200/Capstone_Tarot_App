import styled from "styled-components";

const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #293133;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
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
  }

  @media only screen and (min-width: 414px) {
    width: 414px;
    height: 896px;
  }

  @media only screen and (min-width: 540px) {
    width: 540px;
    height: 720px;
  }

  @media only screen and (min-width: 768px) {
    width: 768px;
    height: 1024px;
    font-size: 1.8em;
  }

  @media only screen and (min-width: 820px) {
    width: 820px;
    height: 1180px;
  }

  @media only screen and (min-width: 912px) {
    width: 912px;
    height: 1368px;
  }

  @media only screen and (min-width: 1024px) {
    width: 1024px;
    height: 768px;
  }

  @media only screen and (min-width: 1440px) {
    width: 1440px;
    height: 900px;
  }
`;

export default function AppContainer({ children }) {
  return <StyledAppContainer>{children}</StyledAppContainer>;
}
