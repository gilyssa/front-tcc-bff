import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";

import * as C from "./styles";
import logo1 from "../../img/logo1.png"
const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
    <C.Content>
    <img  src={logo1 }/>
      <Button Text="Cadastrar Cliente" onClick={() => [navigate("/cadastroCliente")]}>
        CadastrarCliente 
      </Button>
      <Button Text="Pesquisar Cliente" onClick={() => [navigate("/signup")]}>
        PesquisarCliente 
      </Button>
      <Button Text="Ficha Avaliativa" onClick={() => [navigate("/signup")]}>
        FichaCliente 
      </Button>

      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Content>
    </C.Container>
  );
};



export default Home;
