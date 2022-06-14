"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FechamentoController = void 0;

var _FechamentoService = require("../services/FechamentoService");

class FechamentoController {
  async buscarStatusCaixa() {
    const fechamentoService = new _FechamentoService.FechamentoService();
    const fechar = fechamentoService.buscarStatusCaixa();
    return fechar;
  }

  async fechamentoSalvar(request, response) {
    const {
      valor_total,
      data,
      status
    } = request.body.param;
    const fechamentoService = new _FechamentoService.FechamentoService();
    const fechar = fechamentoService.fechamentoSalvar({
      valor_total,
      data,
      status
    });
    return fechar;
  }

  async fechamentoSalvarAnterior(request, response) {
    const {
      valor_total,
      data,
      status
    } = request.body.param;
    const fechamentoService = new _FechamentoService.FechamentoService();
    const fechar = fechamentoService.fechamentoSalvarAnterior({
      valor_total,
      data,
      status
    });
    return fechar;
  }

  async buscarVendasDia() {
    const fechamentoService = new _FechamentoService.FechamentoService();
    const fechar = fechamentoService.buscarVendasDia();
    return fechar;
  }

  async listarFechamentos() {
    const fechamentoService = new _FechamentoService.FechamentoService();
    const fechamentos = fechamentoService.listarFechamentos();
    return fechamentos;
  }

}

exports.FechamentoController = FechamentoController;