"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProdutoRepositories = void 0;

var _typeorm = require("typeorm");

var _Produto = require("../models/Produto");

var _dec, _class;

let ProdutoRepositories = (_dec = (0, _typeorm.EntityRepository)(_Produto.Produto), _dec(_class = class ProdutoRepositories extends _typeorm.Repository {}) || _class);
exports.ProdutoRepositories = ProdutoRepositories;