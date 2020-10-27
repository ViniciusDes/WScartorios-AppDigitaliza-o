import styled from "styled-components";
// import { InputLabel } from "./index";
// import InputLabel from "@material-ui/core/InputLabel";

export const Container = styled.div`
  background: #ffffff;
  height: 100%;
  /* position: relative; */

  .gridContainer {
    height: 100%;
    width: 100%;
    display: flex;
  }

  .gridItem {
    /* height: 100%; */
  }
  img {
    height: 100%;
    width: 100%;
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
  }
`;

export const Menu = styled.form`
  border: 2px solid #eceeee;
  border-radius: 5px;
  width: 480px;
  height: 400px;

  margin: 20px 0 0 20px;

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
