import styled from "styled-components";

export const Container = styled.div`
  background: #7e7e7e;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormLogin = styled.form`
  flex-wrap: wrap;
  flex-direction: row;
  width: 665px;

  margin: 10px;
  border-radius: 5px;

  background: linear-gradient(to bottom, #c8d8ed 0%, #ffffff 100%), transparent;
  background-size: 100% 100%;
  background-repeat: repeat-x;

  span,
  svg {
    background: transparent;
  }
  .gridContainer {
    background: transparent;
    min-height: 300px;
    max-width: 650px;
    #containerCompany {
      align-items: center;

      img {
        height: 205px;
        width: 205px;
        background: transparent;
        margin-top: 20px;
        /* margin-left: 55px; */
        /* align-self: center; */
      }
    }
  }
  #containerLogin {
    /* padding-right: 70px; */
    margin: 10px 0 10px 0;
  }

  .gridItem {
    background: transparent;
    display: flex;
    justify-content: center;

    h1 {
      font-weight: 100;
      padding-left: 55px;
    }

    #imgFake {
      img {
        /* padding-left: 20px; */
        height: 280px;
        width: 3px;
        border-radius: 10px;
        margin-top: 10px;
        /* color: red; */
      }
    }

    .inputContainer {
      /* height: 50px; */
      /* padding: 10px; */

      .iconLock {
        padding-right: 7px;
      }
    }

    .itemsLogin {
      display: grid;
      margin-top: 20px;
      p {
        text-align: center;
      }

      #btnLogin {
        width: 280px;
        /* margin-left: 9px; */
        display: flex;
        justify-content: center;
      }

      button {
        margin-top: 20px;
        height: 50px;
        width: 100%;
      }
    }
    a {
      text-decoration: none;
      text-align: end;
      font-size: 14px;
    }
    h1,
    div,
    a,
    p {
      background: transparent;
    }
  }

  .inputs {
    background: transparent;
    padding: 8px;
    width: 280px;
    /* height: 30px; */

    svg,
    p {
      background: transparent;
    }
  }
`;

export const linhaVertical = styled.div`
  flex: 1;
  color: #fff;
`;
