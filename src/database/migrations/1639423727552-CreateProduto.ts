import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProduto1639423727552 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("produtos");
    }

}
