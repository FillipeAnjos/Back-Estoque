import { Request, Response } from "express";
import { ProdutoService } from "../services/ProdutoService";

class ProdutoController{

    async buscarCodigo(){

        const produtoService = new ProdutoService();

        const quantidade = produtoService.buscarCodigo();

        return quantidade;
    }

    async cadastrarProduto(request: Request, response: Response){

        const { codigo, produto, categoria, descricao, cor, tamanho, valor, obs, status } = request.body.param;

        const produtoService = new ProdutoService();

        const prod = produtoService.cadastrarProduto({ codigo, produto, categoria, descricao, cor, tamanho, valor, obs, status });

        return prod;
    }

    async listarProdutos(){

        const produtoService = new ProdutoService();

        const prod = produtoService.listarProdutos();

        return prod;
    }

    async listarProdutosParam(request: Request, response: Response){

        const { filtro, dados } = request.body.param;

        const produtoService = new ProdutoService();

        const produtos = produtoService.listarProdutosParam({filtro, dados});

        return produtos;

    }

    async desativarItem(request: Request, response: Response) {

        const id = request.body.param;

        const produtoService = new ProdutoService();

        const produtoDesativar = produtoService.desativarItem({ id });

        return produtoDesativar;

    }

    async editarProduto(request: Request, response: Response){

        const { codigo, produto, categoria, descricao, cor, tamanho, valor, obs, status } = request.body.param;

        const produtoService = new ProdutoService();

        const produtoEditar = produtoService.editarProduto({ codigo, produto, categoria, descricao, cor, tamanho, valor, obs, status });

        return produtoEditar;

    }

}

export { ProdutoController }