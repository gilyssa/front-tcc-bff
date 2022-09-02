import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const CadastroCliente = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cpf, setCpf] = useState("");
    const [error, setError] = useState("");
    const [aniversario, setAniversario] = useState("");
    const [TipoSanguineo, setTipoSanguineo] = useState("");
    const navigate = useNavigate();
  
    const { singCadastro } = useAuth();
  
    const handleCadastroUser = () => {
      if (!email | !emailConf | !senha| !telefone | !cpf| !aniversario| !nome | !TipoSanguineo ) {
        setError("Preencha todos os campos");
        return;
      } else if (email !== emailConf) {
        setError("Os e-mails não são iguais");
        return;
      }
  
      const res = singCadastro(email, senha,telefone,cpf, aniversario, nome,TipoSanguineo);
  
      if (res) {
        setError(res);
        return;
      }
  
      alert("Usuário cadatrado com sucesso!");
      navigate("/");
    };
  
    return (
      <C.Container>
        <C.Label>SALÃO DE BELEZA IMG</C.Label>
        <C.Content>
        <Input
            type="name"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => [setNome(e.target.value), setError("")]}
          />
          <Input
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <Input
            type="email"
            placeholder="Confirme seu E-mail"
            value={emailConf}
            onChange={(e) => [setEmailConf(e.target.value), setError("")]}
          />
          <Input
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          <Input
            type="number"
            placeholder="Digite seu telefone "
            value={telefone}
            onChange={(e) => [setTelefone(e.target.value), setError("")]}
          />
          <Input
            type="number"
            placeholder="Digite seu CPF "
            value={cpf}
            onChange={(e) => [setCpf(e.target.value), setError("")]}
          />
          <Input
            type="date"
            placeholder="Digite sua Data de aniversário"
            value={aniversario}
            onChange={(e) => [setAniversario(e.target.value), setError("")]}
          />
          <Input
            type="text"
            placeholder="Digite seu tipo sanguineo"
            value={TipoSanguineo}
            onChange={(e) => [setTipoSanguineo(e.target.value), setError("")]}
          />
          
          <C.labelError>{error}</C.labelError>
          <Button Text="Cadastrar" onClick={() => [navigate("/cadastroCliente")]}/> 
          
          
      
        </C.Content>
      </C.Container>
    );
  };
  
  export default CadastroCliente;
  