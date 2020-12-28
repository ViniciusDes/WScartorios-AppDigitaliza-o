import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ContainerGrid } from "./styles";
import iconPencil from "../../images/iconPencil.jpeg";
import iconDownload from "../../images/iconDownload.jpeg";
import iconSearch from "../../images/iconSearch.jpeg";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(
  id,
  data,
  livro,
  folhaCnpj,
  termo,
  ato,
  tipodeAto,
  atividade,
  diligencia
) {
  return {
    id,
    data,
    livro,
    folhaCnpj,
    termo,
    ato,
    tipodeAto,
    atividade,
    diligencia,
  };
}

const rows = [
  createData(
    1,
    "12/04/2020",
    22,
    "706.520.022-19",
    11,
    "Nascimento",
    "Atos Publicos",
    "Livros",
    "Civil"
  ),
  createData(
    1,
    "12/04/2020",
    22,
    "706.520.022-19",
    11,
    "Divorcio",
    "Atos Publicos",
    "Processo",
    "Notas"
  ),
  createData(
    1,
    "12/04/2020",
    22,
    "706.520.022-19",
    11,
    "Nascimento",
    "Atos Publicos",
    "Livros",
    "Civil"
  ),
  createData(
    1,
    "12/04/2020",
    22,
    "706.520.022-19",
    11,
    "Divorcio",
    "Atos Publicos",
    "Processo",
    "Notas"
  ),
  createData(
    1,
    "12/04/2020",
    22,
    "706.520.022-19",
    11,
    "Nascimento",
    "Atos Publicos",
    "Livros",
    "Civil"
  ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <ContainerGrid className="containerGrid">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">Folha/CNPJ</StyledTableCell>
              <StyledTableCell align="right">Data</StyledTableCell>
              <StyledTableCell align="right">Livro</StyledTableCell>
              <StyledTableCell align="right">Termo</StyledTableCell>
              <StyledTableCell align="right">Ato</StyledTableCell>
              <StyledTableCell align="right">Tipo de Ato</StyledTableCell>
              <StyledTableCell align="right">Atividade</StyledTableCell>
              <StyledTableCell align="right">Diligência</StyledTableCell>
              <StyledTableCell align="right">
                Baixar/Visualizar/Editar
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.folhaCnpj}</StyledTableCell>
                <StyledTableCell align="right">{row.data}</StyledTableCell>
                <StyledTableCell align="right">{row.termo}</StyledTableCell>
                <StyledTableCell align="right">{row.livro}</StyledTableCell>
                <StyledTableCell align="right">{row.ato}</StyledTableCell>
                <StyledTableCell align="right">{row.tipodeAto}</StyledTableCell>
                <StyledTableCell align="right">{row.atividade}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.diligencia}
                </StyledTableCell>
                <StyledTableCell align="right" style={{ width: "20px" }}>
                  {<img src={iconDownload} />}
                  {<img src={iconSearch} />}
                  {<img src={iconPencil} />}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ContainerGrid>
  );
}
