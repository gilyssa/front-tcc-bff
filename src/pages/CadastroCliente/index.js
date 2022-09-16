import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import {  useNavigate } from "react-router-dom";

import logo1 from "../../img/logo1.png";
import Signin from "../Signin";


const CadastroCliente = () => {
    const [nome, setNome] = useState(""); //ok
    const [email, setEmail] = useState("");//ok
    const [senha, setSenha] = useState("");//okk
    const [telefone, setTelefone] = useState(""); //ok
    const [cpf, setCpf] = useState("");//ok
    const [error, setError] = useState("");
    const [aniversario, setAniversario] = useState("");//ok
    const [Tipo_Sanguineo, setTipo_Sanguineo] = useState("");//ok
    const navigate = useNavigate();
  
    const objetos = {
      nome: nome,
      email: email,
      senha: senha,
      telefone:telefone,
      cpf:cpf,
      aniversario:aniversario,
      Tipo_Sanguineo:Tipo_Sanguineo,
    };
  
    async function handleSubmit(event) {
      event.preventDefault();
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "token":localStorage.getItem("signin"),
          
        },
        body: JSON.stringify(objetos),
      };
  
      return fetch(
        'https://react-api-bff.herokuapp.com/api/clientes',
        options,
      )  
        .then((response) => {
          const login = localStorage.getItem('signin');
          console.log(typeof login);
          console.log(login.token);
          localStorage.setItem("cadastro", JSON.stringify({ objetos }));
          return response.json();
          
        });
      
  
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
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          <C.labelError>{error}</C.labelError>
          <Button Text="Cadastrar Cliente" onClick={handleSubmit} />

        </C.Content>
      </C.Container>
    );
  };
  
  export default CadastroCliente;
  