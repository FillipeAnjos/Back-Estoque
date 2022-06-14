"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemRepositories = void 0;

var _typeorm = require("typeorm");

var _Item = require("../models/Item");

var _dec, _class;

let ItemRepositories = (_dec = (0, _typeorm.EntityRepository)(_Item.Item), _dec(_class = class ItemRepositories extends _typeorm.Repository {}) || _class);
exports.ItemRepositories = ItemRepositories;