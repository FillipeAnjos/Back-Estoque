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
let Valor = class Valor {
    constructor() {
    }
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Valor.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Valor.prototype, "id_produto", void 0);
__decorate([
    Column({ type: "float" }),
    __metadata("design:type", Number)
], Valor.prototype, "valor", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], Valor.prototype, "created_at", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", Date)
], Valor.prototype, "updated_at", void 0);
Valor = __decorate([
    Entity("valors"),
    __metadata("design:paramtypes", [])
], Valor);
export { Valor };
//# sourceMappingURL=Valor.js.map