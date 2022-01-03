import { Request, Response } from "express";
import { VendaService } from "../services/VendaService";

class VendaController{

    async salvarVenda(request: Request, response: Response) {

        const { id_user, itens, modalidade, valores, obs } = request.body.param;

        const vendaService = new VendaService();

        const venda = vendaService.salvarVenda({ id_user, itens, modalidade, valores, obs });

        return venda;
        
    }

}

export { VendaController }