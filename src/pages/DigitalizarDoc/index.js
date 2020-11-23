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
    // padding: "10px",
    margin: "0 auto",
    width: "81%",
  },
  btns: {
    background: "#050505",
    marginLeft: "10px",
    color: "#FFFFFF",
  },
  containerInputs: {
    // border: "1px solid black",
    margin: "20px auto",
    flexWrap: "wrap",
    width: "90%",
    display: "flex",
    justifyContent: "center",
  },
  inputItem: {
    padding: "10px",
  },
  topBarAux: {
    display: "flex",
    alignItems: "center",
  },
  btnInputs: {
    // marginLeft: "10px",
    color: "#ffffff",
    margin: "20px 5px 5px 0",
    width: "90%",
  },
  btnAdcionar: {
    background: "#37E33F",
    color: "#ffffff",
    margin: "2px",
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
    width: "90%",
  },
  gridItem: {
    flexWrap: "wrap",
    padding: "0",
    display: "grid",
    gridTemplateColumns: "2fr 2fr 2fr",
    margin: "3px",
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

const typesSubGrupoOrgInternContRelatorio = [
  "Correspondência - relatório",
  "Agendamento casamento civil - horários - relatório",
  "Ocorrência guardas - relatório",
  "Protocolo CRI - despachante - relatório",
  "Retificação - relatório",
  "Controle de visita mensal",
  "Controle de visitação mensal",
  "Controle visitação casamento",
  "Livros - relatório",
  "Suposto pai - relatorio",
];

const typesSubGrupoNotasProces = [
  "Arquivo morto",
  "Divórcio - processo notas",
  "Inventário - processo notas",
  "Restabelecimento da sociedade conjugal (reconciliação) - processo notas",
  "Separação - processo notas",
  "Sobrepartilha - processo notas",
  "Testamento - processo notas",
];

const typesSubGrupoDepPessoal = ["Pessoal/financeiro", "Estatística"];

const typesSubGrupoDepPessoalFinanceiro = [
  "Avaliação de conhecimento",
  "Certidão negativa",
  "Comunicação propostos",
  "Deposito prévio",
  "Corresponfência - DP",
  "Diário auxiliar",
  "Folha de pagamento",
  "Ipasgo",
  "Nomeação prepostos",
  "Pessoas irregulares receita e despesa - fotocópia",
  "Registro empregados",
  "Taxa judiciária",
  "Terceirização guarda arquivo",
  "Tributos",
  "PPRA/PCMSO",
  "Inspesão da corregedoria",
];

const typesSubGrupoDepPessoalEstatistica = [
  "CENSEC",
  "CNJ",
  "Comunicação baixa documentos - CGJ-GO",
  "CRC - SIRC",
  "DOI",
  "IBGE - Casamento homoafetivo",
  "IBGE - Civil e notas",
  "Ministro exercito",
  "Pai presente - nascimento sem pai",
  "Policia federal",
  "SEFAZ",
  "TRE",
  "SINTER",
  "SSP",
  "COAF",
];

export default function DigitalizarDoc() {
  const [types, setTypes] = useState(false);
  const [types2, setTypes2] = useState(false);
  const [types3, setTypes3] = useState(false);

  const [age, setAge] = useState("");
  const [age2, setAge2] = useState("");
  const [age3, setAge3] = useState("");

  const [itemOldSelected, setitemOldSelected] = useState();

  const [listOptions2, setListOptions2] = useState([]);
  const [listOptions3, setListOptions3] = useState([]);

  const [openInputs, setOpenInputs] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [openInputsNomeContraente, setopenInputsNomeContraente] = useState(
    false
  );

  const handleChange = (event) => {
    setAge(event.target.value);
    setAge2("");
    setAge3("");
    const index = event.target.value;
    const itemSelecionado = typesDocument[index];
    setitemOldSelected(itemSelecionado);
    console.log(itemSelecionado);

    switch (itemSelecionado) {
      case "Civil":
        setListOptions2(typesSubGrupo);
        break;
      case "Notas":
        setListOptions2(typesSubGrupo);
        break;

      case "Reconhecimento de Firma":
        setListOptions2(typesSubGrupoRecFirma);
        break;

      case "Organização interna":
        setListOptions2(typesSubGrupoOrgInterna);
        break;

      case "Departamento Pessoal":
        setListOptions2(typesSubGrupoDepPessoal);
        break;
    }
    setTypes2(true);
  };
  const handleChange2 = (event) => {
    setAge2(event.target.value);
    setAge3("");
    setListOptions3([]);
    const index = event.target.value;
    const itemSelecionado = listOptions2[index];
    // const itemSelecionado = typesSubGrupo[index];

    switch (itemSelecionado) {
      case "Livro":
        if (itemOldSelected == "Notas") {
          setListOptions3(typesSubGrupoIndexNotasLivro);
        } else {
          setListOptions3(typesSubGrupoIndexCivilLivro);
        }
        break;

      case "Processo":
        if (itemOldSelected == "Notas") {
          setListOptions3(typesSubGrupoNotasProces);
        } else {
          setListOptions3(typesSubGrupoIndexNotasLivro);
        }
        break;

      case "Ficha":
        setListOptions3(typesSubGrupoRecFirmaFicha);
        break;

      case "Organização interna":
        setListOptions3(typesSubGrupoOrgInternaOrgInt);
        break;

      case "Controle/Relatório":
        setListOptions3(typesSubGrupoOrgInternContRelatorio);
        break;

      case "Pessoal/financeiro":
        setListOptions3(typesSubGrupoDepPessoalFinanceiro);
        break;

      case "Estatística":
        setListOptions3(typesSubGrupoDepPessoalEstatistica);
        break;
    }
    setTypes3(true);
  };
  const handleChange3 = (event) => {
    setAge3(event.target.value);
    // document.removeChild(select2);
    setOpenInputs(true);
    setTypes3(true);

    if (event.target.value === "Casamento vencido") {
      setopenInputsNomeContraente(true);
    }
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
          style={{
            width: "300px",
            margin: "10px 10px 10px 0px",
            marginLeft: "10px",
          }}
          id="select2"
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

          open={open3}
          onClose={handleClose3}
          onOpen={handleOpen3}
          value={age3}
          onChange={handleChange3}
          style={{
            width: "300px",
            margin: "10px 10px 10px 0px",
            marginLeft: "10px",
          }}
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
          <div className={classes.topBarAux} style={{ display: "flex" }}>
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
            variant="contained"
            component="span"
            className={classes.btns}
            id="btnSearch"
          >
            Pesquisar
          </Button>
          {/* //iteeeens */}
        </div>

        <div className={classes.containerInputs}>
          <div className="containerSelect">
            <Grid
              item
              xs={12}
              sm={4}
              className="gridItem"
              style={{
                // display: "flex",
                flexWrap: "wrap",
                width: "900px !important",
              }}
              id="selectContainer"

              // style={{ flexDirection: "column" }}
            >
              <Select
                labelId="demo-controlled-open-select-label"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={age}
                onChange={handleChange}
                style={{ width: "300px", margin: "10px 10px 10px 0px" }}
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
          </div>
          {openInputs && (
            <>
              <Grid container spacing={2} className="gridContainer">
                <Grid
                  item
                  xs={12}
                  sm={4}
                  className="gridItem"
                  style={{ margin: "0 0 15px 0" }}
                >
                  <TextField
                    label="Abertura do Processo"
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
                    label="Encerramento do Processo"
                    variant="outlined"
                    size="small"
                    fullWidth
                    className={classes.inputItem}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  className="gridItem"
                  // style={{ minWidth: "416px" }}
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
              </Grid>

              <Grid container spacing={2} className="gridContainer">
                <Grid
                  item
                  xs={12}
                  sm={4}
                  className="gridItem"
                  style={{ margin: "0 0 15px 0" }}
                >
                  <TextField
                    label="Tipo de Ato"
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
                  // style={{ minWidth: "416px" }}
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
                  // style={{ minWidth: "416px" }}
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

              <Grid
                container
                spacing={2}
                className="gridContainer"
                style={{ flexWrap: "wrap" }}
              >
                {setopenInputsNomeContraente && (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    className="gridItem"

                    // style={{ flexDirection: "column" }}
                  >
                    <TextField
                      label="Nome Primeiro Contraente"
                      variant="outlined"
                      fullWidth
                      size="small"
                      className={classes.inputItem}
                    />
                  </Grid>
                )}

                {setopenInputsNomeContraente && (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    className="gridItem"

                    // style={{ flexDirection: "column" }}
                  >
                    <TextField
                      label="Nome Segundo Contraente"
                      variant="outlined"
                      fullWidth
                      size="small"
                      className={classes.inputItem}
                    />
                  </Grid>
                )}
              </Grid>
              <Grid
                container
                spacing={2}
                className="gridContainer"
                style={{ flexWrap: "wrap" }}
              >
                <Grid
                  item
                  xs={12}
                  sm={4}
                  className="gridItem"
                  // style={{ minWidth: "416px" }}
                  // style={{ flexDirection: "column" }}
                ></Grid>
              </Grid>
            </>
          )}

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
              style={{ borderBottom: "1px solid #0086f8", width: "100%" }}
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
