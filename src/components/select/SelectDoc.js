import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const typesDocument = [
  "Certidão de casamento",
  "Reconhecimento de firma",
  "Certidão de Nascimento",
  "Preenchimento de Recibo",
  "Atestado de óbito",
];
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));
function getStyles(typesDocument, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(typesDocument) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export function SelectDocs() {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <InputLabel id="demo-mutiple-name-label" style={{ marginLeft: "15px" }}>
        Selecione o arquivo
      </InputLabel>
      <Select
        labelId="demo-mutiple-name-label"
        id="demo-mutiple-name"
        multiple
        value={personName}
        onChange={handleChange}
        input={<Input />}
        MenuProps={MenuProps}
        style={{ width: "90px", marginLeft: "15px" }}
      >
        {typesDocument.map((name) => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, personName, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}
