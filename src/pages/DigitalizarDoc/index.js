import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import TopBar from "../../components/TopBar/index";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ContainerHeader } from "./styled";
import { SelectDocs as MUISelectDocs } from "../../components/select/SelectDoc";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

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

const typesDocument = [
  "Civil",
  "Notas",
  "Reconhecimento de Firma",
  "Organização interna",
  "Departamento Pessoal",
];

const typesSubGrupo = ["Livro", "Processo"];

const typesSubGrupoIndexCivilLivro = [
  "Casamento Civil",
  "Casamento religioso com efeito civil",
  "DNV - Declaração de nascido vivo",
  "DO - Declaração de óbito",
  "DO - Declaração de natimorto editais de proclamas",
  "Nasmimento",
  "Natimorto",
  "Óbito",
];

const typesSubGrupoIndexNotasLivro = [
  "Adoção (segredo de justiça)",
  "Anulação/cancelamento",
  "Averbação de extensão",
  "Casamento civil",
  "Casamento religioso",
  "Casamento vencido",
  "Comunicação recebida",
  "Destituição do pátrio poder",
  "Divórcio",
  "Emancipação",
  "Exclusão de paternidade/maternidade ineiro teor",
  "Interdição/Tutor",
  "Opção de nacionalidade",
  "Processos impugnados",
  "Reconhecimento de paternidade/maternidade",
  "Restabelecimento da sociedade conjugal",
  "Retificação",
  "Registro maior de 12 anos",
  "Separação",
  "Somente habilitação de casamento",
];

const typesSubGrupoRecFirma = ["Ficha"];
const typesSubGrupoRecFirmaFicha = [
  "Atualização de assinatura (cartão firma)",
  "Cartão/ficha de assinatura(firma)",
];

const typesSubGrupoOrgInterna = ["Organização interna", "Controle/Relatório"];

const typesSubGrupoOrgInternaOrgInt = [
  "Autorização veiculo - transferência averbada",
  "Bloqueio e desbloqueio - cartão assinatura",
  "Contrato social",
  "Correspondencia - resposta/pedidos de certidão",
  "CRC (pedido/devolução/transferência arquivos)",
  "Documentos para lavraturar",
  "Declaração de isenção",
  "Papel apostilamento - sem efeito",
  "Casamento comunitário",
  "Procuração para lavratura",
  "Certidão recusa/declaração rasura/certidão negativa/perito",
  "Perito",
  "Recibo de devolução",
  "Requerimentos(certidão negativa/apostilamento",
  "Desarquivamento/2ª via testamento",
  "Protocolo/carga",
  "Uso de imagens- autorização",
  "Arquivo e sua organizção",
  "Inutilização de papel",
  "Certificação notarial",
];

export default function DigitalizarDoc() {
  const [types, setTypes] = useState(false);
  const [types2, setTypes2] = useState(false);
  const [types3, setTypes3] = useState(false);

  const [age, setAge] = useState("");
  const [age2, setAge2] = useState("");
  const [age3, setAge3] = useState("");

  const [listOptions2, setListOptions2] = useState([]);
  const [listOptions3, setListOptions3] = useState([]);

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
    const index = event.target.value;
    const itemSelecionado = typesDocument[index];

    switch (itemSelecionado) {
      case "Civil":
        setListOptions2(typesSubGrupo);
        break;

      case "Reconhecimento de Firma":
        setListOptions2(typesSubGrupoRecFirma);
        break;

      case "Organização interna":
        setListOptions2(typesSubGrupoOrgInterna);
        break;
    }
    setTypes2(true);
  };
  const handleChange2 = (event) => {
    setAge2(event.target.value);

    const index = event.target.value;
    const itemSelecionado = typesSubGrupo[index];

    switch (itemSelecionado) {
      case "Livro":
        setListOptions3(typesSubGrupoIndexCivilLivro);
        break;

      case "Processo":
        setListOptions3(typesSubGrupoRecFirma);
        break;

      case "Organização interna":
        setListOptions2(typesSubGrupoOrgInterna);
        break;
    }
    setTypes3(true);
  };
  const handleChange3 = (event) => {
    setAge3(event.target.value);
    setTypes3(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleOpen3 = () => {
    setOpen3(true);
  };

  function select2() {
    return (
      <>
        <Select
          // labelId="demo-controlled-open-select-label"
          // id="demo-controlled-open-select"
          open={open2}
          onClose={handleClose2}
          onOpen={handleOpen2}
          value={age2}
          onChange={handleChange2}
          style={{ width: "300px", margin: "10px" }}
        >
          {listOptions2.map((typeDoc, index) => (
            <MenuItem value={index} key={index}>
              {typeDoc}
            </MenuItem>
          ))}
        </Select>
      </>
    );
  }
  function select3() {
    return (
      <>
        <Select
          // labelId="demo-controlled-open-select-label"
          // id="demo-controlled-open-select"
          open={open3}
          onClose={handleClose3}
          onOpen={handleOpen3}
          value={age3}
          onChange={handleChange3}
          style={{ width: "300px", margin: "10px" }}
        >
          {listOptions3.map((typeDoc, index) => (
            <MenuItem value={index} key={index}>
              {typeDoc}
            </MenuItem>
          ))}
        </Select>
      </>
    );
  }

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
              <Select
                labelId="demo-controlled-open-select-label"
                // id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={age}
                onChange={handleChange}
                style={{ width: "300px", margin: "10px" }}
              >
                {typesDocument.map((typeDoc, index) => (
                  <MenuItem value={index} key={index}>
                    {typeDoc}
                  </MenuItem>
                ))}
              </Select>
              {types2 && select2()}
              {types3 && select3()}
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
