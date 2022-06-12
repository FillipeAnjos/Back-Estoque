import { Table } from "typeorm";
export class CreateCategoria1641471947033 {
    async up(queryRunner) {
        await queryRunner.createTable(new Table({
            name: "categorias",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: "increment",
                    isGenerated: true
                },
                {
                    name: "descricao",
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
        await queryRunner.dropTable("categorias");
    }
}
//# sourceMappingURL=1641471947033-CreateCategoria.js.map