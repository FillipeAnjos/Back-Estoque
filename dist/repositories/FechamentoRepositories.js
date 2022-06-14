"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FechamentoRepositories = void 0;

var _typeorm = require("typeorm");

var _Fechamento = require("../models/Fechamento");

var _dec, _class;

let FechamentoRepositories = (_dec = (0, _typeorm.EntityRepository)(_Fechamento.Fechamento), _dec(_class = class FechamentoRepositories extends _typeorm.Repository {}) || _class);
exports.FechamentoRepositories = FechamentoRepositories;