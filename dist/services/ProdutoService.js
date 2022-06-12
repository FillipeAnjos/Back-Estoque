"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoService = void 0;
const typeorm_1 = require("typeorm");
const ProdutoRepositories_1 = require("../repositories/ProdutoRepositories");
const EstoqueService_1 = require("./EstoqueService");
const QuantidadeService_1 = require("./QuantidadeService");
const ValorService_1 = require("./ValorService");
class ProdutoService {
    async buscarCodigo() {
        const produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
        const produto = await produtoRepository.createQueryBuilder("produtos")
            .orderBy("produtos.id", "DESC")
            .limit(1)
            .getMany();
        var produtoId = null;
        produto.map((ele) => produtoId = ele.id);
        produtoId = produtoId + 1;
        return { success: "Retorno da quantidade de produtos.", qtd: produtoId };
    }
    async cadastrarProduto({ codigo, produto, categoria, descricao, cor, tamanho, valor, obs, status }) {
        const produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
        const produtoSalvado = produtoRepository.create({ produto, categoria, descricao, cor, tamanho, valor, obs, status });
        var prod = await produtoRepository.save(produtoSalvado);
        if (!prod) {
            return { error: "Erro ao salvar o produto." };
        }
        const valorService = new ValorService_1.ValorService();
        valorService.salvarValor(codigo, valor);
        const quantidadeService = new QuantidadeService_1.QuantidadeService();
        var dadosQuantidade = {
            id_produto: codigo,
            quantidade: 1
        };
        quantidadeService.salvarQuantidade(dadosQuantidade);
        const salvarItem = new EstoqueService_1.EstoqueService();
        var dadosSalvarItemEstoque = {
            id_produto: codigo,
            entrada: 1,
            saida: null,
            saldo: 1,
            valor_atual: valor,
            acao: 'Cadastro',
        };
        salvarItem.salvarItemEstoque(dadosSalvarItemEstoque);
        return { success: "Produto salvo com sucesso.", prod };
    }
    async listarProdutos(ativos = true) {
        const produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
        const listarProdutos = await produtoRepository
            .query(`select p.id as id,
                                p.produto as produto,
                                p.categoria as categoria,
                                p.descricao as descricao,
                                p.cor as cor,
                                p.tamanho as tamanho,
                                p.obs as obs,
                                p.valor as valor,
                                p."status" as status,
                                q.quantidade as quantidade from produtos as p inner join quantidades as q on p.id = q.id_produto where p.status = ${ativos} order by p.id ASC`);
        return listarProdutos;
    }
    async listarProdutosBalancoParam({ filtro, dados, acao }) {
        let produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
        let dadosProdutos = null;
        let queryInicial = `select 
        p.id as id,
        p.produto as produto,
        p.categoria as categoria,
        p.descricao as descricao,
        p.cor as cor,
        p.tamanho as tamanho,
        p.obs as obs,
        p.valor as valor,
        p."status" as status,
        q.quantidade as quantidade
         from produtos as p inner join quantidades as q on p.id = q.id_produto`;
        if (filtro == 1) {
            dadosProdutos = `${queryInicial} where p.produto like '${dados}%' `;
        }
        else if (filtro == 2) {
            dadosProdutos = `${queryInicial} where p.categoria like '${dados}%' `;
        }
        else if (filtro == 3) {
            dadosProdutos = `${queryInicial} where p.descricao like '${dados}%' `;
        }
        else if (filtro == 4) {
            dadosProdutos = `${queryInicial} where p.tamanho like '${dados}%' `;
        }
        else {
            dadosProdutos = `${queryInicial}`;
        }
        var filtrarProdutos = await produtoRepository.query(dadosProdutos);
        return filtrarProdutos;
    }
    async listarProdutosParam({ filtro, dados, acao }) {
        let produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
        let dadosProdutos = null;
        let queryInicial = `select p.id as id,
        p.produto as produto,
        p.categoria as categoria,
        p.descricao as descricao,
        p.cor as cor,
        p.tamanho as tamanho,
        p.obs as obs,
        p.valor as valor,
        p."status" as status,
        q.quantidade as quantidade from produtos as p inner join quantidades as q on p.id = q.id_produto`;
        if (filtro == 1) {
            dadosProdutos = `${queryInicial} where p.produto like '${dados}%' and p.status = ${acao}`;
        }
        else if (filtro == 2) {
            dadosProdutos = `${queryInicial} where p.categoria like '${dados}%' and p.status = ${acao}`;
        }
        else if (filtro == 3) {
            dadosProdutos = `${queryInicial} where p.descricao like '${dados}%' and p.status = ${acao}`;
        }
        else if (filtro == 4) {
            dadosProdutos = `${queryInicial} where p.tamanho like '${dados}%' and p.status = ${acao}`;
        }
        else {
            dadosProdutos = `${queryInicial} where p.status = ${acao}`;
        }
        var filtrarProdutos = await produtoRepository.query(dadosProdutos);
        return filtrarProdutos;
    }
    async listarProdutosBalanco() {
        const produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
        const listarProdutos = await produtoRepository
            .query(`select 
                                p.id as id,
                                p.produto as produto,
                                p.categoria as categoria,
                                p.descricao as descricao,
                                p.cor as cor,
                                p.tamanho as tamanho,
                                p.obs as obs,
                                p.valor as valor,
                                p."status" as status,
                                q.quantidade as quantidade
                                 from produtos as p inner join quantidades as q on p.id = q.id_produto order by p.id ASC`);
        return listarProdutos;
    }
    async desativarAtivarItem({ id, acao }) {
        const produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
        if (!id) {
            return { error: "Erro código invalido." };
        }
        const produto = await produtoRepository.createQueryBuilder("produtos")
            .update("produtos")
            .set({ status: acao })
            .where("id = :id", { id: id })
            .execute();
        if (!produto) {
            return { error: "Erro ao tentar desativar o item." };
        }
        return acao == false ? { success: "Produto desativado com sucesso." } : { success: "Produto ativado com sucesso." };
    }
    async editarProduto({ codigo, produto, categoria, descricao, cor, tamanho, valor, obs, status }) {
        const produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
        const produtoEditar = { produto, categoria, descricao, cor, tamanho, valor, obs, status };
        const prodSalved = await produtoRepository.createQueryBuilder("produtos")
            .update("produtos")
            .set(produtoEditar)
            .where("id = :id", { id: codigo })
            .execute();
        if (!prodSalved) {
            return { error: "Erro ao atualizar o produto." };
        }
        const valorService = new ValorService_1.ValorService();
        valorService.salvarValor(codigo, valor);
        var produtosListados = await this.listarProdutos(status);
        return { success: "Produto atualizado com sucesso.", prod: produtosListados };
    }
    async relatorioProdutos(param) {
        var filtro = parseInt(param.filtro);
        var dados = param.dados;
        var ordenacao = param.ordenacao;
        var ordenacaoordem = param.ordenacaoordem;
        const produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
        let dadosProdutos = null;
        let queryInicial = `select p.id as id,
        p.produto as produto,
        p.categoria as categoria,
        p.descricao as descricao,
        p.cor as cor,
        p.tamanho as tamanho,
        p.obs as obs,
        p.valor as valor,
        p."status" as status,
        q.quantidade as quantidade from produtos p inner join quantidades q on p.id = q.id_produto`;
        if (filtro == 1) {
            dadosProdutos = dados != '' ? `${queryInicial} where id = '${dados}'` : queryInicial;
        }
        else if (filtro == 2) {
            dadosProdutos = `${queryInicial} where p.produto like '${dados}%'`;
        }
        else if (filtro == 3) {
            dadosProdutos = `${queryInicial} where p.categoria like '${dados}%'`;
        }
        else if (filtro == 4) {
            dadosProdutos = `${queryInicial} where p.descricao like '${dados}%'`;
        }
        else if (filtro == 5) {
            dadosProdutos = `${queryInicial} where p.cor like '${dados}%'`;
        }
        else if (filtro == 6) {
            dadosProdutos = `${queryInicial} where p.obs like '${dados}%'`;
        }
        else if (filtro == 7) {
            dadosProdutos = `${queryInicial} where CAST(p.valor AS TEXT) like '${dados}%'`;
        }
        else if (filtro == 8) {
            dadosProdutos = `${queryInicial} where p.status = true`;
        }
        else if (filtro == 9) {
            dadosProdutos = `${queryInicial} where p.status = false`;
        }
        else if (filtro == 10) {
            dadosProdutos = `${queryInicial} where q.quantidade = '${dados}'`;
        }
        else {
            dadosProdutos = `${queryInicial}`;
        }
        dadosProdutos = `${dadosProdutos} order by ${ordenacao} ${ordenacaoordem}`;
        var filtrarProdutos = await produtoRepository.query(dadosProdutos);
        return filtrarProdutos;
    }
}
exports.ProdutoService = ProdutoService;
//# sourceMappingURL=ProdutoService.js.map