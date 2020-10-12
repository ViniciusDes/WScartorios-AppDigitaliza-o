import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login/index";
import { TopBar } from "../components/TopBar/index";
import Main from "../pages/main/index";
import PesquisarDocsDig from "../pages/PesquisarDocsDig/index";
import DigitalizarDoc from "../pages/DigitalizarDoc/index";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/TopBar/" component={Main} />
    <Route path="/PesquisarDocsDig/" component={PesquisarDocsDig} />
    <Route path="/PageDigitalizar/" component={DigitalizarDoc} />
  </Switch>
);

export default Routes;
