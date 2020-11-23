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
    width: 91.3%;
    padding-left: 10px;
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
    .containerSelect {
      width: 100%;
      padding-left: 10px;
    }
    .MuiInput-underline {
      //ultimo select de opções
      max-width: 300px !important;
      /*min-width: 220px !important; */
    }
    .makeStyles-btnInputs-7 {
      width: 100% !important;
    }
    #selectContainer {
      /* max-width: 200px !important; */
      min-width: 100px !important;

      display: flex;
      /* margin: 0; */
    }

    .gridItem {
      padding: 0 !important;
      margin: 0 !important;
    }

    .MuiInput-underline {
      //select
      margin: 10px 0 0 0 !important;
      width: 100%;
    }

    .MuiInput-underline:before {
      //linha do select
      width: 100%;
    }
    .MuiGrid-container {
      //container geral dos inputs
      width: 100%;
      margin: 0 !important;
    }

    .makeStyles-digitalization-11 {
      width: 100%; //container geral dos botes de digitalizar ou salvar
    }
  }
`;
