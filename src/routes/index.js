import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import CadastroCliente from "../pages/CadastroCliente";
import PesquisarCliente from "../pages/PesquisarCliente";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    // Aqui estamos criando a parte das rotas do aplicativo e redirecionando-as.
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route exact path="/cadastroCliente" element={<Private Item={CadastroCliente} />} />
          <Route exact path="/pesquisarCliente" element={<Private Item={PesquisarCliente} />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
