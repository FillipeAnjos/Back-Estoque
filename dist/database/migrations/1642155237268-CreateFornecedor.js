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
export class CreateFornecedor1642155237268 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new Table({
                name: "fornecedores",
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
                        name: "cnpj",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "razao",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "falarcom",
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
                ]
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable("fornecedores");
        });
    }
}
//# sourceMappingURL=1642155237268-CreateFornecedor.js.map