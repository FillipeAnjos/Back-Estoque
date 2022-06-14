"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnderecoRepositories = void 0;

var _typeorm = require("typeorm");

var _Endereco = require("../models/Endereco");

var _dec, _class;

let EnderecoRepositories = (_dec = (0, _typeorm.EntityRepository)(_Endereco.Endereco), _dec(_class = class EnderecoRepositories extends _typeorm.Repository {}) || _class);
exports.EnderecoRepositories = EnderecoRepositories;