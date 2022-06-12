import { Table } from "typeorm";
export class CreateProduto1639423727552 {
    async up(queryRunner) {
        await queryRunner.createTable(new Table({
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
//# sourceMappingURL=1639423727552-CreateProduto.js.map