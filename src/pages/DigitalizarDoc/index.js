import React from "react";
import { makeStyles } from "@material-ui/core";
import TopBar from "../../components/TopBar/index";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ContainerHeader } from "./styled";
import { SelectDocs as MUISelectDocs } from "../../components/select/SelectDoc";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: "wrap",
    width: "100px",
    // border: "1px solid red",
    margin: "20px",
    width: "auto",
  },
  header: {
    flexWrap: "wrap",
    padding: "10px",
    margin: "0 auto",
    width: "80%",
  },
  btns: {
    background: "#050505",
    // marginLeft: "10px",
    color: "#FFFFFF",
  },
  containerInputs: {
    // border: "1px solid black",
    margin: "20px auto",
    flexWrap: "wrap",
    width: "80%",
  },
  inputItem: {
    padding: "10px",
  },
  topBarAux: {
    display: "flex",
    alignItems: "center",
  },
  btnInputs: {
    marginLeft: "10px",
    color: "#ffffff",
    margin: "5px",
  },
  btnAdcionar: {
    background: "#37E33F",
    color: "#ffffff",
    margin: "5px",
  },
  btnEnviaForm: {
    background: "#0086f8",
    color: "#ffffff",
    margin: "5px",
  },
  btnCancelar: {
    // color: "#FFFFFF",
    margin: "5px",
  },

  digitalization: {
    marginTop: "20px",
    display: "inline-grid",
    width: "100%",
  },
  gridItem: {
    flexWrap: "wrap",
  },
}));

export default function DigitalizarDoc() {
  const classes = useStyles();
  return (
    <ContainerHeader id="containerHerader">
      <TopBar />
      <div className={classes.root}>
        <div className={classes.header}>
          <div className={classes.topBarAux}>
            <h1 style={{ fontWeight: "500" }}>Cartório</h1>
            <p style={{ paddingTop: "10px" }}>Digitalização</p>
          </div>

          <TextField
            label="Termo/Protocolo/Ficha"
            variant="outlined"
            // fullWidth
            size="small"
          />
          <Button
            id="teste"
            variant="contained"
            component="span"
            className={classes.btns}
          >
            Pesquisar
          </Button>
        </div>

        <div className={classes.containerInputs}>
          <Grid container spacing={2} className="gridContainer">
            <Grid
              item
              xs={12}
              sm={4}
              className="gridItem"
              // style={{ flexDirection: "column" }}
            >
              <MUISelectDocs />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              className="gridItem"

              // style={{ flexDirection: "column" }}
            >
              <TextField
                label="Tipo de Ata"
                variant="outlined"
                fullWidth
                size="small"
                className={classes.inputItem}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              className="gridItem"

              // style={{ flexDirection: "column" }}
            >
              <TextField
                label="Natureza"
                variant="outlined"
                fullWidth
                size="small"
                className={classes.inputItem}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} className="gridContainer">
            <Grid
              item
              xs={12}
              sm={4}
              className="gridItem"

              // style={{ flexDirection: "column" }}
            >
              <TextField
                label="Data da averbação"
                variant="outlined"
                fullWidth
                size="small"
                className={classes.inputItem}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              className="gridItem"

              // style={{ flexDirection: "column" }}
            >
              <TextField
                label="Livro Letra"
                variant="outlined"
                fullWidth
                size="small"
                className={classes.inputItem}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              className="gridItem"

              // style={{ flexDirection: "column" }}
            >
              <TextField
                label="Folha"
                variant="outlined"
                fullWidth
                size="small"
                className={classes.inputItem}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} className="gridContainer">
            <Grid
              item
              xs={12}
              sm={4}
              className="gridItem"

              // style={{ flexDirection: "column" }}
            >
              <TextField
                label="Abertura do Processo"
                variant="outlined"
                // fullWidth
                size="small"
                className={classes.inputItem}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              className="gridItem"

              // style={{ flexDirection: "column" }}
            >
              <TextField
                label="Encerramento do Processo"
                variant="outlined"
                size="small"
                // fullWidth
                className={classes.inputItem}
              />
            </Grid>
          </Grid>
          <div className={classes.btnInputs}>
            <Button
              variant="contained"
              component="span"
              className={classes.btnAdcionar}
            >
              Adcionar arquivos
            </Button>
            <Button
              variant="contained"
              component="span"
              className={classes.btnEnviaForm}
            >
              Enviar formulário
            </Button>
            <Button
              variant="contained"
              component="span"
              className={classes.btnCancelar}
            >
              Cancelar
            </Button>
          </div>
          <div className={classes.digitalization}>
            <div
              style={{ borderBottom: "1px solid #0086f8" }}
              className={classes.digitalization}
            >
              <h3>ESCANEAMENTO</h3>
            </div>
            <Button
              variant="contained"
              component="span"
              style={{
                width: "100%",
                marginBottom: "10px",
                marginTop: "20px",
                background: "#0086f8",
                color: "#FFFFFF",
              }}
            >
              Digitalizar
            </Button>
            <Button
              variant="contained"
              component="span"
              style={{ width: "100%", background: "#37E33F", color: "#FFFFFF" }}
            >
              Salvar
            </Button>
          </div>
        </div>
      </div>
    </ContainerHeader>
  );
}
