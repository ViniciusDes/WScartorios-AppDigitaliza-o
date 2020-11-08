import React from "react";
import { Link } from "react-router-dom";
import { ContainerTopbar } from "./styles";

export const TopBar = () => (
  <ContainerTopbar>
    <div className="containerTopbar">
      <Link to="/main">acesso a main</Link>
      <ul>
        <li>Administração</li>
        <li>Cartório</li>
        <li>Tarefas</li>
        <li>Fluxo de trabalho</li>
        <li>Relatórios</li>
        <li>Sindicato</li>
      </ul>
    </div>
  </ContainerTopbar>
);

export default TopBar;
