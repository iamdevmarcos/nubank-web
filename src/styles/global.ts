import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --background: #F7F7FF;
    --text-color: #000;

    --height: 100vh;
  }
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }
`;

export default GlobalStyles;
