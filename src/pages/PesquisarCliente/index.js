import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const PesquisarCliente = () => {
    
    const navigate = useNavigate();
  
    

    return (
      <C.Container>
        
        <C.Label>PESQUISAR CLIENTES</C.Label>
        <C.Contentt>
        <Input
            
            placeholder="Nome Do Cliente"
          />
         
        <C.Content className = 'xablau'>
        <Input
            
            placeholder="Nome Do Cliente"
          />
          <Input
            
            placeholder="Nome Do Cliente"
          />
          <Input
            
            placeholder="Nome Do Cliente"
          />
          <Input
            
            placeholder="Nome Do Cliente"
          />
          <Input
            
            placeholder="Nome Do Cliente"
          />
          <Input
            
            placeholder="Nome Do Cliente"
          />
          <Input
            
            placeholder="Nome Do Cliente"
          />
        </C.Content>

          <Button Text="PESQUISAR" onClick={() => []}/> 

        </C.Contentt>
      </C.Container>
    );
  };
  
  export default PesquisarCliente;
  