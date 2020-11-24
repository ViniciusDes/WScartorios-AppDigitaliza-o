import styled from "styled-components";

export const ContainerGrid = styled.div`
  /* margin-top: 40px; */
  flex-wrap: wrap;
  width: 94%;

  img {
    width: 20px;
    height: 20px;

    margin: 5px;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;
