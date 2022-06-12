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
let Endereco = class Endereco {
    constructor() {
    }
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Endereco.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Endereco.prototype, "id_cliente", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Endereco.prototype, "id_fornecedor", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Endereco.prototype, "rua", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Endereco.prototype, "numero", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Endereco.prototype, "bairro", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Endereco.prototype, "municipio", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Endereco.prototype, "uf", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], Endereco.prototype, "created_at", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", Date)
], Endereco.prototype, "updated_at", void 0);
Endereco = __decorate([
    Entity("enderecos"),
    __metadata("design:paramtypes", [])
], Endereco);
export { Endereco };
//# sourceMappingURL=Endereco.js.map