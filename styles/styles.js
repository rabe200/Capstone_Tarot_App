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
    height: 667px;
    width: 375px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: pixelOperator;
    background: black;

  @media only screen and (min-width: 414px) {
    width: 414px;
    height: 896px;
  }

  @media only screen and (min-width: 585px) {
    width: 585px;
   min-height: 900px;
    
  }

  @media only screen and (min-width: 834px) {
    width: 834px;
  }

  @media only screen and (min-width: 1194px) {
    width: 1194px;
    height: 1024px;
 
  }

  @media only screen and (min-width: 1400px) {
    width: 1400px;
    height: 834px;
  }

  }
`;
