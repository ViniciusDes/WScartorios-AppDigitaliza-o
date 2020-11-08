import styled from "styled-components";

export const ContainerHeader = styled.div`
  #selectContainer {
    color: red;
    max-width: 1100px !important;
    width: auto !important;
    margin: 10px 0 10px 0;
  }

  .gridItem {
    padding: 0 !important;
  }
  .MuiOutlinedInput-notchedOutline {
    //cor das bordas dos inputs geral
    border-color: rgb(0 126 255);
  }
  .MuiInput-underline:before {
    border-bottom: 1px solid rgb(0 126 255);
  }

  @media (max-width: 450px) {
    #btnSearch {
      margin-left: 0;
      margin-top: 10px;
    }
    .makeStyles-btnEnviaForm-9 {
      margin: 5px 0 0 0;
      width: 100%;
    }
    .makeStyles-btnAdcionar-8 {
      margin: 0;
      width: 100%;
    }
    .makeStyles-btnCancelar-10 {
      margin: 5px 0 0 0;
      width: 100%;
    }

    .MuiInput-underline {
      //ultimo select de opções
      max-width: 214px;
    }
  }
`;
