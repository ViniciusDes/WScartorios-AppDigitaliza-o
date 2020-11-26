import styled from "styled-components";

export const ContainerGrid = styled.div`
  /* margin-top: 40px; */
  flex-wrap: wrap;
  width: 79%;

  img {
    width: 20px;
    height: 20px;

    margin: 10px;
  }

  img:hover {
    cursor: pointer;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;
