"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValorService = void 0;

var _typeorm = require("typeorm");

var _ValorRepositories = require("../repositories/ValorRepositories");

class ValorService {
  async salvarValor(codigo, valor) {
    var id_produto = codigo;
    const valorRepository = (0, _typeorm.getCustomRepository)(_ValorRepositories.ValorRepositories);
    const valorSalvado = valorRepository.create({
      id_produto,
      valor
    });
    var vlr = await valorRepository.save(valorSalvado);

    if (!vlr) {
      return {
        error: "Erro ao salvar o valor."
      };
    }
  }

}

exports.ValorService = ValorService;