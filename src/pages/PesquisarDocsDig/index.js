import React, { useState, useEffect } from "react";
import { TopBar } from "../../components/TopBar/index";
import { ContainerDigitalizar, Header } from "./styles";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import CustomizedTables from "../../components/grid/index";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },

  teste: {
    height: "200px",
  },
}));

export default function PesquisarDocsDig() {
  const classes = useStyles();
  const [date, setDate] = useState();
  const [startDate, setStartDate] = useState(false);

  useEffect(() => {
    updateDate();
  }, []);

  const updateDate = () => {
    const now = new Date();
    let data = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    setDate(data);
    setStartDate(true);
  };

  return (
    <ContainerDigitalizar>
      <TopBar />

      <div className="containerItens">
        <Header>
          <a onClick={() => window.location.reload()}>FILTROS</a>
        </Header>
        <div className="inputsSearch">
          <Grid container spacing={2} className="gridContainer">
            <div id="containerAll">
              <div id="containerInputs">
                <div style={{ display: "block" }}>
                  <Grid item xs={12} sm={12} className="gridItem">
                    <div className="inputItem">
                      <TextField
                        label="Termo/Parte"
                        variant="outlined"
                        fullWidth
                        size="small"
                      />
                    </div>
                  </Grid>
                  {/* <Grid item xs={12} sm={12} className="gridItem">
                  <div className="inputItem">
                    <TextField
                      
                      label="Pesquisa Geral"
                      variant="outlined"
                      fullWidth
                    />
                  </div>
                </Grid> */}
                  <Grid item xs={12} sm={12} className="gridItem">
                    <div className="inputItem">
                      {startDate && (
                        <TextField
                          id="date"
                          label="Data"
                          type="date"
                          defaultValue={date}
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          // style={{ paddingLeft: "10px", width: "97%" }}
                        />
                      )}
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} className="gridItem">
                    <div className="inputItem">
                      <TextField
                        label="Termo/Parte"
                        variant="outlined"
                        fullWidth
                        size="small"
                      />
                    </div>
                  </Grid>
                </div>
                <div style={{ display: "block" }}>
                  <Grid item xs={12} sm={12} className="gridItem">
                    <div className="inputItem">
                      <TextField
                        label="Livro"
                        variant="outlined"
                        fullWidth
                        size="small"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} className="gridItem">
                    <div className="inputItem">
                      <TextField
                        label="Ato"
                        variant="outlined"
                        fullWidth
                        size="small"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} className="gridItem">
                    <div className="inputItem">
                      <TextField
                        label="Ficha"
                        variant="outlined"
                        fullWidth
                        size="small"
                      />
                    </div>
                  </Grid>
                </div>

                <div style={{ display: "block" }}>
                  <Grid item xs={12} sm={12} className="gridItem">
                    <div className="inputItem">
                      <TextField
                        label="Protocolo/oficio"
                        variant="outlined"
                        fullWidth
                        size="small"
                      />
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={12} className="gridItem">
                    <div className="inputItem">
                      <TextField
                        label="Tipo de Ato"
                        variant="outlined"
                        fullWidth
                        size="small"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} className="gridItem">
                    <div className="inputItem">
                      <TextField
                        label="Origem"
                        variant="outlined"
                        fullWidth
                        size="small"
                      />
                    </div>
                  </Grid>
                  {/* <Grid item xs={12} sm={12} className="gridItem">
                    <div className="inputItem">
                      <TextField
                        
                        label="Suporte"
                        variant="outlined"
                        fullWidth
                        size="small"
                      />
                    </div>
                  </Grid> */}
                </div>
                <div style={{ display: "block" }}>
                  <Grid item xs={12} sm={12} className="gridItem">
                    <div className="inputItem">
                      <TextField
                        label="Cartório"
                        variant="outlined"
                        fullWidth
                        size="small"
                      />
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={12} className="gridItem">
                    <div className="inputItem">
                      <TextField
                        label="Folha/CNPJ/CPF"
                        variant="outlined"
                        fullWidth
                        size="small"
                      />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} className="gridItem">
                    <div className="inputItem">
                      <TextField
                        label="Protocolo Escriba Casamento"
                        variant="outlined"
                        fullWidth
                        size="small"
                      />
                    </div>
                  </Grid>
                  {/* <Grid item xs={12} sm={12} className="gridItem">
                  <div className="inputItem">
                    <TextField
                      
                      label="Termo/Parte"
                      variant="outlined"
                      fullWidth
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} className="gridItem">
                  <div className="inputItem">
                    <TextField
                      
                      label="Termo/Parte"
                      variant="outlined"
                      fullWidth
                    />
                  </div>
                </Grid> */}
                </div>
              </div>
              <div id="bottomBar">
                <CustomizedTables />
              </div>
            </div>
          </Grid>
        </div>
      </div>
    </ContainerDigitalizar>
  );
}
