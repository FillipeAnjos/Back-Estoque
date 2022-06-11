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
let Item = class Item {
    constructor() {
        /*if(!this.id){

        }*/
    }
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Item.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Item.prototype, "id_venda", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Item.prototype, "id_produto", void 0);
__decorate([
    Column({ type: "float" }),
    __metadata("design:type", Number)
], Item.prototype, "valor_atual", void 0);
__decorate([
    Column(),
    __metadata("design:type", Number)
], Item.prototype, "unidade", void 0);
__decorate([
    Column(),
    __metadata("design:type", Date)
], Item.prototype, "data", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], Item.prototype, "created_at", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", Date)
], Item.prototype, "updated_at", void 0);
Item = __decorate([
    Entity("itens"),
    __metadata("design:paramtypes", [])
], Item);
export { Item };
//# sourceMappingURL=Item.js.map