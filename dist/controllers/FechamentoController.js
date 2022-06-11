"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FechamentoController = void 0;
const FechamentoService_1 = require("../services/FechamentoService");
class FechamentoController {
    buscarStatusCaixa() {
        return __awaiter(this, void 0, void 0, function* () {
            const fechamentoService = new FechamentoService_1.FechamentoService();
            const fechar = fechamentoService.buscarStatusCaixa();
            return fechar;
        });
    }
    fechamentoSalvar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { valor_total, data, status } = request.body.param;
            const fechamentoService = new FechamentoService_1.FechamentoService();
            const fechar = fechamentoService.fechamentoSalvar({ valor_total, data, status });
            return fechar;
        });
    }
    fechamentoSalvarAnterior(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { valor_total, data, status } = request.body.param;
            const fechamentoService = new FechamentoService_1.FechamentoService();
            const fechar = fechamentoService.fechamentoSalvarAnterior({ valor_total, data, status });
            return fechar;
        });
    }
    buscarVendasDia() {
        return __awaiter(this, void 0, void 0, function* () {
            const fechamentoService = new FechamentoService_1.FechamentoService();
            const fechar = fechamentoService.buscarVendasDia();
            return fechar;
        });
    }
    listarFechamentos() {
        return __awaiter(this, void 0, void 0, function* () {
            const fechamentoService = new FechamentoService_1.FechamentoService();
            const fechamentos = fechamentoService.listarFechamentos();
            return fechamentos;
        });
    }
}
exports.FechamentoController = FechamentoController;
//# sourceMappingURL=FechamentoController.js.map