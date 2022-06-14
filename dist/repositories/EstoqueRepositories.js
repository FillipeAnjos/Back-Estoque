"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EstoqueRepositories = void 0;

var _typeorm = require("typeorm");

var _Estoque = require("../models/Estoque");

var _dec, _class;

let EstoqueRepositories = (_dec = (0, _typeorm.EntityRepository)(_Estoque.Estoque), _dec(_class = class EstoqueRepositories extends _typeorm.Repository {}) || _class);
exports.EstoqueRepositories = EstoqueRepositories;