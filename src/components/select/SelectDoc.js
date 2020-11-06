import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
const typesSubGrupo = ["Livro", "Processo"];

export function SelectDocs(props) {
  const classes = useStyles();
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
    props.setType();
  };

  const handleClose = () => {
    setOpen(false);

    if (props.item === "1") {
      props.setTypeFalse();
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        Selecione:
      </Button>
      <FormControl className={classes.formControl}>
        {/* <InputLabel id="demo-controlled-open-select-label">t</InputLabel> */}
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          {props.typesDocument.map((typeDoc, index) => (
            <MenuItem value={index} key={index}>
              {typeDoc}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
