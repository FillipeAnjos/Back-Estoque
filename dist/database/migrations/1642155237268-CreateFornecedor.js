"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFornecedor1642155237268 = void 0;
const typeorm_1 = require("typeorm");
class CreateFornecedor1642155237268 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "fornecedores",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: "increment",
                    isGenerated: true
                },
                {
                    name: "nome",
                    type: "varchar"
                },
                {
                    name: "email",
                    type: "varchar"
                },
                {
                    name: "cnpj",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "razao",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "falarcom",
                    type: "varchar"
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
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("fornecedores");
    }
}
exports.CreateFornecedor1642155237268 = CreateFornecedor1642155237268;
//# sourceMappingURL=1642155237268-CreateFornecedor.js.map