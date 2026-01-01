import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif; /* Fonte do seu Figma */
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #f4f4f4;
  
  }
`;

export default GlobalStyle;
