import { Request, Response } from "express";
import { FornecedorService } from "../services/FornecedorService";

class FornecedorController{

    async cadastrarFornecedor(request: Request, response: Response) {

        const { nome, email, cnpj, razao, falarcom, endereco, numero, cel } = request.body.param;

        const fornecedorService = new FornecedorService();

        const fornecedor = fornecedorService.cadastrarFornecedor({ nome, email, cnpj, razao, falarcom, endereco, numero, cel });

        return fornecedor;
        
    }

    async listarFornecedores() {

        const fornecedorService = new FornecedorService();

        const fornecedores = fornecedorService.listarFornecedores();

        return fornecedores;
        
    }

    async listarFornecedoresParam(request: Request, response: Response) {

        const { filtro, dados } = request.body.param;

        const fornecedorService = new FornecedorService();

        const fornecedores = fornecedorService.listarFornecedoresParam({ filtro, dados });

        return fornecedores;
        
    }

    async excluirFornecedor(request: Request, response: Response) {

        const { id } = request.body;

        const fornecedorService = new FornecedorService();

        const excluirFornecedor = fornecedorService.excluirFornecedor({ id });

        return excluirFornecedor;

    }

    async editarFornecedor(request: Request, response: Response) {

        const { id, nome, cnpj, razao, falarcom, endereco, numero, cel, email } = request.body.param;

        const clienteService = new FornecedorService();

        const editarFornecedor = clienteService.editarFornecedor({ id, nome, cnpj, razao, falarcom, endereco, numero, cel, email });

        return editarFornecedor;

    }

}

export { FornecedorController }