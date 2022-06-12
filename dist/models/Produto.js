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
let Produto = class Produto {
    constructor() {
    }
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Produto.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Produto.prototype, "produto", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Produto.prototype, "categoria", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Produto.prototype, "descricao", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Produto.prototype, "cor", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Produto.prototype, "tamanho", void 0);
__decorate([
    Column({ type: "float" }),
    __metadata("design:type", Number)
], Produto.prototype, "valor", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Produto.prototype, "obs", void 0);
__decorate([
    Column(),
    __metadata("design:type", Boolean)
], Produto.prototype, "status", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], Produto.prototype, "created_at", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", Date)
], Produto.prototype, "updated_at", void 0);
Produto = __decorate([
    Entity("produtos"),
    __metadata("design:paramtypes", [])
], Produto);
export { Produto };
//# sourceMappingURL=Produto.js.map