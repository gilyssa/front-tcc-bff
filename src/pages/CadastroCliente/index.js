import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo1 from "../../img/logo1.png";

const CadastroCliente = () => {
    const [nome, setNome] = useState(""); //ok
    const [email, setEmail] = useState("");//ok
    const [emailConf, setEmailConf] = useState("");//okk
    const [senha, setSenha] = useState("");//okk
    const [telefone, setTelefone] = useState(""); //ok
    const [cpf, setCpf] = useState("");//ok
    const [error, setError] = useState("");
    const [aniversario, setAniversario] = useState("");//ok
    const [Tipo_Sanguineo, setTipo_Sanguineo] = useState("");//ok
    const navigate = useNavigate();
  
    const { singCadastro } = useAuth();
  
    const handleCadastroUser = () => {
      if (!email | !emailConf | !senha| !telefone | !cpf| !aniversario| !nome | !Tipo_Sanguineo ) {
        setError("Preencha todos os campos");
        return;
      } else if (email !== emailConf) {
        setError("Os e-mails não são iguais");
        return;
      }
  
      const res = singCadastro(email, senha,telefone,cpf, aniversario, nome,Tipo_Sanguineo);
  
      if (res) {
        setError(res);
        return;
      }
  
      alert("Usuário cadatrado com sucesso!");
      navigate("/");
    };
  
    return (
      <C.Container>
        
        <C.Content>
        <img  src={logo1 }/>  
        <Input
            type="name"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => [setNome(e.target.value), setError("")]}
          />
          <Input
            type="number"
            placeholder="Digite seu CPF "
            value={cpf}
            onChange={(e) => [setCpf(e.target.value), setError("")]}
          />
          <Input
            type="text"
            placeholder="Digite seu tipo sanguineo"
            value={Tipo_Sanguineo}
            onChange={(e) => [setTipo_Sanguineo(e.target.value), setError("")]}
          />
          <Input
            type="date"
            placeholder="Digite sua Data de aniversário"
            value={aniversario}
            onChange={(e) => [setAniversario(e.target.value), setError("")]}
          />
           <Input
            type="number"
            placeholder="Digite seu telefone "
            value={telefone}
            onChange={(e) => [setTelefone(e.target.value), setError("")]}
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
          <C.labelError>{error}</C.labelError>
          <Button Text="Cadastrar" onClick={() => [navigate("/home")]}/> 

        </C.Content>
      </C.Container>
    );
  };
  
  export default CadastroCliente;
  