import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    /* margin: 0;
    font-family: system-ui;
    width: 375px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center; */
  }

  main {
    background-color: hotpink;
  }
`;
