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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaService = void 0;
var moment_1 = __importDefault(require("moment"));
var typeorm_1 = require("typeorm");
var VendaRepositories_1 = require("../repositories/VendaRepositories");
var FechamentoService_1 = require("./FechamentoService");
var VendaService = /** @class */ (function () {
    function VendaService() {
    }
    VendaService.prototype.salvarVenda = function (dados) {
        return __awaiter(this, void 0, void 0, function () {
            var vendaRepository, fechamentoService, dataAtual, duplicados, modalidadeEscolhida, idFechamento, connection, queryRunner, idInserido_1, arrayUpdateQuantidade, err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        vendaRepository = (0, typeorm_1.getCustomRepository)(VendaRepositories_1.VendaRepositories);
                        fechamentoService = new FechamentoService_1.FechamentoService();
                        dataAtual = (0, moment_1.default)(new Date()).format("YYYY-MM-DD");
                        // ------------------------------------------------------------ Validações ------------------------------------------------------------
                        if (dados.itens.length == 0) {
                            return [2 /*return*/, { error: true, msg: "Sua lista de produtos está vazia, favor informar os produtos da venda." }];
                        }
                        duplicados = this.verItensDuplicados(dados);
                        return [4 /*yield*/, duplicados];
                    case 1:
                        if (_a.sent()) {
                            return [2 /*return*/, { error: true, msg: "Error: Você não pode adicionar dois produtos com o mesmo código." }];
                        }
                        modalidadeEscolhida = null;
                        if (dados.modalidade.dinheiro) {
                            modalidadeEscolhida = 'dinheiro';
                        }
                        else if (dados.modalidade.pix) {
                            modalidadeEscolhida = 'pix';
                        }
                        else if (dados.modalidade.credito) {
                            modalidadeEscolhida = 'credito';
                        }
                        else if (dados.modalidade.debito) {
                            modalidadeEscolhida = 'debito';
                        }
                        else if (dados.modalidade.loja) {
                            modalidadeEscolhida = 'loja';
                        }
                        else {
                            return [2 /*return*/, { error: true, msg: "Error: Você precisa informar qual a modalidade de pagamento." }];
                        }
                        return [4 /*yield*/, fechamentoService.buscarIdFechamento()];
                    case 2:
                        idFechamento = _a.sent();
                        connection = (0, typeorm_1.getConnection)();
                        queryRunner = connection.createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 10, 12, 14]);
                        dados.valores.desconto = dados.valores.desconto == '' ? null : dados.valores.desconto;
                        // Tabela de Vendas
                        //      id - autoincrement
                        //      idFechamento
                        //      dados.id_user
                        //      dados.valores.desconto
                        //      modalidadeEscolhida
                        //      dados.valores.valortotal
                        //      dataAtual
                        //      dados.obs
                        return [4 /*yield*/, queryRunner.manager.query("insert into vendas (id_fechamento, id_user, desconto, modalidade, valor_total, data, obs) values (".concat(idFechamento, ", ").concat(dados.id_user, ", ").concat(dados.valores.desconto, ", '").concat(modalidadeEscolhida, "', ").concat(dados.valores.valortotal, ", '").concat(dataAtual, "', '").concat(dados.obs, "')"))];
                    case 6:
                        // Tabela de Vendas
                        //      id - autoincrement
                        //      idFechamento
                        //      dados.id_user
                        //      dados.valores.desconto
                        //      modalidadeEscolhida
                        //      dados.valores.valortotal
                        //      dataAtual
                        //      dados.obs
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager.query("select max(id) as id_venda from vendas")];
                    case 7:
                        idInserido_1 = _a.sent();
                        arrayUpdateQuantidade = [];
                        return [4 /*yield*/, Promise.all(dados.itens.map(function (ele) { return __awaiter(_this, void 0, void 0, function () {
                                var qtdProduto, quantidadeNova;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: 
                                        // Tabela de itens
                                        //      id - autoincrment
                                        //      id_venda
                                        //      ele.id
                                        //      ele.valor
                                        //      ele.unidade
                                        //      dataAtual
                                        return [4 /*yield*/, queryRunner.manager.query("insert into itens (id_venda, id_produto, valor_atual, unidade, data) values (".concat(idInserido_1[0].id_venda, ", ").concat(ele.id, ", ").concat(ele.valor, ", ").concat(ele.unidade, ", '").concat(dataAtual, "')"))];
                                        case 1:
                                            // Tabela de itens
                                            //      id - autoincrment
                                            //      id_venda
                                            //      ele.id
                                            //      ele.valor
                                            //      ele.unidade
                                            //      dataAtual
                                            _a.sent();
                                            return [4 /*yield*/, queryRunner.manager.query("select quantidade from quantidades where id_produto = ".concat(ele.id))];
                                        case 2:
                                            qtdProduto = _a.sent();
                                            quantidadeNova = qtdProduto[0].quantidade - ele.unidade;
                                            arrayUpdateQuantidade.push({ id_produto: ele.id, qtd: quantidadeNova, qtd_saida: ele.unidade, valor: ele.valor });
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 8:
                        _a.sent();
                        arrayUpdateQuantidade.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, queryRunner.manager.query("update quantidades set quantidade = ".concat(item.qtd, " where id_produto = ").concat(item.id_produto))];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, queryRunner.manager.query("insert into estoques (id_produto, entrada, saida, saldo, valor_atual, acao) values (".concat(item.id_produto, ", null, ").concat(item.qtd_saida, ", ").concat(item.qtd, ", ").concat(item.valor, ", 'Venda')"))];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 9:
                        _a.sent();
                        return [3 /*break*/, 14];
                    case 10:
                        err_1 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 11:
                        _a.sent();
                        return [2 /*return*/, { error: true, msg: "Ocorreu um erro ao tentar realizar a venda. Favor entrar em contato com o administrador do sistema. Desculpe!" }];
                    case 12: return [4 /*yield*/, queryRunner.release()];
                    case 13:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 14: return [2 /*return*/, { error: false, msg: "Venda realizada com sucesso!" }];
                }
            });
        });
    };
    VendaService.prototype.verItensDuplicados = function (dados) {
        return __awaiter(this, void 0, void 0, function () {
            var arrayIdItens, itensIguais;
            return __generator(this, function (_a) {
                arrayIdItens = [];
                dados.itens.forEach(function (ele) {
                    arrayIdItens.push(ele.id);
                });
                itensIguais = null;
                itensIguais = arrayIdItens.filter(function (ele, pos) {
                    if (arrayIdItens.indexOf(ele) != pos) {
                        return true;
                    }
                }).length;
                if (itensIguais != 0) {
                    return [2 /*return*/, true];
                }
                return [2 /*return*/];
            });
        });
    };
    VendaService.prototype.buscarValorDia = function (idFechamento) {
        if (idFechamento === void 0) { idFechamento = null; }
        return __awaiter(this, void 0, void 0, function () {
            var vendaRepository, buscarDadosVenda, valorSomado;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (idFechamento == null) {
                            return [2 /*return*/, undefined];
                        }
                        vendaRepository = (0, typeorm_1.getCustomRepository)(VendaRepositories_1.VendaRepositories);
                        return [4 /*yield*/, vendaRepository.createQueryBuilder("vendas")
                                .where("id_fechamento = :id", { id: idFechamento })
                                .getMany()];
                    case 1:
                        buscarDadosVenda = _a.sent();
                        valorSomado = null;
                        buscarDadosVenda.forEach(function (ele, index) {
                            index == 0 ? valorSomado = ele.valor_total : valorSomado += ele.valor_total;
                        });
                        return [2 /*return*/, valorSomado];
                }
            });
        });
    };
    VendaService.prototype.listarVendas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var vendaRepository, vendas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        vendaRepository = (0, typeorm_1.getCustomRepository)(VendaRepositories_1.VendaRepositories);
                        return [4 /*yield*/, vendaRepository.createQueryBuilder("vendas").getMany()];
                    case 1:
                        vendas = _a.sent();
                        return [2 /*return*/, vendas];
                }
            });
        });
    };
    VendaService.prototype.listarVendasParam = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var filtro, dados, vendaRepository, dadosVendas, queryInicial, filtrarVendas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filtro = parseInt(param.filtro);
                        dados = param.dados;
                        vendaRepository = (0, typeorm_1.getCustomRepository)(VendaRepositories_1.VendaRepositories);
                        dadosVendas = null;
                        queryInicial = 'select * from vendas';
                        if (filtro == 1) {
                            dadosVendas = "".concat(queryInicial, " where data = '").concat(dados, "'");
                        }
                        else if (filtro == 2) {
                            dadosVendas = "".concat(queryInicial, " where modalidade like '").concat(dados, "%'");
                        }
                        else if (filtro == 3) {
                            dadosVendas = "".concat(queryInicial, " where CAST(valor_total AS TEXT) like '").concat(dados, "%'");
                        }
                        else {
                            dadosVendas = "".concat(queryInicial);
                        }
                        return [4 /*yield*/, vendaRepository.query(dadosVendas)];
                    case 1:
                        filtrarVendas = _a.sent();
                        return [2 /*return*/, filtrarVendas];
                }
            });
        });
    };
    VendaService.prototype.relatorioVendas = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var filtro, dados, dataIni, dataFim, ordenacao, ordenacaoordem, vendaRepository, dadosVendas, queryInicial, filtrarVendas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filtro = parseInt(param.filtro);
                        dados = param.dados;
                        dataIni = param.dadosdataini;
                        dataFim = param.dadosdatafim;
                        ordenacao = param.ordenacao;
                        ordenacaoordem = param.ordenacaoordem;
                        vendaRepository = (0, typeorm_1.getCustomRepository)(VendaRepositories_1.VendaRepositories);
                        dadosVendas = null;
                        queryInicial = 'select * from vendas';
                        if (filtro != 3) {
                            if (filtro == 1) {
                                dadosVendas = dados != '' ? "".concat(queryInicial, " where id = '").concat(dados, "'") : queryInicial;
                            }
                            else if (filtro == 2) {
                                dadosVendas = "".concat(queryInicial, " where modalidade like '").concat(dados, "%'");
                            }
                            else if (filtro == 4) {
                                dadosVendas = "".concat(queryInicial, " where CAST(valor_total AS TEXT) like '").concat(dados, "%'");
                            }
                            else if (filtro == 5) {
                                dadosVendas = "".concat(queryInicial, " where CAST(desconto AS TEXT) like '").concat(dados, "%'");
                            }
                            else {
                                dadosVendas = "".concat(queryInicial);
                            }
                        }
                        else {
                            if (filtro == 3) {
                                if (dataIni == '' || dataFim == '') {
                                    dadosVendas = queryInicial;
                                }
                                else {
                                    dadosVendas = "".concat(queryInicial, " where data BETWEEN '").concat(dataIni, "' and '").concat(dataFim, "'");
                                }
                            }
                            else {
                                dadosVendas = "".concat(queryInicial);
                            }
                        }
                        dadosVendas = "".concat(dadosVendas, " order by ").concat(ordenacao, " ").concat(ordenacaoordem);
                        return [4 /*yield*/, vendaRepository.query(dadosVendas)];
                    case 1:
                        filtrarVendas = _a.sent();
                        return [2 /*return*/, filtrarVendas];
                }
            });
        });
    };
    VendaService.prototype.relatorioFechamentos = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var filtro, dados, dataIni, dataFim, ordenacao, ordenacaoordem, vendaRepository, dadosVendas, queryInicial, filtrarVendas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filtro = parseInt(param.filtro);
                        dados = param.dados;
                        dataIni = param.dadosdataini;
                        dataFim = param.dadosdatafim;
                        ordenacao = param.ordenacao;
                        ordenacaoordem = param.ordenacaoordem;
                        vendaRepository = (0, typeorm_1.getCustomRepository)(VendaRepositories_1.VendaRepositories);
                        dadosVendas = null;
                        queryInicial = 'select * from fechamentos';
                        if (filtro != 3) {
                            if (filtro == 1) {
                                dadosVendas = dados != '' ? "".concat(queryInicial, " where id = '").concat(dados, "'") : queryInicial;
                            }
                            else if (filtro == 2) {
                                dadosVendas = "".concat(queryInicial, " where CAST(valor_total AS TEXT) like '").concat(dados, "%'");
                            }
                            else {
                                dadosVendas = "".concat(queryInicial);
                            }
                        }
                        else {
                            if (filtro == 3) {
                                if (dataIni == '' || dataFim == '') {
                                    dadosVendas = queryInicial;
                                }
                                else {
                                    dadosVendas = "".concat(queryInicial, " where data BETWEEN '").concat(dataIni, "' and '").concat(dataFim, "'");
                                }
                            }
                            else {
                                dadosVendas = "".concat(queryInicial);
                            }
                        }
                        dadosVendas = "".concat(dadosVendas, " order by ").concat(ordenacao, " ").concat(ordenacaoordem);
                        return [4 /*yield*/, vendaRepository.query(dadosVendas)];
                    case 1:
                        filtrarVendas = _a.sent();
                        return [2 /*return*/, filtrarVendas];
                }
            });
        });
    };
    VendaService.prototype.buscarVendasPorMes = function (interacao) {
        return __awaiter(this, void 0, void 0, function () {
            var vendaRepository, anoAtual, query, vendas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        vendaRepository = (0, typeorm_1.getCustomRepository)(VendaRepositories_1.VendaRepositories);
                        anoAtual = new Date().getFullYear();
                        query = "select count(vendas.id) as vendasmes from vendas where EXTRACT(MONTH  from vendas.data) = ".concat(interacao, " and EXTRACT(YEAR from vendas.data) = ").concat(anoAtual);
                        return [4 /*yield*/, vendaRepository.query(query)];
                    case 1:
                        vendas = _a.sent();
                        return [2 /*return*/, vendas[0].vendasmes];
                }
            });
        });
    };
    VendaService.prototype.buscarGraficoVendas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var array, i, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        array = [];
                        i = 1;
                        _c.label = 1;
                    case 1:
                        if (!(i <= 12)) return [3 /*break*/, 4];
                        _b = (_a = array).push;
                        return [4 /*yield*/, this.buscarVendasPorMes(i)];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, array];
                }
            });
        });
    };
    return VendaService;
}());
exports.VendaService = VendaService;
//# sourceMappingURL=VendaService.js.map