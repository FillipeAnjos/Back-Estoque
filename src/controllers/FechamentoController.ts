import { Request, Response } from "express";
import { FechamentoService } from "../services/FechamentoService";

class FechamentoController{

    async buscarStatusCaixa(){

        const fechamentoService = new FechamentoService();

        const fechar = fechamentoService.buscarStatusCaixa();

        return fechar;
    }

    async fechamentoSalvar(request: Request, response: Response) {

        const { valor_total, data, status } = request.body.param;

        const fechamentoService = new FechamentoService();

        const fechar = fechamentoService.fechamentoSalvar({ valor_total, data, status });

        return fechar;
        
    }

}

export { FechamentoController }