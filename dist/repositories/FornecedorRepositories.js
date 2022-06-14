"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FornecedorRepositories = void 0;

var _typeorm = require("typeorm");

var _Fornecedor = require("../models/Fornecedor");

var _dec, _class;

let FornecedorRepositories = (_dec = (0, _typeorm.EntityRepository)(_Fornecedor.Fornecedor), _dec(_class = class FornecedorRepositories extends _typeorm.Repository {}) || _class);
exports.FornecedorRepositories = FornecedorRepositories;