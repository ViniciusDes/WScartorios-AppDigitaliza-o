import styled from "styled-components";

export const ContainerTopbar = styled.header`
  background: #050505 !important;
  width: 100%;
  .containerTopbar {
    ul {
      flex-wrap: wrap;
      margin-left: 20px;
      list-style: none;
      display: flex;
      li {
        cursor: pointer;
        color: #ffffff;
        padding: 10px;
      }
      li:hover {
        color: #050505;
        background: #ffffff;
        transition: background 0.4s;
      }
    }
  }
`;
