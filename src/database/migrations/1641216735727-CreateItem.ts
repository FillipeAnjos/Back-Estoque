import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateItem1641216735727 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "itens",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        generationStrategy: "increment",
                        isGenerated: true
                    },
                    {
                        name: "id_venda",
                        type: "int"
                    },
                    {
                        name: "id_produto",
                        type: "int"
                    },
                    {
                        name: "valor_atual",
                        type: "float8"
                    },
                    {
                        name: "unidade",
                        type: "int"
                    },
                    {
                        name: "data",
                        type: "date"
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
                    },
                    {
                        name: "FKVenda",
                        referencedTableName: "vendas",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_venda"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("itens");
    }

}
