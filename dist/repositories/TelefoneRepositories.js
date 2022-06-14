"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TelefoneRepositories = void 0;

var _typeorm = require("typeorm");

var _Telefone = require("../models/Telefone");

var _dec, _class;

let TelefoneRepositories = (_dec = (0, _typeorm.EntityRepository)(_Telefone.Telefone), _dec(_class = class TelefoneRepositories extends _typeorm.Repository {}) || _class);
exports.TelefoneRepositories = TelefoneRepositories;