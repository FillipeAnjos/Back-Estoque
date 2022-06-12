"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTelefones1642158216192 = void 0;
const typeorm_1 = require("typeorm");
class CreateTelefones1642158216192 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "telefones",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: "increment",
                    isGenerated: true
                },
                {
                    name: "id_cliente",
                    type: "int",
                    isNullable: true
                },
                {
                    name: "id_fornecedor",
                    type: "int",
                    isNullable: true
                },
                {
                    name: "telefone",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "celular",
                    type: "varchar"
                },
                {
                    name: "celular2",
                    type: "varchar",
                    isNullable: true
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
                    name: "FKClientes",
                    referencedTableName: "clientes",
                    referencedColumnNames: ["id"],
                    columnNames: ["id_cliente"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                },
                {
                    name: "FKFornecedores",
                    referencedTableName: "fornecedores",
                    referencedColumnNames: ["id"],
                    columnNames: ["id_fornecedor"],
                    onDelete: "SET NULL",
                    onUpdate: "SET NULL"
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("telefones");
    }
}
exports.CreateTelefones1642158216192 = CreateTelefones1642158216192;
//# sourceMappingURL=1642158216192-CreateTelefones.js.map