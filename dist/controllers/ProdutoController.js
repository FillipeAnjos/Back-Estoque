"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const ProdutoService_1 = require("../services/ProdutoService");
class ProdutoController {
    buscarCodigo() {
        return __awaiter(this, void 0, void 0, function* () {
            const produtoService = new ProdutoService_1.ProdutoService();
            const quantidade = produtoService.buscarCodigo();
            return quantidade;
        });
    }
    cadastrarProduto(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo, produto, categoria, descricao, cor, tamanho, valor, obs, status } = request.body.param;
            const produtoService = new ProdutoService_1.ProdutoService();
            const prod = produtoService.cadastrarProduto({ codigo, produto, categoria, descricao, cor, tamanho, valor, obs, status });
            return prod;
        });
    }
    listarProdutos() {
        return __awaiter(this, void 0, void 0, function* () {
            const produtoService = new ProdutoService_1.ProdutoService();
            const prod = produtoService.listarProdutos();
            return prod;
        });
    }
    listarProdutosInativos() {
        return __awaiter(this, void 0, void 0, function* () {
            const produtoService = new ProdutoService_1.ProdutoService();
            const prod = produtoService.listarProdutos(false);
            return prod;
        });
    }
    listarProdutosBalanco() {
        return __awaiter(this, void 0, void 0, function* () {
            const produtoService = new ProdutoService_1.ProdutoService();
            const prod = produtoService.listarProdutosBalanco();
            return prod;
        });
    }
    listarProdutosBalancoParam(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { filtro, dados, acao } = request.body.param;
            const produtoService = new ProdutoService_1.ProdutoService();
            const prod = produtoService.listarProdutosBalancoParam({ filtro, dados, acao });
            return prod;
        });
    }
    listarProdutosParam(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { filtro, dados, acao } = request.body.param;
            const produtoService = new ProdutoService_1.ProdutoService();
            const produtos = produtoService.listarProdutosParam({ filtro, dados, acao });
            return produtos;
        });
    }
    desativarAtivarItem(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, acao } = request.body;
            const produtoService = new ProdutoService_1.ProdutoService();
            const produtoDesativar = produtoService.desativarAtivarItem({ id, acao });
            return produtoDesativar;
        });
    }
    editarProduto(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo, produto, categoria, descricao, cor, tamanho, valor, obs, status } = request.body.param;
            const produtoService = new ProdutoService_1.ProdutoService();
            const produtoEditar = produtoService.editarProduto({ codigo, produto, categoria, descricao, cor, tamanho, valor, obs, status });
            return produtoEditar;
        });
    }
    relatorioProdutos(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { filtro, dados, ordenacao, ordenacaoordem } = request.body.param;
            const produtoService = new ProdutoService_1.ProdutoService();
            const produtos = produtoService.relatorioProdutos({ filtro, dados, ordenacao, ordenacaoordem });
            return produtos;
        });
    }
}
exports.ProdutoController = ProdutoController;
//# sourceMappingURL=ProdutoController.js.map