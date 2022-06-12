"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQuantidadeProduto1640549563131 = void 0;
const typeorm_1 = require("typeorm");
class CreateQuantidadeProduto1640549563131 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "quantidades",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: "increment",
                    isGenerated: true
                },
                {
                    name: "id_produto",
                    type: "int"
                },
                {
                    name: "quantidade",
                    type: "int"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                },
            ],
            foreignKeys: [
                {
                    name: "FKQuantidade",
                    referencedTableName: "produtos",
                    referencedColumnNames: ["id"],
                    columnNames: ["id_produto"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("quantidades");
    }
}
exports.CreateQuantidadeProduto1640549563131 = CreateQuantidadeProduto1640549563131;
//# sourceMappingURL=1640549563131-CreateQuantidadeProduto.js.map