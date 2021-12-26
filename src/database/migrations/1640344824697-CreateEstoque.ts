import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEstoque1640344824697 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("estoques");
    }

}
