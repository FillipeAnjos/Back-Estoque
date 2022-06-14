"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoriaController = void 0;

var _CategoriaService = require("../services/CategoriaService");

class CategoriaController {
  async cadastrar(request, response) {
    const descricao = request.body.param;
    const categoriaService = new _CategoriaService.CategoriaService();
    const categoria = categoriaService.cadastrar(descricao);
    return categoria;
  }

  async buscarCategorias() {
    const categoriaService = new _CategoriaService.CategoriaService();
    const categoria = categoriaService.buscarCategorias();
    return categoria;
  }

}

exports.CategoriaController = CategoriaController;