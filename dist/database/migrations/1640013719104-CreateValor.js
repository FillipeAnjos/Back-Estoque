"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateValor1640013719104 = void 0;

var _typeorm = require("typeorm");

class CreateValor1640013719104 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "valors",
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
        name: "valor",
        type: "float8"
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
        name: "FKProduto",
        referencedTableName: "produtos",
        referencedColumnNames: ["id"],
        columnNames: ["id_produto"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("valors");
  }

}

exports.CreateValor1640013719104 = CreateValor1640013719104;