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

function createData(id, data, livro, folhaCnpj, termo) {
  return { id, data, livro, folhaCnpj, termo };
}

const rows = [
  createData(1, "12/04/2020", 22, "706.520.022-19", 11),
  createData(2, "21/04/2020", 22, "706.520.022-19", 11),
  createData(3, "24/07/2020", 22, "706.520.022-19", 11),
  createData(4, "31/01/2020", 22, "706.520.022-19", 11),
  createData(5, "12/06/2020", 22, "706.520.022-19", 11),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <ContainerGrid>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">Folha/CNPJ</StyledTableCell>
              <StyledTableCell align="right">Data</StyledTableCell>
              <StyledTableCell align="right">Livro</StyledTableCell>
              <StyledTableCell align="right">Termo</StyledTableCell>
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
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ContainerGrid>
  );
}
