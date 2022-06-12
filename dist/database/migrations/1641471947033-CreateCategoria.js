"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoria1641471947033 = void 0;
const typeorm_1 = require("typeorm");
class CreateCategoria1641471947033 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "categorias",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: "increment",
                    isGenerated: true
                },
                {
                    name: "descricao",
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
    }
    async down(queryRunner) {
        await queryRunner.dropTable("categorias");
    }
}
exports.CreateCategoria1641471947033 = CreateCategoria1641471947033;
//# sourceMappingURL=1641471947033-CreateCategoria.js.map