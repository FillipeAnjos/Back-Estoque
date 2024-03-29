"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFechamento1640803656242 = void 0;

var _typeorm = require("typeorm");

class CreateFechamento1640803656242 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "fechamentos",
      columns: [{
        name: "id",
        type: "int",
        isPrimary: true,
        generationStrategy: "increment",
        isGenerated: true
      }, {
        name: "valor_total",
        type: "float8"
      }, {
        name: "data",
        type: "date"
      }, {
        name: "status",
        type: "boolean"
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
    await queryRunner.dropTable("fechamentos");
  }

}

exports.CreateFechamento1640803656242 = CreateFechamento1640803656242;