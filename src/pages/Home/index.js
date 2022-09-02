import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>Home</C.Title>
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
    </C.Container>
  );
};

export default Home;
