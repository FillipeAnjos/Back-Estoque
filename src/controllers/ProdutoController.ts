import { Request, Response } from "express";
import { ProdutoService } from "../services/ProdutoService";

class ProdutoController{

    async buscarCodigo(){

        const produtoService = new ProdutoService();

        const quantidade = produtoService.buscarCodigo();

        return quantidade;
    }

    async cadastrarProduto(request: Request, response: Response){

        const { produto, categoria, descricao, cor, tamanho, obs, status } = request.body.param;

        const produtoService = new ProdutoService();

        const prod = produtoService.cadastrarProduto({ produto, categoria, descricao, cor, tamanho, obs, status });

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

}

export { ProdutoController }