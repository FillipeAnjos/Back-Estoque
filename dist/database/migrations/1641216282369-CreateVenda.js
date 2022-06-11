var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Table } from "typeorm";
export class CreateVenda1641216282369 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new Table({
                name: "vendas",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        generationStrategy: "increment",
                        isGenerated: true
                    },
                    {
                        name: "id_fechamento",
                        type: "int"
                    },
                    {
                        name: "id_user",
                        type: "int"
                    },
                    {
                        name: "desconto",
                        type: "float8",
                        isNullable: true
                    },
                    {
                        name: "modalidade",
                        type: "varchar"
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
                        name: "obs",
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
                        name: "FKFechamento",
                        referencedTableName: "fechamentos",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_fechamento"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKUser",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_user"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("vendas");
        });
    }
}
//# sourceMappingURL=1641216282369-CreateVenda.js.map