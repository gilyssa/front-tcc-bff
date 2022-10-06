import React from "react";
import { Button, Table } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useState } from "react";
import TableScrollbar from "react-table-scrollbar";
import * as C from "./styles";

class ListarProcedimentos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      procedimentos: [],
      nome: "gabr",
    };
  }
  componentDidMount() {
    this.ListarProcedimentos();
  }
  componentWillUnmount() {}
  ListarProcedimentos = () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: JSON.parse(localStorage.getItem("signin")).signin.token,
        usuario_id: JSON.parse(localStorage.getItem("signin")).signin.usuario,
      },
    };
    fetch("https://react-api-bff.herokuapp.com/api/procedimentos?", options)
      .then((response) => response.json())
      .then((dados) => {
        console.log(dados);
        this.setState({ procedimentos: dados });
      });
  };
  carregarProcedimento = (id) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: JSON.parse(localStorage.getItem("signin")).signin.token,
        usuario_id: JSON.parse(localStorage.getItem("signin")).signin.usuario,
      },
    };
    fetch(
      "https://react-api-bff.herokuapp.com/api/procedimentos?" + id,
      options
    )
      .then((response) => response.json())
      .then((procedimentos) => {
        this.setState({
          id: procedimentos.id,
          nome: procedimentos.nome,
        });
      });
  };

  atualizaNome = (e) => {
    this.setState({
      nome: e.target.value,
    });
  };
  submit = () => {
    {
      const procedimento = {
        nome: this.state.nome,
      };
    }
  };
  render() {
    return (
      <div>
        <C.Container>
          <C.Gabriel>
            <label>teste</label>
            <label>teste</label>
          </C.Gabriel>
          <C.Content>
            <C.Gabriel>
              <TableScrollbar rows={5} height="200px">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <td>NOME</td>
                      <td>EMAIL</td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.procedimentos.map((procedimentos) => (
                      <tr>
                        <td>{procedimentos.nome}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </TableScrollbar>
            </C.Gabriel>
          </C.Content>
        </C.Container>
      </div>
    );
  }
}

export default ListarProcedimentos;
