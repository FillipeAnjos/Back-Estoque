"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCategoria1641471947033 = void 0;

var _typeorm = require("typeorm");

class CreateCategoria1641471947033 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "categorias",
      columns: [{
        name: "id",
        type: "int",
        isPrimary: true,
        generationStrategy: "increment",
        isGenerated: true
      }, {
        name: "descricao",
        type: "varchar"
      }, {
        name: "created_at",
        type: "timestamp",
        default: "now()"
      }, {
        name: "updated_at",
        type: "timestamp",
        default: "now()"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("categorias");
  }

}

exports.CreateCategoria1641471947033 = CreateCategoria1641471947033;