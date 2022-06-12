import { ProdutoService } from "../services/ProdutoService";
class ProdutoController {
    async buscarCodigo() {
        const produtoService = new ProdutoService();
        const quantidade = produtoService.buscarCodigo();
        return quantidade;
    }
    async cadastrarProduto(request, response) {
        const { codigo, produto, categoria, descricao, cor, tamanho, valor, obs, status } = request.body.param;
        const produtoService = new ProdutoService();
        const prod = produtoService.cadastrarProduto({ codigo, produto, categoria, descricao, cor, tamanho, valor, obs, status });
        return prod;
    }
    async listarProdutos() {
        const produtoService = new ProdutoService();
        const prod = produtoService.listarProdutos();
        return prod;
    }
    async listarProdutosInativos() {
        const produtoService = new ProdutoService();
        const prod = produtoService.listarProdutos(false);
        return prod;
    }
    async listarProdutosBalanco() {
        const produtoService = new ProdutoService();
        const prod = produtoService.listarProdutosBalanco();
        return prod;
    }
    async listarProdutosBalancoParam(request, response) {
        const { filtro, dados, acao } = request.body.param;
        const produtoService = new ProdutoService();
        const prod = produtoService.listarProdutosBalancoParam({ filtro, dados, acao });
        return prod;
    }
    async listarProdutosParam(request, response) {
        const { filtro, dados, acao } = request.body.param;
        const produtoService = new ProdutoService();
        const produtos = produtoService.listarProdutosParam({ filtro, dados, acao });
        return produtos;
    }
    async desativarAtivarItem(request, response) {
        const { id, acao } = request.body;
        const produtoService = new ProdutoService();
        const produtoDesativar = produtoService.desativarAtivarItem({ id, acao });
        return produtoDesativar;
    }
    async editarProduto(request, response) {
        const { codigo, produto, categoria, descricao, cor, tamanho, valor, obs, status } = request.body.param;
        const produtoService = new ProdutoService();
        const produtoEditar = produtoService.editarProduto({ codigo, produto, categoria, descricao, cor, tamanho, valor, obs, status });
        return produtoEditar;
    }
    async relatorioProdutos(request, response) {
        const { filtro, dados, ordenacao, ordenacaoordem } = request.body.param;
        const produtoService = new ProdutoService();
        const produtos = produtoService.relatorioProdutos({ filtro, dados, ordenacao, ordenacaoordem });
        return produtos;
    }
}
export { ProdutoController };
//# sourceMappingURL=ProdutoController.js.map