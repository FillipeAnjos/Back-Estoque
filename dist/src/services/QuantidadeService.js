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
exports.QuantidadeService = void 0;
var typeorm_1 = require("typeorm");
var QuantidadeRepositories_1 = require("../repositories/QuantidadeRepositories");
var EstoqueService_1 = require("./EstoqueService");
var QuantidadeService = (function () {
    function QuantidadeService() {
    }
    QuantidadeService.prototype.salvarQuantidade = function (dados) {
        return __awaiter(this, void 0, void 0, function () {
            var quantidadeRepository, salvarQuantidade, salvarqtd;
            return __generator(this, function (_a) {
                quantidadeRepository = (0, typeorm_1.getCustomRepository)(QuantidadeRepositories_1.QuantidadeRepositories);
                salvarQuantidade = quantidadeRepository.create(dados);
                salvarqtd = quantidadeRepository.save(salvarQuantidade);
                if (!salvarqtd) {
                    return [2, { error: "Erro ao salvar a quantidade do produto." }];
                }
                return [2];
            });
        });
    };
    QuantidadeService.prototype.editarUnidade = function (dados) {
        return __awaiter(this, void 0, void 0, function () {
            var id_produto, valor, entrada_saida, unidade, acao, quantidadeRepository, dadosQuantidade, quantidade, quantidadeNova, estoqueService, dadosEstoque, darEntrada, darSaida;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id_produto = dados.id_produto, valor = dados.valor, entrada_saida = dados.entrada_saida, unidade = dados.unidade, acao = dados.acao;
                        quantidadeRepository = (0, typeorm_1.getCustomRepository)(QuantidadeRepositories_1.QuantidadeRepositories);
                        return [4, quantidadeRepository.createQueryBuilder("quantidades")
                                .where("id_produto = :id_produto", { id_produto: id_produto })
                                .getOne()];
                    case 1:
                        dadosQuantidade = _a.sent();
                        quantidade = dadosQuantidade.quantidade;
                        quantidadeNova = null;
                        estoqueService = new EstoqueService_1.EstoqueService();
                        dadosEstoque = null;
                        if (entrada_saida == '1') {
                            quantidadeNova = quantidade + unidade;
                            darEntrada = quantidadeRepository.createQueryBuilder("quantidades")
                                .update("quantidades")
                                .set({ quantidade: quantidadeNova })
                                .where("id_produto = :id_produto", { id_produto: id_produto })
                                .execute();
                            if (!darEntrada) {
                                return [2, { error: "Ocorreu um erro ao atualizar a quantidade de entrada." }];
                            }
                            dadosEstoque = {
                                id_produto: id_produto,
                                entrada: unidade,
                                saida: null,
                                saldo: quantidadeNova,
                                valor_atual: valor,
                                acao: acao
                            };
                            estoqueService.salvarItemEstoque(dadosEstoque);
                            return [2, { success: "Quantidade atualizada com sucesso." }];
                        }
                        if (entrada_saida == '0') {
                            if (quantidade < unidade) {
                                return [2, { error: "Você não pode dar uma quantidade de saída maior que sua quantidade em estoque." }];
                            }
                            quantidadeNova = quantidade - unidade;
                            darSaida = quantidadeRepository.createQueryBuilder("quantidades")
                                .update("quantidades")
                                .set({ quantidade: quantidadeNova })
                                .where("id_produto = :id_produto", { id_produto: id_produto })
                                .execute();
                            if (!darSaida) {
                                return [2, { error: "Ocorreu um erro ao atualizar a quantidade de saída." }];
                            }
                            dadosEstoque = {
                                id_produto: id_produto,
                                entrada: null,
                                saida: unidade,
                                saldo: quantidadeNova,
                                valor_atual: valor,
                                acao: acao
                            };
                            estoqueService.salvarItemEstoque(dadosEstoque);
                            return [2, { success: "Quantidade atualizada com sucesso." }];
                        }
                        return [2];
                }
            });
        });
    };
    QuantidadeService.prototype.verificarQuantidadeItem = function (_a) {
        var id_produto = _a.id_produto, unidade = _a.unidade;
        return __awaiter(this, void 0, void 0, function () {
            var quantidadeRepository, dadosQuantidade, quantidade;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        quantidadeRepository = (0, typeorm_1.getCustomRepository)(QuantidadeRepositories_1.QuantidadeRepositories);
                        return [4, quantidadeRepository.createQueryBuilder("quantidades")
                                .where("id_produto = :id_produto", { id_produto: id_produto })
                                .getOne()];
                    case 1:
                        dadosQuantidade = _b.sent();
                        quantidade = dadosQuantidade.quantidade;
                        if (unidade > quantidade) {
                            return [2, { error: "A quantidade escolhida não pode ser maior que a quantidade em loja." }];
                        }
                        if (unidade <= 0) {
                            return [2, { error: "A quantidade escolhida tem que ser maior que zero." }];
                        }
                        return [2, unidade];
                }
            });
        });
    };
    return QuantidadeService;
}());
exports.QuantidadeService = QuantidadeService;
