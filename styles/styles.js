import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    font-family: system-ui;
    width: 320px;
    height: 480px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: pixelOperator;
    background: black;
    overflow: auto;
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
  }



 
  }

  


`;
