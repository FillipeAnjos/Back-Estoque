import { VendaService } from "../services/VendaService";
class VendaController {
    async salvarVenda(request, response) {
        const { id_user, itens, modalidade, valores, obs } = request.body.param;
        const vendaService = new VendaService();
        const venda = vendaService.salvarVenda({ id_user, itens, modalidade, valores, obs });
        return venda;
    }
    async listarVendas() {
        const vendaService = new VendaService();
        const vendas = vendaService.listarVendas();
        return vendas;
    }
    async listarVendasParam(request, response) {
        const { filtro, dados, acao } = request.body.param;
        const vendaService = new VendaService();
        const vendas = vendaService.listarVendasParam({ filtro, dados, acao });
        return vendas;
    }
    async relatorioVendas(request, response) {
        const { filtro, dados, dadosdataini, dadosdatafim, ordenacao, ordenacaoordem } = request.body.param;
        const vendaService = new VendaService();
        const vendas = vendaService.relatorioVendas({ filtro, dados, dadosdataini, dadosdatafim, ordenacao, ordenacaoordem });
        return vendas;
    }
    async relatorioFechamentos(request, response) {
        const { filtro, dados, dadosdataini, dadosdatafim, ordenacao, ordenacaoordem } = request.body.param;
        const vendaService = new VendaService();
        const vendas = vendaService.relatorioFechamentos({ filtro, dados, dadosdataini, dadosdatafim, ordenacao, ordenacaoordem });
        return vendas;
    }
    async buscarGraficoVendas() {
        const vendaService = new VendaService();
        const vendas = vendaService.buscarGraficoVendas();
        return vendas;
    }
}
export { VendaController };
//# sourceMappingURL=VendaController.js.map