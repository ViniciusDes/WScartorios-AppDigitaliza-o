import styled from "styled-components";
import { TopBar } from "../../components/TopBar/index";

export const ContainerDigitalizar = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #c8d8ed 0%, #ffffff 100%), transparent;

  /* background: red; */
  #containerInputs {
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    margin-bottom: 20px;
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
    background: #ffffff;
    border-radius: 8px;

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

  @media (max-width: 450px) {
    height: auto;

    .containerItens {
      margin-top: 10px;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;

export const Header = styled.div`
  color: #0086f8;
  border-bottom: 1px solid #7e7e7e;
  p {
    font-weight: bold;
    padding: 20px 0 20px 20px;
  }
`;
