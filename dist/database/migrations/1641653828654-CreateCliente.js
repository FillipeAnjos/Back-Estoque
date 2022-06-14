"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCliente1641653828654 = void 0;

var _typeorm = require("typeorm");

class CreateCliente1641653828654 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "clientes",
      columns: [{
        name: "id",
        type: "int",
        isPrimary: true,
        generationStrategy: "increment",
        isGenerated: true
      }, {
        name: "nome",
        type: "varchar"
      }, {
        name: "email",
        type: "varchar"
      }, {
        name: "cpf",
        type: "varchar",
        isNullable: true
      }, {
        name: "nascimento",
        type: "date",
        isNullable: true
      }, {
        name: "genero",
        type: "varchar",
        isNullable: true
      }, {
        name: "civil",
        type: "varchar",
        isNullable: true
      }, {
        name: "rg",
        type: "varchar",
        isNullable: true
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
    await queryRunner.dropTable("clientes");
  }

}

exports.CreateCliente1641653828654 = CreateCliente1641653828654;