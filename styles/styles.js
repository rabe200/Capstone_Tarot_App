import { createGlobalStyle } from "styled-components";
import { pixelOperator } from "../pages/_app";

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
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: pixelOperator;
  }

`;
