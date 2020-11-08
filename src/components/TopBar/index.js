import React from "react";
import { Link } from "react-router-dom";
import { ContainerTopbar } from "./styles";
import imgLogo from "../../images/WSLOGOdef.png";
export const TopBar = () => (
  <ContainerTopbar>
    <div
      className="containerTopbar"
      style={{ display: "flex", alignItems: "center" }}
    >
      <Link to="/main">
        <img
          src={imgLogo}
          style={{ width: "100px", height: "80px", marginLeft: "15px" }}
        ></img>
      </Link>
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
