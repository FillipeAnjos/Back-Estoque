import { Request, Response } from "express";
import { VendaService } from "../services/VendaService";

class VendaController{

    async salvarVenda(request: Request, response: Response) {

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

    async listarVendasParam(request: Request, response: Response) {

        const { filtro, dados, acao } = request.body.param;

        const vendaService = new VendaService();

        const vendas = vendaService.listarVendasParam({ filtro, dados, acao });

        return vendas;

    }

}

export { VendaController }