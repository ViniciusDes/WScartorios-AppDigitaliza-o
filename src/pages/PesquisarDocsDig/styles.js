import styled from "styled-components";
import { TopBar } from "../../components/TopBar/index";

export const ContainerDigitalizar = styled.div`
  width: 100%;
  height: 100%;
  background: #f6f6f6;

  /* background: red; */
  #containerInputs {
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    /* width: 900px; */
  }

  #containerAll {
    margin-top: 50px;
  }
  #bottomBar {
    display: flex;

    justify-content: center;
  }
  .containerItens {
    margin-top: 50px;
    margin-left: 50px;
    margin-right: 50px;
    height: 100%;
    background: #ffffff;

    .inputsSearch {
      display: flex;
      .inputItem {
        padding: 10px;
        width: 300px;
      }

      .gridContainer {
        display: block;
        #cont {
          /* border: 1px solid red; */
          margin-top: 25px;
        }
        .gridItem {
          margin-left: auto;
          margin-right: auto;
          display: flex;
          justify-content: center;
        }
      }
    }
  }

  /* ${TopBar} {
    background: red !important;
  } */
`;

export const Header = styled.div`
  color: #0086f8;
  border-bottom: 1px solid #7e7e7e;
  p {
    font-weight: bold;
    padding: 20px 0 20px 20px;
  }
`;
