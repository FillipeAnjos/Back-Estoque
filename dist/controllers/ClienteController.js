"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClienteController = void 0;

var _ClienteService = require("../services/ClienteService");

class ClienteController {
  async cadastrarCliente(request, response) {
    const {
      nome,
      cpf,
      nascimento,
      genero,
      civil,
      uf,
      rg,
      endereco,
      numero,
      tel,
      cel,
      email
    } = request.body.param;
    const clienteService = new _ClienteService.ClienteService();
    const cliente = clienteService.cadastrarCliente({
      nome,
      cpf,
      nascimento,
      genero,
      civil,
      uf,
      rg,
      endereco,
      numero,
      tel,
      cel,
      email
    });
    return cliente;
  }

  async listarClientes() {
    const clienteService = new _ClienteService.ClienteService();
    const clientes = clienteService.listarClientes();
    return clientes;
  }

  async listarClientesParam(request, response) {
    const {
      filtro,
      dados
    } = request.body.param;
    const clienteService = new _ClienteService.ClienteService();
    const clientes = clienteService.listarClientesParam({
      filtro,
      dados
    });
    return clientes;
  }

  async excluirCliente(request, response) {
    const {
      id
    } = request.body;
    const clienteService = new _ClienteService.ClienteService();
    const excluirCliente = clienteService.excluirCliente({
      id
    });
    return excluirCliente;
  }

  async editarCliente(request, response) {
    const {
      id,
      nome,
      cpf,
      nascimento,
      genero,
      civil,
      uf,
      rg,
      endereco,
      numero,
      tel,
      cel,
      email
    } = request.body.param;
    const clienteService = new _ClienteService.ClienteService();
    const editarCliente = clienteService.editarCliente({
      id,
      nome,
      cpf,
      nascimento,
      genero,
      civil,
      uf,
      rg,
      endereco,
      numero,
      tel,
      cel,
      email
    });
    return editarCliente;
  }

  async relatorioClientes(request, response) {
    const {
      filtro,
      dados,
      ordenacao,
      ordenacaoordem
    } = request.body.param;
    const clienteService = new _ClienteService.ClienteService();
    const clientes = clienteService.relatorioClientes({
      filtro,
      dados,
      ordenacao,
      ordenacaoordem
    });
    return clientes;
  }

}

exports.ClienteController = ClienteController;