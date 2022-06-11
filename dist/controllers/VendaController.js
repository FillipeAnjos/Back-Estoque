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
exports.VendaController = void 0;
const VendaService_1 = require("../services/VendaService");
class VendaController {
    salvarVenda(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_user, itens, modalidade, valores, obs } = request.body.param;
            const vendaService = new VendaService_1.VendaService();
            const venda = vendaService.salvarVenda({ id_user, itens, modalidade, valores, obs });
            return venda;
        });
    }
    listarVendas() {
        return __awaiter(this, void 0, void 0, function* () {
            const vendaService = new VendaService_1.VendaService();
            const vendas = vendaService.listarVendas();
            return vendas;
        });
    }
    listarVendasParam(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { filtro, dados, acao } = request.body.param;
            const vendaService = new VendaService_1.VendaService();
            const vendas = vendaService.listarVendasParam({ filtro, dados, acao });
            return vendas;
        });
    }
    relatorioVendas(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { filtro, dados, dadosdataini, dadosdatafim, ordenacao, ordenacaoordem } = request.body.param;
            const vendaService = new VendaService_1.VendaService();
            const vendas = vendaService.relatorioVendas({ filtro, dados, dadosdataini, dadosdatafim, ordenacao, ordenacaoordem });
            return vendas;
        });
    }
    relatorioFechamentos(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { filtro, dados, dadosdataini, dadosdatafim, ordenacao, ordenacaoordem } = request.body.param;
            const vendaService = new VendaService_1.VendaService();
            const vendas = vendaService.relatorioFechamentos({ filtro, dados, dadosdataini, dadosdatafim, ordenacao, ordenacaoordem });
            return vendas;
        });
    }
    buscarGraficoVendas() {
        return __awaiter(this, void 0, void 0, function* () {
            const vendaService = new VendaService_1.VendaService();
            const vendas = vendaService.buscarGraficoVendas();
            return vendas;
        });
    }
}
exports.VendaController = VendaController;
//# sourceMappingURL=VendaController.js.map