"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EstoqueService = void 0;

var _typeorm = require("typeorm");

var _EstoqueRepositories = require("../repositories/EstoqueRepositories");

class EstoqueService {
  salvarItemEstoque(salvar) {
    const estoqueRepository = (0, _typeorm.getCustomRepository)(_EstoqueRepositories.EstoqueRepositories);
    var salvarEstoque = estoqueRepository.create(salvar);
    var itemEstoque = estoqueRepository.save(salvarEstoque);

    if (!itemEstoque) {
      return {
        error: "Erro ao salvar item no estoque."
      };
    }
  }

}

exports.EstoqueService = EstoqueService;