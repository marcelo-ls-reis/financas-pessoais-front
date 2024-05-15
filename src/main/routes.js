import React from "react";
import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../views/home";

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Home path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro-usuarios" component={CadastroUsuario} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
