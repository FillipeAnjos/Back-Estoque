"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateItem1641216735727 = void 0;
const typeorm_1 = require("typeorm");
class CreateItem1641216735727 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "itens",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: "increment",
                    isGenerated: true
                },
                {
                    name: "id_venda",
                    type: "int"
                },
                {
                    name: "id_produto",
                    type: "int"
                },
                {
                    name: "valor_atual",
                    type: "float8"
                },
                {
                    name: "unidade",
                    type: "int"
                },
                {
                    name: "data",
                    type: "date"
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
                    name: "FKProduto",
                    referencedTableName: "produtos",
                    referencedColumnNames: ["id"],
                    columnNames: ["id_produto"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                },
                {
                    name: "FKVenda",
                    referencedTableName: "vendas",
                    referencedColumnNames: ["id"],
                    columnNames: ["id_venda"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("itens");
    }
}
exports.CreateItem1641216735727 = CreateItem1641216735727;
//# sourceMappingURL=1641216735727-CreateItem.js.map