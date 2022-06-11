"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venda = void 0;
const typeorm_1 = require("typeorm");
let Venda = class Venda {
    constructor() {
        /*if(!this.id){

        }*/
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Venda.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Venda.prototype, "id_fechamento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Venda.prototype, "id_user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    __metadata("design:type", Number)
], Venda.prototype, "desconto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Venda.prototype, "modalidade", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    __metadata("design:type", Number)
], Venda.prototype, "valor_total", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Venda.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Venda.prototype, "obs", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Venda.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Venda.prototype, "updated_at", void 0);
Venda = __decorate([
    (0, typeorm_1.Entity)("vendas"),
    __metadata("design:paramtypes", [])
], Venda);
exports.Venda = Venda;
//# sourceMappingURL=Venda.js.map