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
let Fornecedor = class Fornecedor {
    constructor() {
    }
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Fornecedor.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Fornecedor.prototype, "nome", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Fornecedor.prototype, "email", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Fornecedor.prototype, "cnpj", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Fornecedor.prototype, "razao", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Fornecedor.prototype, "falarcom", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], Fornecedor.prototype, "created_at", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", Date)
], Fornecedor.prototype, "updated_at", void 0);
Fornecedor = __decorate([
    Entity("fornecedores"),
    __metadata("design:paramtypes", [])
], Fornecedor);
export { Fornecedor };
//# sourceMappingURL=Fornecedor.js.map