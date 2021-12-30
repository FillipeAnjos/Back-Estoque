import { Request, Response } from "express";
import { QuantidadeService } from "../services/QuantidadeService";

class QuantidadeController{

    async editarUnidade(request: Request, response: Response) {

        const { id_produto, valor, entrada_saida, unidade, acao } = request.body.param;

        const quantidadeService = new QuantidadeService();

        const qtd = quantidadeService.editarUnidade({ id_produto, valor, entrada_saida, unidade, acao });

        return qtd;
        
    }

}

export { QuantidadeController }