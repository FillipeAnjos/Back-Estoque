"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoriaRepositories = void 0;

var _typeorm = require("typeorm");

var _Categoria = require("../models/Categoria");

var _dec, _class;

let CategoriaRepositories = (_dec = (0, _typeorm.EntityRepository)(_Categoria.Categoria), _dec(_class = class CategoriaRepositories extends _typeorm.Repository {}) || _class);
exports.CategoriaRepositories = CategoriaRepositories;