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
exports.CreateProduto1639423727552 = void 0;
const typeorm_1 = require("typeorm");
class CreateProduto1639423727552 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
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
                        name: "valor",
                        type: "float8"
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
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("produtos");
        });
    }
}
exports.CreateProduto1639423727552 = CreateProduto1639423727552;
//# sourceMappingURL=1639423727552-CreateProduto.js.map