"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProduto1639423727552 = void 0;
const typeorm_1 = require("typeorm");
class CreateProduto1639423727552 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "produtos",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: "increment",
                    isGenerated: true
                },
                {
                    name: "produto",
                    type: "varchar"
                },
                {
                    name: "categoria",
                    type: "varchar"
                },
                {
                    name: "descricao",
                    type: "varchar"
                },
                {
                    name: "cor",
                    type: "varchar"
                },
                {
                    name: "tamanho",
                    type: "varchar"
                },
                {
                    name: "obs",
                    type: "varchar"
                },
                {
                    name: "valor",
                    type: "float8"
                },
                {
                    name: "status",
                    type: "boolean"
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("produtos");
    }
}
exports.CreateProduto1639423727552 = CreateProduto1639423727552;
//# sourceMappingURL=1639423727552-CreateProduto.js.map