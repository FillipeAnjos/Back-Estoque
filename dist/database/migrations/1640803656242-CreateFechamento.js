import { Table } from "typeorm";
export class CreateFechamento1640803656242 {
    async up(queryRunner) {
        await queryRunner.createTable(new Table({
            name: "fechamentos",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: "increment",
                    isGenerated: true
                },
                {
                    name: "valor_total",
                    type: "float8"
                },
                {
                    name: "data",
                    type: "date"
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
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("fechamentos");
    }
}
//# sourceMappingURL=1640803656242-CreateFechamento.js.map