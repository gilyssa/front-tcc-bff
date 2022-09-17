import React from "react";
import { Button, Table } from "react-bootstrap";
import * as C from "./styles";

class PesquisarCliente extends React.Component{

    constructor(props){
      super(props);

      this.state = {
        clientes:[]
      }
    }
componentDidMount(){
  alert("Buscando lista de usuários")
  this.buscarClientes();
}
componentWillUnmount(){
  alert("O componente Foi desmontado!!!")
}

buscarClientes = () =>{
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "token":JSON.parse(localStorage.getItem("signin")).signin.token,

    }
  };

  fetch("https://react-api-bff.herokuapp.com/api/clientes?",options)

  .then(response => response.json())
  .then(dados => {
    console.log(dados);
    this.setState({clientes: dados})
    
  })
}
deletarClientes = (id) => {
  fetch("htpps"+id,{method: 'DELETE'})
  .then(response =>{
    if(response.ok){
      this.buscarClientes();
    }
  } )
  
}
    render(){
      return(
        <C.Container>
        <C.Gabriel>
        <label>teste</label>
        <label>teste</label>
        </C.Gabriel>
        <C.Content>
        <Table striped bordered hover>
          <thead>
            <tr>
              <td>NOME</td>
              <td>EMAIL</td>
              <td>OPÇÕES</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.clientes.map((cliente) =>
              <tr>
                <td>{cliente.nome}</td>
                <td>{cliente.email}</td>
                <td>Atualizar <Button variant="danger" onClick={()=>this.deletarClientes(cliente.id)}>Excluir</Button></td>
            </tr>
              )
            }
             
              
          </tbody>
        </Table>

        </C.Content>
        </C.Container>
      );
    }
}
export default PesquisarCliente;