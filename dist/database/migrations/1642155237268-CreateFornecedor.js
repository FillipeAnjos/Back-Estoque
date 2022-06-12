import { Table } from "typeorm";
export class CreateFornecedor1642155237268 {
    async up(queryRunner) {
        await queryRunner.createTable(new Table({
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
//# sourceMappingURL=1642155237268-CreateFornecedor.js.map