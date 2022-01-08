import { Request, Response } from "express";
import { ClienteService } from "../services/ClienteService";

class ClienteController{

    async cadastrarCliente(request: Request, response: Response) {

        const { nome, cpf, nascimento, genero, civil, uf, rg, endereco, numero, tel, cel, email } = request.body.param;

        const clienteService = new ClienteService();

        const cliente = clienteService.cadastrarCliente({ nome, cpf, nascimento, genero, civil, uf, rg, endereco, numero, tel, cel, email });

        return cliente;
        
    }

}

export { ClienteController }