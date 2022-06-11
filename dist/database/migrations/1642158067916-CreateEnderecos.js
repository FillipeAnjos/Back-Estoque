"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEnderecos1642158067916 = void 0;
const typeorm_1 = require("typeorm");
class CreateEnderecos1642158067916 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
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
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("enderecos");
        });
    }
}
exports.CreateEnderecos1642158067916 = CreateEnderecos1642158067916;
//# sourceMappingURL=1642158067916-CreateEnderecos.js.map