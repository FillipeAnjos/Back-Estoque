"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser1639003387741 = void 0;
const typeorm_1 = require("typeorm");
class CreateUser1639003387741 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "users",
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
                    name: "sobre",
                    type: "varchar"
                },
                {
                    name: "email",
                    type: "varchar"
                },
                {
                    name: "senha",
                    type: "varchar"
                },
                {
                    name: "nascimento",
                    type: "date"
                },
                {
                    name: "genero",
                    type: "varchar"
                },
                {
                    name: "admin",
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("users");
    }
}
exports.CreateUser1639003387741 = CreateUser1639003387741;
//# sourceMappingURL=1639003387741-CreateUser.js.map