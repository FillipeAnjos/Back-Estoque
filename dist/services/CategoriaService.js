"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoriaService = void 0;

var _typeorm = require("typeorm");

var _CategoriaRepositories = require("../repositories/CategoriaRepositories");

class CategoriaService {
  async cadastrar(descricao) {
    const categoriaRepository = (0, _typeorm.getCustomRepository)(_CategoriaRepositories.CategoriaRepositories);
    const salvarCategoria = categoriaRepository.create({
      descricao
    });
    const categoriaSalvar = categoriaRepository.save(salvarCategoria);

    if (!categoriaSalvar) {
      return {
        error: true,
        msg: "Erro ao salvar a categoria."
      };
    }

    return {
      error: false,
      msg: "Categoria cadastrada com sucesso"
    };
  }

  async buscarCategorias() {
    const categoriaRepository = (0, _typeorm.getCustomRepository)(_CategoriaRepositories.CategoriaRepositories);
    const categorias = await categoriaRepository.createQueryBuilder("categorias").getMany();
    return categorias;
  }

}

exports.CategoriaService = CategoriaService;