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
    padding: 0;
    height: 100vh;
    width: 100vw;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: pixelOperator;
    overflow: hidden;
  }
`;
