import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --background: #F7F7FF;
    --background-secondary:#E8E8F0;
    
    --text-color: #323232;

    --height: 100vh;
  }

  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyles;
