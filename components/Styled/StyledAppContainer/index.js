import styled from "styled-components";

const StyledAppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  background: ${(p) => p.theme.colorDeep};
  color: ${(p) => p.theme.colorText};

  @media only screen and (min-width: 390px) {
    width: 390px;
  }

  @media only screen and (min-width: 412px) {
    width: 412px;
    height: 100vh;
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
