"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuantidadeRepositories = void 0;

var _typeorm = require("typeorm");

var _Quantidade = require("../models/Quantidade");

var _dec, _class;

let QuantidadeRepositories = (_dec = (0, _typeorm.EntityRepository)(_Quantidade.Quantidade), _dec(_class = class QuantidadeRepositories extends _typeorm.Repository {}) || _class);
exports.QuantidadeRepositories = QuantidadeRepositories;