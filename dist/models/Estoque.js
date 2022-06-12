var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
let Estoque = class Estoque {
    constructor() {
    }
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Estoque.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Estoque.prototype, "id_produto", void 0);
__decorate([
    Column({ nullable: true }),
    __metadata("design:type", Number)
], Estoque.prototype, "entrada", void 0);
__decorate([
    Column({ nullable: true }),
    __metadata("design:type", Number)
], Estoque.prototype, "saida", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Estoque.prototype, "saldo", void 0);
__decorate([
    Column({ type: "float" }),
    __metadata("design:type", Number)
], Estoque.prototype, "valor_atual", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Estoque.prototype, "acao", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], Estoque.prototype, "created_at", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", Date)
], Estoque.prototype, "updated_at", void 0);
Estoque = __decorate([
    Entity("estoques"),
    __metadata("design:paramtypes", [])
], Estoque);
export { Estoque };
//# sourceMappingURL=Estoque.js.map