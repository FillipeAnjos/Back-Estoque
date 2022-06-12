import { Table } from "typeorm";
export class CreateValor1640013719104 {
    async up(queryRunner) {
        await queryRunner.createTable(new Table({
            name: "valors",
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
                    name: "valor",
                    type: "float8"
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
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("valors");
    }
}
//# sourceMappingURL=1640013719104-CreateValor.js.map