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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoService = void 0;
var typeorm_1 = require("typeorm");
var ProdutoRepositories_1 = require("../repositories/ProdutoRepositories");
var EstoqueService_1 = require("./EstoqueService");
var QuantidadeService_1 = require("./QuantidadeService");
var ValorService_1 = require("./ValorService");
var ProdutoService = /** @class */ (function () {
    function ProdutoService() {
    }
    ProdutoService.prototype.buscarCodigo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var produtoRepository, produto, produtoId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
                        return [4 /*yield*/, produtoRepository.createQueryBuilder("produtos")
                                .orderBy("produtos.id", "DESC")
                                .limit(1)
                                .getMany()];
                    case 1:
                        produto = _a.sent();
                        produtoId = null;
                        produto.map(function (ele) { return produtoId = ele.id; });
                        produtoId = produtoId + 1;
                        return [2 /*return*/, { success: "Retorno da quantidade de produtos.", qtd: produtoId }];
                }
            });
        });
    };
    ProdutoService.prototype.cadastrarProduto = function (_a) {
        var codigo = _a.codigo, produto = _a.produto, categoria = _a.categoria, descricao = _a.descricao, cor = _a.cor, tamanho = _a.tamanho, valor = _a.valor, obs = _a.obs, status = _a.status;
        return __awaiter(this, void 0, void 0, function () {
            var produtoRepository, produtoSalvado, prod, valorService, quantidadeService, dadosQuantidade, salvarItem, dadosSalvarItemEstoque;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
                        produtoSalvado = produtoRepository.create({ produto: produto, categoria: categoria, descricao: descricao, cor: cor, tamanho: tamanho, valor: valor, obs: obs, status: status });
                        return [4 /*yield*/, produtoRepository.save(produtoSalvado)];
                    case 1:
                        prod = _b.sent();
                        if (!prod) {
                            return [2 /*return*/, { error: "Erro ao salvar o produto." }];
                        }
                        valorService = new ValorService_1.ValorService();
                        valorService.salvarValor(codigo, valor);
                        quantidadeService = new QuantidadeService_1.QuantidadeService();
                        dadosQuantidade = {
                            id_produto: codigo,
                            quantidade: 1
                        };
                        quantidadeService.salvarQuantidade(dadosQuantidade);
                        salvarItem = new EstoqueService_1.EstoqueService();
                        dadosSalvarItemEstoque = {
                            id_produto: codigo,
                            entrada: 1,
                            saida: null,
                            saldo: 1,
                            valor_atual: valor,
                            acao: 'Cadastro',
                        };
                        salvarItem.salvarItemEstoque(dadosSalvarItemEstoque);
                        return [2 /*return*/, { success: "Produto salvo com sucesso.", prod: prod }];
                }
            });
        });
    };
    ProdutoService.prototype.listarProdutos = function (ativos) {
        if (ativos === void 0) { ativos = true; }
        return __awaiter(this, void 0, void 0, function () {
            var produtoRepository, listarProdutos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
                        return [4 /*yield*/, produtoRepository
                                .query("select p.id as id,\n                                p.produto as produto,\n                                p.categoria as categoria,\n                                p.descricao as descricao,\n                                p.cor as cor,\n                                p.tamanho as tamanho,\n                                p.obs as obs,\n                                p.valor as valor,\n                                p.\"status\" as status,\n                                q.quantidade as quantidade from produtos as p inner join quantidades as q on p.id = q.id_produto where p.status = ".concat(ativos, " order by p.id ASC"))];
                    case 1:
                        listarProdutos = _a.sent();
                        return [2 /*return*/, listarProdutos];
                }
            });
        });
    };
    ProdutoService.prototype.listarProdutosBalancoParam = function (_a) {
        var filtro = _a.filtro, dados = _a.dados, acao = _a.acao;
        return __awaiter(this, void 0, void 0, function () {
            var produtoRepository, dadosProdutos, queryInicial, filtrarProdutos;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
                        dadosProdutos = null;
                        queryInicial = "select \n        p.id as id,\n        p.produto as produto,\n        p.categoria as categoria,\n        p.descricao as descricao,\n        p.cor as cor,\n        p.tamanho as tamanho,\n        p.obs as obs,\n        p.valor as valor,\n        p.\"status\" as status,\n        q.quantidade as quantidade\n         from produtos as p inner join quantidades as q on p.id = q.id_produto";
                        if (filtro == 1) {
                            dadosProdutos = "".concat(queryInicial, " where p.produto like '").concat(dados, "%' ");
                        }
                        else if (filtro == 2) {
                            dadosProdutos = "".concat(queryInicial, " where p.categoria like '").concat(dados, "%' ");
                        }
                        else if (filtro == 3) {
                            dadosProdutos = "".concat(queryInicial, " where p.descricao like '").concat(dados, "%' ");
                        }
                        else if (filtro == 4) {
                            dadosProdutos = "".concat(queryInicial, " where p.tamanho like '").concat(dados, "%' ");
                        }
                        else {
                            dadosProdutos = "".concat(queryInicial);
                        }
                        return [4 /*yield*/, produtoRepository.query(dadosProdutos)];
                    case 1:
                        filtrarProdutos = _b.sent();
                        return [2 /*return*/, filtrarProdutos];
                }
            });
        });
    };
    ProdutoService.prototype.listarProdutosParam = function (_a) {
        var filtro = _a.filtro, dados = _a.dados, acao = _a.acao;
        return __awaiter(this, void 0, void 0, function () {
            var produtoRepository, dadosProdutos, queryInicial, filtrarProdutos;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
                        dadosProdutos = null;
                        queryInicial = "select p.id as id,\n        p.produto as produto,\n        p.categoria as categoria,\n        p.descricao as descricao,\n        p.cor as cor,\n        p.tamanho as tamanho,\n        p.obs as obs,\n        p.valor as valor,\n        p.\"status\" as status,\n        q.quantidade as quantidade from produtos as p inner join quantidades as q on p.id = q.id_produto";
                        if (filtro == 1) {
                            dadosProdutos = "".concat(queryInicial, " where p.produto like '").concat(dados, "%' and p.status = ").concat(acao);
                        }
                        else if (filtro == 2) {
                            dadosProdutos = "".concat(queryInicial, " where p.categoria like '").concat(dados, "%' and p.status = ").concat(acao);
                        }
                        else if (filtro == 3) {
                            dadosProdutos = "".concat(queryInicial, " where p.descricao like '").concat(dados, "%' and p.status = ").concat(acao);
                        }
                        else if (filtro == 4) {
                            dadosProdutos = "".concat(queryInicial, " where p.tamanho like '").concat(dados, "%' and p.status = ").concat(acao);
                        }
                        else {
                            dadosProdutos = "".concat(queryInicial, " where p.status = ").concat(acao);
                        }
                        return [4 /*yield*/, produtoRepository.query(dadosProdutos)];
                    case 1:
                        filtrarProdutos = _b.sent();
                        return [2 /*return*/, filtrarProdutos];
                }
            });
        });
    };
    ProdutoService.prototype.listarProdutosBalanco = function () {
        return __awaiter(this, void 0, void 0, function () {
            var produtoRepository, listarProdutos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
                        return [4 /*yield*/, produtoRepository
                                .query("select \n                                p.id as id,\n                                p.produto as produto,\n                                p.categoria as categoria,\n                                p.descricao as descricao,\n                                p.cor as cor,\n                                p.tamanho as tamanho,\n                                p.obs as obs,\n                                p.valor as valor,\n                                p.\"status\" as status,\n                                q.quantidade as quantidade\n                                 from produtos as p inner join quantidades as q on p.id = q.id_produto order by p.id ASC")];
                    case 1:
                        listarProdutos = _a.sent();
                        return [2 /*return*/, listarProdutos];
                }
            });
        });
    };
    ProdutoService.prototype.desativarAtivarItem = function (_a) {
        var id = _a.id, acao = _a.acao;
        return __awaiter(this, void 0, void 0, function () {
            var produtoRepository, produto;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
                        if (!id) {
                            return [2 /*return*/, { error: "Erro código invalido." }];
                        }
                        return [4 /*yield*/, produtoRepository.createQueryBuilder("produtos")
                                .update("produtos")
                                .set({ status: acao })
                                .where("id = :id", { id: id })
                                .execute()];
                    case 1:
                        produto = _b.sent();
                        if (!produto) {
                            return [2 /*return*/, { error: "Erro ao tentar desativar o item." }];
                        }
                        return [2 /*return*/, acao == false ? { success: "Produto desativado com sucesso." } : { success: "Produto ativado com sucesso." }];
                }
            });
        });
    };
    ProdutoService.prototype.editarProduto = function (_a) {
        var codigo = _a.codigo, produto = _a.produto, categoria = _a.categoria, descricao = _a.descricao, cor = _a.cor, tamanho = _a.tamanho, valor = _a.valor, obs = _a.obs, status = _a.status;
        return __awaiter(this, void 0, void 0, function () {
            var produtoRepository, produtoEditar, prodSalved, valorService, produtosListados;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
                        produtoEditar = { produto: produto, categoria: categoria, descricao: descricao, cor: cor, tamanho: tamanho, valor: valor, obs: obs, status: status };
                        return [4 /*yield*/, produtoRepository.createQueryBuilder("produtos")
                                .update("produtos")
                                .set(produtoEditar)
                                .where("id = :id", { id: codigo })
                                .execute()];
                    case 1:
                        prodSalved = _b.sent();
                        if (!prodSalved) {
                            return [2 /*return*/, { error: "Erro ao atualizar o produto." }];
                        }
                        valorService = new ValorService_1.ValorService();
                        valorService.salvarValor(codigo, valor);
                        return [4 /*yield*/, this.listarProdutos(status)];
                    case 2:
                        produtosListados = _b.sent();
                        return [2 /*return*/, { success: "Produto atualizado com sucesso.", prod: produtosListados }];
                }
            });
        });
    };
    ProdutoService.prototype.relatorioProdutos = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var filtro, dados, ordenacao, ordenacaoordem, produtoRepository, dadosProdutos, queryInicial, filtrarProdutos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filtro = parseInt(param.filtro);
                        dados = param.dados;
                        ordenacao = param.ordenacao;
                        ordenacaoordem = param.ordenacaoordem;
                        produtoRepository = (0, typeorm_1.getCustomRepository)(ProdutoRepositories_1.ProdutoRepositories);
                        dadosProdutos = null;
                        queryInicial = "select p.id as id,\n        p.produto as produto,\n        p.categoria as categoria,\n        p.descricao as descricao,\n        p.cor as cor,\n        p.tamanho as tamanho,\n        p.obs as obs,\n        p.valor as valor,\n        p.\"status\" as status,\n        q.quantidade as quantidade from produtos p inner join quantidades q on p.id = q.id_produto";
                        if (filtro == 1) {
                            dadosProdutos = dados != '' ? "".concat(queryInicial, " where id = '").concat(dados, "'") : queryInicial;
                        }
                        else if (filtro == 2) {
                            dadosProdutos = "".concat(queryInicial, " where p.produto like '").concat(dados, "%'");
                        }
                        else if (filtro == 3) {
                            dadosProdutos = "".concat(queryInicial, " where p.categoria like '").concat(dados, "%'");
                        }
                        else if (filtro == 4) {
                            dadosProdutos = "".concat(queryInicial, " where p.descricao like '").concat(dados, "%'");
                        }
                        else if (filtro == 5) {
                            dadosProdutos = "".concat(queryInicial, " where p.cor like '").concat(dados, "%'");
                        }
                        else if (filtro == 6) {
                            dadosProdutos = "".concat(queryInicial, " where p.obs like '").concat(dados, "%'");
                        }
                        else if (filtro == 7) {
                            dadosProdutos = "".concat(queryInicial, " where CAST(p.valor AS TEXT) like '").concat(dados, "%'");
                        }
                        else if (filtro == 8) {
                            dadosProdutos = "".concat(queryInicial, " where p.status = true");
                        }
                        else if (filtro == 9) {
                            dadosProdutos = "".concat(queryInicial, " where p.status = false");
                        }
                        else if (filtro == 10) {
                            dadosProdutos = "".concat(queryInicial, " where q.quantidade = '").concat(dados, "'");
                        }
                        else {
                            dadosProdutos = "".concat(queryInicial);
                        }
                        dadosProdutos = "".concat(dadosProdutos, " order by ").concat(ordenacao, " ").concat(ordenacaoordem);
                        return [4 /*yield*/, produtoRepository.query(dadosProdutos)];
                    case 1:
                        filtrarProdutos = _a.sent();
                        return [2 /*return*/, filtrarProdutos];
                }
            });
        });
    };
    return ProdutoService;
}());
exports.ProdutoService = ProdutoService;
//# sourceMappingURL=ProdutoService.js.map