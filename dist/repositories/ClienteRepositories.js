"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClienteRepositories = void 0;

var _typeorm = require("typeorm");

var _Cliente = require("../models/Cliente");

var _dec, _class;

let ClienteRepositories = (_dec = (0, _typeorm.EntityRepository)(_Cliente.Cliente), _dec(_class = class ClienteRepositories extends _typeorm.Repository {}) || _class);
exports.ClienteRepositories = ClienteRepositories;