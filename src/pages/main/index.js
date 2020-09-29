import React, { Fragment } from "react";
import imgCartorioDigital from "../../images/CartorioDigital.jpg";
import { Container, Menu, Header, Body } from "./styles";
import Grid from "@material-ui/core/Grid";
import DigitalizarDoc from "../../pages/DigitalizarDoc/index";
import { Link } from "react-router-dom";
import TopBar from "../../components/TopBar/index";

export default function Main() {
  return (
    <Container>
      <Grid container spacing={2} className="gridContainer">
        <Grid item xs={12} sm={8} className="gridItem">
          <img src={imgCartorioDigital} />
        </Grid>

        <Grid item xs={12} sm={4} className="gridItem">
          <div className="containerItens">
            <Menu id="te">
              <Header>
                <h1>Cartório Digital WS</h1>
              </Header>

              <Body>
                <ul>
                  <li>
                    <Link to={`DigitalizarDoc`}>
                      DIGITALIZAÇÃO DE DOCUMENTOS
                    </Link>
                  </li>
                  <li>
                    <Link>ENCONTRAR DIGITALIZAÇÕES</Link>
                  </li>
                </ul>
              </Body>
            </Menu>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
