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

  @media (max-width: 450px) {
    #btnSearch {
      margin-left: 0;
      margin-top: 10px;
    }
    .makeStyles-btnEnviaForm-9 {
      margin: 5px 0 0 0;
    }
    .makeStyles-btnAdcionar-8 {
      margin: 0;
    }
    .makeStyles-btnCancelar-10 {
      margin: 5px 0 0 0;
    }
  }
`;
