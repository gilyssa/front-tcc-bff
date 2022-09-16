import React from "react";
import { Button, Table } from "react-bootstrap";
import * as C from "./styles";

class PesquisarCliente extends React.Component{

    constructor(props){
      super(props);

      this.state = {
        clientes:[
          {'id':1, 'nome':'Gabriel Lucio', 'email':'gabriel@gmail.com'},
          {'id':2, 'nome':'Gabriel Lucio', 'email':'gabriel@gmail.com'},
          {'id':3, 'nome':'Yohanny Soares De Moraes', 'email':'yohanny@gmail.com'}
        ]
      }
    }
componentDidMount(){
  alert("O componente foi montado!!!!")
  this.buscarClientes();
}
componentWillUnmount(){
  alert("O componente Foi desmontado!!!")
}

buscarClientes = () =>{
  fetch("htpps")
  .then(response => response.json())
  .then(dados => {

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