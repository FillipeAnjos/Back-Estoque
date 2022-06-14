"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValorRepositories = void 0;

var _typeorm = require("typeorm");

var _Valor = require("../models/Valor");

var _dec, _class;

let ValorRepositories = (_dec = (0, _typeorm.EntityRepository)(_Valor.Valor), _dec(_class = class ValorRepositories extends _typeorm.Repository {}) || _class);
exports.ValorRepositories = ValorRepositories;