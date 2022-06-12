import { Table } from "typeorm";
export class CreateEstoque1640344824697 {
    async up(queryRunner) {
        await queryRunner.createTable(new Table({
            name: "estoques",
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
                    name: "entrada",
                    type: "int",
                    isNullable: true
                },
                {
                    name: "saida",
                    type: "int",
                    isNullable: true
                },
                {
                    name: "saldo",
                    type: "int"
                },
                {
                    name: "valor_atual",
                    type: "float8"
                },
                {
                    name: "acao",
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
            ],
            foreignKeys: [
                {
                    name: "FKEstoque",
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
        await queryRunner.dropTable("estoques");
    }
}
//# sourceMappingURL=1640344824697-CreateEstoque.js.map