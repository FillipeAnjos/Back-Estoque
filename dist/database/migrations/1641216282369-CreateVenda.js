"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateVenda1641216282369 = void 0;

var _typeorm = require("typeorm");

class CreateVenda1641216282369 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "vendas",
      columns: [{
        name: "id",
        type: "int",
        isPrimary: true,
        generationStrategy: "increment",
        isGenerated: true
      }, {
        name: "id_fechamento",
        type: "int"
      }, {
        name: "id_user",
        type: "int"
      }, {
        name: "desconto",
        type: "float8",
        isNullable: true
      }, {
        name: "modalidade",
        type: "varchar"
      }, {
        name: "valor_total",
        type: "float8"
      }, {
        name: "data",
        type: "date"
      }, {
        name: "obs",
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
      }],
      foreignKeys: [{
        name: "FKFechamento",
        referencedTableName: "fechamentos",
        referencedColumnNames: ["id"],
        columnNames: ["id_fechamento"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL"
      }, {
        name: "FKUser",
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        columnNames: ["id_user"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("vendas");
  }

}

exports.CreateVenda1641216282369 = CreateVenda1641216282369;