import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --background: #F7F7FF;
    --background-secondary:#E8E8F0;
    --background-purple: #820AD1;
    
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

  a {
    text-decoration: none;

    color: var(--text-color);
  }

  span, strong {
    color: var(--background-purple);
  }
`;

export default GlobalStyles;
