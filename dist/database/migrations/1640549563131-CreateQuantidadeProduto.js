"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateQuantidadeProduto1640549563131 = void 0;

var _typeorm = require("typeorm");

class CreateQuantidadeProduto1640549563131 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "quantidades",
      columns: [{
        name: "id",
        type: "int",
        isPrimary: true,
        generationStrategy: "increment",
        isGenerated: true
      }, {
        name: "id_produto",
        type: "int"
      }, {
        name: "quantidade",
        type: "int"
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
        name: "FKQuantidade",
        referencedTableName: "produtos",
        referencedColumnNames: ["id"],
        columnNames: ["id_produto"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("quantidades");
  }

}

exports.CreateQuantidadeProduto1640549563131 = CreateQuantidadeProduto1640549563131;