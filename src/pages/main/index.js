import React from "react";
import imgCartorioDigital from "../../images/CartorioDigital.jpg";
import { Container, Menu, Header, Body } from "./styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <Container>
      <Grid container spacing={2} className="gridContainer" id="teste">
        <Grid item xs={12} sm={8} className="gridItem">
          <img src={imgCartorioDigital} />
        </Grid>

        <Grid item xs={12} sm={4} className="gridItem">
          <div className="containerItens">
            <Menu className="menuItems">
              <Header>
                <h1>Cartório Digital WS</h1>
              </Header>

              <Body>
                <ul>
                  <li>
                    <Link to={`PageDigitalizar`}>
                      DIGITALIZAÇÃO DE DOCUMENTOS
                    </Link>
                  </li>
                  <li>
                    <Link to={`PesquisarDocsDig`}>
                      ENCONTRAR DIGITALIZAÇÕES
                    </Link>
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
