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
exports.CreateItem1641216735727 = void 0;
const typeorm_1 = require("typeorm");
class CreateItem1641216735727 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
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
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("itens");
        });
    }
}
exports.CreateItem1641216735727 = CreateItem1641216735727;
//# sourceMappingURL=1641216735727-CreateItem.js.map