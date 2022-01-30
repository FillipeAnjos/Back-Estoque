import { Request, Response } from "express";
import { ClienteService } from "../services/ClienteService";

class ClienteController{

    async cadastrarCliente(request: Request, response: Response) {

        const { nome, cpf, nascimento, genero, civil, uf, rg, endereco, numero, tel, cel, email } = request.body.param;

        const clienteService = new ClienteService();

        const cliente = clienteService.cadastrarCliente({ nome, cpf, nascimento, genero, civil, uf, rg, endereco, numero, tel, cel, email });

        return cliente;
        
    }

    async listarClientes() {

        const clienteService = new ClienteService();

        const clientes = clienteService.listarClientes();

        return clientes;
        
    }

    async listarClientesParam(request: Request, response: Response) {

        const { filtro, dados } = request.body.param;

        const clienteService = new ClienteService();

        const clientes = clienteService.listarClientesParam({ filtro, dados });

        return clientes;
        
    }

    async excluirCliente(request: Request, response: Response) {

        const { id } = request.body;

        const clienteService = new ClienteService();

        const excluirCliente = clienteService.excluirCliente({ id });

        return excluirCliente;

    }

    async editarCliente(request: Request, response: Response) {

        const { id, nome, cpf, nascimento, genero, civil, uf, rg, endereco, numero, tel, cel, email } = request.body.param;

        const clienteService = new ClienteService();

        const editarCliente = clienteService.editarCliente({ id, nome, cpf, nascimento, genero, civil, uf, rg, endereco, numero, tel, cel, email });

        return editarCliente;

    }

    async relatorioClientes(request: Request, response: Response) {

        const { filtro, dados, ordenacao, ordenacaoordem } = request.body.param;

        const clienteService = new ClienteService();

        const clientes = clienteService.relatorioClientes({ filtro, dados, ordenacao, ordenacaoordem });

        return clientes;

    }

}

export { ClienteController }