"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FechamentoController = void 0;
const FechamentoService_1 = require("../services/FechamentoService");
class FechamentoController {
    async buscarStatusCaixa() {
        const fechamentoService = new FechamentoService_1.FechamentoService();
        const fechar = fechamentoService.buscarStatusCaixa();
        return fechar;
    }
    async fechamentoSalvar(request, response) {
        const { valor_total, data, status } = request.body.param;
        const fechamentoService = new FechamentoService_1.FechamentoService();
        const fechar = fechamentoService.fechamentoSalvar({ valor_total, data, status });
        return fechar;
    }
    async fechamentoSalvarAnterior(request, response) {
        const { valor_total, data, status } = request.body.param;
        const fechamentoService = new FechamentoService_1.FechamentoService();
        const fechar = fechamentoService.fechamentoSalvarAnterior({ valor_total, data, status });
        return fechar;
    }
    async buscarVendasDia() {
        const fechamentoService = new FechamentoService_1.FechamentoService();
        const fechar = fechamentoService.buscarVendasDia();
        return fechar;
    }
    async listarFechamentos() {
        const fechamentoService = new FechamentoService_1.FechamentoService();
        const fechamentos = fechamentoService.listarFechamentos();
        return fechamentos;
    }
}
exports.FechamentoController = FechamentoController;
//# sourceMappingURL=FechamentoController.js.map