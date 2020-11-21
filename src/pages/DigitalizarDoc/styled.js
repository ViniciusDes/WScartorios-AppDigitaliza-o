import styled from "styled-components";

export const ContainerHeader = styled.div`
  #selectContainer {
    color: red;
    min-width: 40%;
    /* max-width: 1100px !important; */
    width: auto !important;
    margin: 10px 0 10px 0;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
  }
  .containerSelect {
    width: 90%;
  }
  .gridContainer {
    width: 91.4%;
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

  .MuiInput-underline {
    //ultimo select de opções
    max-width: 250px;
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
      /* max-width: 220px !important;
      min-width: 220px !important; */
    }

    #selectContainer {
      /* max-width: 200px !important; */
      min-width: 100px !important;

      display: flex;
      /* margin: 0; */
    }

    .MuiInput-underline {
      //select
      margin: 10px 0 0 0 !important;
      width: 93%;
    }

    .MuiInput-underline:before {
      //linha do select
      width: 93%;
    }
    .MuiGrid-container {
      //container geral dos inputs
      width: 100%;
    }

    .makeStyles-digitalization-11 {
      width: 100%; //container geral dos botes de digitalizar ou salvar
    }
  }
`;
