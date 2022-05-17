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

  * Works on Firefox */ * {
    scrollbar-width: thin;
    scrollbar-color: var(--background-purple) var(--background-secondary);
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: var(--background-secondary);
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--background-purple);
    border-radius: 20px;
    border: 4px solid var(--background-secondary);
  }
`;

export default GlobalStyles;
