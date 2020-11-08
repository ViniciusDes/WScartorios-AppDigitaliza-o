import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, FormLogin, linhaVertical } from "./styles";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import DivisorPng from "../../images/WSLOGOdef.png";
import { Link } from "react-router-dom";
import TopBar from "../../components/TopBar/index";

const useStyles = makeStyles((theme) => ({
  back: {
    background: "transparent",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));
const useStylesEmail = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Login() {
  const classeInputEmail = useStylesEmail();
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container id="container">
      <FormLogin>
        <Grid container spacing={2} className="gridContainer">
          <Grid
            item
            xs={12}
            sm={6}
            className="gridItem"
            id="containerCompany"
            style={{ flexDirection: "column" }}
          >
            {/* <h1>WSCartório</h1> */}
            <img src={DivisorPng} />
          </Grid>

          {/* <Grid item xs={12} sm={2} className="gridItem">
            <div id="imgFake">
              <img src={DivisorPng} />
            </div>
          </Grid> */}

          <Grid item xs={12} sm={6} className="gridItem" id="containerLogin">
            <div className="itemsLogin">
              <div className="inputContainer">
                <p>Entre com seu email</p>
                <Input
                  className="inputs"
                  id="input-with-icon-adornment"
                  placeholder="Email"
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                />
              </div>

              <div className="inputContainer">
                <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  className="inputs"
                  placeholder="Senha"
                  onChange={handleChange("password")}
                  startAdornment={
                    <div className="iconLock">
                      <LockIcon />
                    </div>
                  }
                  endAdornment={
                    <InputAdornment
                      position="end"
                      className={classes.back}
                      style={{ width: "100px" }}
                    >
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        style={{ marginLeft: "30px" }}
                        place
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>
              <div id="btnLogin">
                <Button variant="outlined" color="default">
                  Login
                </Button>
              </div>

              <a href="#">Esqueceu sua senha </a>
              <Link to={`/main`}>Acesso</Link>
            </div>
          </Grid>
        </Grid>
      </FormLogin>
    </Container>
  );
}
