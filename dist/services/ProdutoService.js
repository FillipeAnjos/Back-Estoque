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
exports.ProdutoService = void 0;
const typeorm_1 = require("typeorm");
const ProdutoRepositories_1 = require("../repositories/ProdutoRepositories");
const EstoqueService_1 = require("./EstoqueService");
const QuantidadeService_1 = require("./QuantidadeService");
const ValorService_1 = require("./ValorService");
class ProdutoService {
    buscarCodigo() {
        return __awaiter(this, void 0, void 0, function* () {
            const produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
            const produto = yield produtoRepository.createQueryBuilder("produtos")
                .orderBy("produtos.id", "DESC")
                .limit(1)
                .getMany();
            var produtoId = null;
            produto.map((ele) => produtoId = ele.id);
            produtoId = produtoId + 1;
            return { success: "Retorno da quantidade de produtos.", qtd: produtoId };
        });
    }
    cadastrarProduto({ codigo, produto, categoria, descricao, cor, tamanho, valor, obs, status }) {
        return __awaiter(this, void 0, void 0, function* () {
            const produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
            const produtoSalvado = produtoRepository.create({ produto, categoria, descricao, cor, tamanho, valor, obs, status });
            var prod = yield produtoRepository.save(produtoSalvado);
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
        });
    }
    listarProdutos(ativos = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
            /*const listarProdutos = await produtoRepository.createQueryBuilder("produtos")
                                    .where('status = :condition', { condition: true })
                                    .orderBy("produtos.id", "ASC")
                                    .getMany();*/
            const listarProdutos = yield produtoRepository
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
        });
    }
    listarProdutosBalancoParam({ filtro, dados, acao }) {
        return __awaiter(this, void 0, void 0, function* () {
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
            var filtrarProdutos = yield produtoRepository.query(dadosProdutos);
            return filtrarProdutos;
        });
    }
    listarProdutosParam({ filtro, dados, acao }) {
        return __awaiter(this, void 0, void 0, function* () {
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
            var filtrarProdutos = yield produtoRepository.query(dadosProdutos);
            return filtrarProdutos;
        });
    }
    listarProdutosBalanco() {
        return __awaiter(this, void 0, void 0, function* () {
            const produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
            /*const listarProdutos = await produtoRepository.createQueryBuilder("produtos")
                                    .where('status = :condition', { condition: true })
                                    .orderBy("produtos.id", "ASC")
                                    .getMany();*/
            const listarProdutos = yield produtoRepository
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
        });
    }
    desativarAtivarItem({ id, acao }) {
        return __awaiter(this, void 0, void 0, function* () {
            const produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
            if (!id) {
                return { error: "Erro código invalido." };
            }
            const produto = yield produtoRepository.createQueryBuilder("produtos")
                .update("produtos")
                .set({ status: acao })
                .where("id = :id", { id: id })
                .execute();
            if (!produto) {
                return { error: "Erro ao tentar desativar o item." };
            }
            return acao == false ? { success: "Produto desativado com sucesso." } : { success: "Produto ativado com sucesso." };
        });
    }
    editarProduto({ codigo, produto, categoria, descricao, cor, tamanho, valor, obs, status }) {
        return __awaiter(this, void 0, void 0, function* () {
            const produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
            const produtoEditar = { produto, categoria, descricao, cor, tamanho, valor, obs, status };
            const prodSalved = yield produtoRepository.createQueryBuilder("produtos")
                .update("produtos")
                .set(produtoEditar)
                .where("id = :id", { id: codigo })
                .execute();
            if (!prodSalved) {
                return { error: "Erro ao atualizar o produto." };
            }
            const valorService = new ValorService_1.ValorService();
            valorService.salvarValor(codigo, valor);
            var produtosListados = yield this.listarProdutos(status);
            return { success: "Produto atualizado com sucesso.", prod: produtosListados };
        });
    }
    relatorioProdutos(param) {
        return __awaiter(this, void 0, void 0, function* () {
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
            //console.log(dadosProdutos);
            var filtrarProdutos = yield produtoRepository.query(dadosProdutos);
            return filtrarProdutos;
        });
    }
}
exports.ProdutoService = ProdutoService;
//# sourceMappingURL=ProdutoService.js.map