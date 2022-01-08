import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCliente1641653828654 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "clientes",
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
                        name: "cpf",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "nascimento",
                        type: "date",
                        isNullable: true
                    },
                    {
                        name: "genero",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "civil",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "rg",
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
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("clientes");
    }

}
