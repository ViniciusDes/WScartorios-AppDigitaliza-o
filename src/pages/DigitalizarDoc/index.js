import React from "react";
import { TopBar } from "../../components/TopBar/index";
import { ContainerDigitalizar, Header } from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export const DigitalizarDoc = () => (
  <ContainerDigitalizar>
    <TopBar />

    <div className="containerItens">
      <Header>
        <p>FILTROS</p>
      </Header>
      <h1>pagina digitalizar</h1>
      <div className="inputsSearch">
        <Grid container spacing={2} className="gridContainer">
          <div id="cont">
            <Grid item xs={12} sm={12} className="gridItem">
              <div className="inputItem">
                <TextField
                  id="teste"
                  label="Termo/Parte"
                  variant="outlined"
                  fullWidth="true"
                />
              </div>
              <div className="inputItem">
                <TextField
                  id="teste"
                  label="Pesquisa geral"
                  variant="outlined"
                  fullWidth="true"
                />
              </div>
              <div className="inputItem">
                <TextField
                  id="teste"
                  label="Atalhos"
                  variant="outlined"
                  fullWidth="true"
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={12} className="gridItem">
              <div className="inputItem">
                <TextField
                  id="teste"
                  label="Data"
                  variant="outlined"
                  fullWidth="true"
                />
              </div>{" "}
              <div className="inputItem">
                <TextField
                  id="teste"
                  label="Caixa"
                  variant="outlined"
                  fullWidth="true"
                />
              </div>{" "}
              <div className="inputItem">
                <TextField
                  id="teste"
                  label="Livro"
                  variant="outlined"
                  fullWidth="true"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} className="gridItem">
              <div className="inputItem">
                <TextField
                  id="teste"
                  label="Protocolo oficio"
                  variant="outlined"
                  fullWidth="true"
                />
              </div>{" "}
              <div className="inputItem">
                <TextField
                  id="teste"
                  label="Ficha"
                  variant="outlined"
                  fullWidth="true"
                />
              </div>{" "}
              <div className="inputItem">
                <TextField
                  id="teste"
                  label="Folha/CPF/CNPJ"
                  variant="outlined"
                  fullWidth="true"
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} className="gridItem">
              <div className="inputItem">
                <TextField
                  id="teste"
                  label="Ata"
                  variant="outlined"
                  fullWidth="true"
                />
              </div>{" "}
              <div className="inputItem">
                <TextField
                  id="teste"
                  label="Tipo de Ata"
                  variant="outlined"
                  fullWidth="true"
                />
              </div>{" "}
              <div className="inputItem">
                <TextField
                  id="teste"
                  label="Text"
                  variant="outlined"
                  fullWidth="true"
                />
              </div>
            </Grid>
          </div>
        </Grid>
      </div>
    </div>
  </ContainerDigitalizar>
);
