import { createGlobalStyle } from "styled-components";
import { pixelOperator } from "../pages/_app";
export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

root {
 --pixelOperator-font: ${pixelOperator};
 font-family: pixelOperator;
}

  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    font-family: system-ui;
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: pixelOperator;
    overflow: auto;
    background: ${(p) => p.theme.colorDeep};
  color: ${(p) => p.theme.colorText};
 

    @media only screen and (min-width: 375px) {
    width: 375px;
  }

  @media only screen and (min-width: 390px) {
    width: 390px;
  }

  @media only screen and (min-width: 393px) {
    width: 393px;
  }

  @media only screen and (min-width: 412px) {
    width: 412px;
  }

    @media only screen and (min-width: 414px) {
    width: 414px;
  }

  @media only screen and (min-width: 540px) {
    width: 540px;
  }

  @media only screen and (min-width: 768px) {
    width: 768px;
  }

  @media only screen and (min-height: 1025px) {
    width: 99vw;
  }
  }
`;
