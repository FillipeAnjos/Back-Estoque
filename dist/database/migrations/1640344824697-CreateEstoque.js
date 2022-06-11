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
exports.CreateEstoque1640344824697 = void 0;
const typeorm_1 = require("typeorm");
class CreateEstoque1640344824697 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
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
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("estoques");
        });
    }
}
exports.CreateEstoque1640344824697 = CreateEstoque1640344824697;
//# sourceMappingURL=1640344824697-CreateEstoque.js.map