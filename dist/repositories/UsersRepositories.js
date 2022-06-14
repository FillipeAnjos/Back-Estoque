"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersRepositories = void 0;

var _typeorm = require("typeorm");

var _User = require("../models/User");

var _dec, _class;

let UsersRepositories = (_dec = (0, _typeorm.EntityRepository)(_User.User), _dec(_class = class UsersRepositories extends _typeorm.Repository {}) || _class);
exports.UsersRepositories = UsersRepositories;