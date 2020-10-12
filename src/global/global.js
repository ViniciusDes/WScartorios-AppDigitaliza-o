import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 300;
   }
   body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 300;

  }
  html, body, .App, #root{
    height: 100%;
    background: #FFFFFF;
    flex-wrap: wrap;
   
  }
  

  /* background:  */
`;

export default GlobalStyle;
