import React from "react";
import { Button, Table } from "react-bootstrap";
import {Form} from "react-bootstrap";
import { useState } from 'react';

class ListarProcedimentos extends React.Component{

    constructor (props){
        super(props);

        this.state= {
            procedimentos: [],
            nome: 'gabr'
        }
    }
    componentDidMount(){
        this.ListarProcedimentos();
      }
      componentWillUnmount(){
        
      }
      ListarProcedimentos = () =>{
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "token":JSON.parse(localStorage.getItem("signin")).signin.token,
            "usuario_id": JSON.parse(localStorage.getItem("signin")).signin.usuario,
      
          }
        };
        fetch("https://react-api-bff.herokuapp.com/api/procedimentos?",options)
      
        .then(response => response.json())
        .then(dados => {
          console.log(dados);
          this.setState({procedimentos: dados})
          
        });
    }
    carregarProcedimento = (id) =>{
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              "token":JSON.parse(localStorage.getItem("signin")).signin.token,
              "usuario_id": JSON.parse(localStorage.getItem("signin")).signin.usuario,
            }
          };
          fetch("https://react-api-bff.herokuapp.com/api/procedimentos?"+id,options)
        
          .then(response => response.json())
          .then(procedimentos => {
            this.setState({
                id: procedimentos.id,
                nome: procedimentos.nome
            })
            
          });
    }
    
    atualizaNome = (e) =>{
        this.setState({
            nome: e.target.value
        })
    }
    submit = () =>{{
        const procedimento = {
            nome: this.state.nome
        }
    }}
    render(){
        return(
            <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Procedimento</Form.Label>
                    <Form.Control type="text" placeholder="Procedimento" value={this.state.nome} onChange={this.atualizaNome}/>
                </Form.Group>

                <Button variant="primary" onClick={this.submit}>
                    Salvar
                </Button>
            </Form>

            
                    <br></br>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Procedimento</th>
                        <th>OPÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    {
                this.state.procedimentos.map((procedimentos) =>
                <tr>
                    <td>{procedimentos.nome}</td>
                    <td><Button variant="secondary" onClick={()=>this.carregarProcedimento(procedimentos.id)}>Atualizar</Button></td>
                </tr>
                )
                }
                </tbody>
            </Table>
            </div>
        )
    }
}

export default ListarProcedimentos;