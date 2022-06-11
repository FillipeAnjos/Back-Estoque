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
exports.Fechamento = void 0;
var typeorm_1 = require("typeorm");
var Fechamento = /** @class */ (function () {
    function Fechamento() {
        /*if(!this.id){

        }*/
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Fechamento.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "float" }),
        __metadata("design:type", Number)
    ], Fechamento.prototype, "valor_total", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Date)
    ], Fechamento.prototype, "data", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], Fechamento.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Fechamento.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Fechamento.prototype, "updated_at", void 0);
    Fechamento = __decorate([
        (0, typeorm_1.Entity)("fechamentos"),
        __metadata("design:paramtypes", [])
    ], Fechamento);
    return Fechamento;
}());
exports.Fechamento = Fechamento;
//# sourceMappingURL=Fechamento.js.map