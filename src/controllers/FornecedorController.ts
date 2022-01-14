import { Request, Response } from "express";
import { FornecedorService } from "../services/FornecedorService";

class FornecedorController{

    async cadastrarFornecedor(request: Request, response: Response) {

        const { nome, email, cnpj, razao, falarcom, endereco, numero, cel } = request.body.param;

        const fornecedorService = new FornecedorService();

        const fornecedor = fornecedorService.cadastrarFornecedor({ nome, email, cnpj, razao, falarcom, endereco, numero, cel });

        return fornecedor;
        
    }

}

export { FornecedorController }