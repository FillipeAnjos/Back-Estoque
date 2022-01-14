import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEnderecos1642158067916 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "enderecos",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        generationStrategy: "increment",
                        isGenerated: true
                    },
                    {
                        name: "id_cliente",
                        type: "int",
                        isNullable: true
                    },
                    {
                        name: "id_fornecedor",
                        type: "int",
                        isNullable: true
                    },
                    {
                        name: "rua",
                        type: "varchar"
                    },
                    {
                        name: "numero",
                        type: "int"
                    },
                    {
                        name: "bairro",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "municipio",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "uf",
                        type: "varchar",
                        isNullable: true
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
                        name: "FKClientes",
                        referencedTableName: "clientes",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_cliente"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKFornecedores",
                        referencedTableName: "fornecedores",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_fornecedor"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("enderecos");
    }

}
