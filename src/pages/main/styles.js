import styled from "styled-components";
// import { InputLabel } from "./index";
// import InputLabel from "@material-ui/core/InputLabel";

export const Container = styled.div`
  background: linear-gradient(to bottom, #c8d8ed 0%, #ffffff 100%), transparent;
  height: 100%;
  /* position: relative; */

  .gridContainer {
    margin: 0;
    height: 100%;
    width: 100%;
    display: flex;
  }
  a{
    text-decoration: none;
    font-weight: 500; 
  }

  .gridItem {
    padding: 0 !important;
  }
  img {
    height: 100%;
    width: 100%;
  }

  .containerItens {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 450px) {
    background: #000000;
    .gridItem {
      img {
        height: 100%;
        width: 100%;
      }
    }

    .menuItems {
      width: 90%;
    }

    .containerItens {
      display: flex;
      justify-content: center;

      padding-top: 40px;

      h1 {
        color: #ffffff;
      }
    }
  }
`;

export const ContentExit = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 5px;
  a {
    font-size: 20px;
  }
`

export const Menu = styled.form`
  border: 2px solid #eceeee;
  border-radius: 5px;
  width: auto;
  margin: 10px;

  height: auto;
  padding-bottom: 20px;
`;

export const Header = styled.div`
  border-bottom: 1px solid;
  height: 50px;
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const Body = styled.div`
  margin-top: 20px;
  flex-direction: column;

  display: flex;
  a {
    text-decoration: none;
    color: #0086f8;
  }

  ul {
    flex-direction: column;
  }
  li {
    text-decoration: none;
    list-style: none;
    a {
      padding-left: 5px;
    }
  }
`;
