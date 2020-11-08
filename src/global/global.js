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

    .MuiOutlinedInput-notchedOutline {
    //cor das bordas dos inputs geral
      border-color: rgb(0 126 255);
    }
    .MuiInput-underline:before {
      border-bottom: 1px solid rgb(0 126 255);
    }
    .MuiButton-outlined{
      border: 1px solid rgb(0 126 255);
    }
   }
   body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 300;

  }
  html, body, .App, #root{
    height: 100%;
    flex-wrap: wrap;
   
  }
  

  /* background:  */
`;

export default GlobalStyle;
