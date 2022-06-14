"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VendaRepositories = void 0;

var _typeorm = require("typeorm");

var _Venda = require("../models/Venda");

var _dec, _class;

let VendaRepositories = (_dec = (0, _typeorm.EntityRepository)(_Venda.Venda), _dec(_class = class VendaRepositories extends _typeorm.Repository {}) || _class);
exports.VendaRepositories = VendaRepositories;