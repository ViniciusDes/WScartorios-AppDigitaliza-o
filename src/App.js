import React, { Fragment } from "react";
import GlobalStyle from "./global/global";
import Main from "./pages/main/index";
import Login from "./pages/Login/index";
import TopBar from "./components/TopBar/index";
import { BrowserRouter } from "react-router-dom";
import Routes from "./router/index";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <div className="App">
          <GlobalStyle />
          <Routes />

          {/* <Login /> */}
        </div>
      </BrowserRouter>
    </Fragment>
  );
}
//teste comentario
export default App;
