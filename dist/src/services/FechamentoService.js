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
exports.FechamentoService = void 0;
var typeorm_1 = require("typeorm");
var FechamentoRepositories_1 = require("../repositories/FechamentoRepositories");
var moment_1 = __importDefault(require("moment"));
var VendaService_1 = require("./VendaService");
var FechamentoService = (function () {
    function FechamentoService() {
    }
    FechamentoService.prototype.varStatusDataAterior = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fechamentoRepository, dataAtual, verificarDataCaixa;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fechamentoRepository = (0, typeorm_1.getCustomRepository)(FechamentoRepositories_1.FechamentoRepositories);
                        dataAtual = new Date();
                        return [4, fechamentoRepository.createQueryBuilder("fechamentos")
                                .where("data < :dataatual", { dataatual: dataAtual })
                                .andWhere("status = :status", { status: true })
                                .getOne()];
                    case 1:
                        verificarDataCaixa = _a.sent();
                        return [2, verificarDataCaixa != undefined ? verificarDataCaixa : true];
                }
            });
        });
    };
    FechamentoService.prototype.buscarStatusCaixa = function () {
        return __awaiter(this, void 0, void 0, function () {
            var statusAnterior, fechamentoRepository, dataAtual, verificarDataCaixa, verificarStatusCaixa;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.varStatusDataAterior()];
                    case 1:
                        statusAnterior = _a.sent();
                        if (statusAnterior != true) {
                            return [2, statusAnterior];
                        }
                        fechamentoRepository = (0, typeorm_1.getCustomRepository)(FechamentoRepositories_1.FechamentoRepositories);
                        dataAtual = (0, moment_1.default)(new Date()).format("YYYY-MM-DD");
                        return [4, fechamentoRepository.createQueryBuilder("fechamentos")
                                .where("data = :dataatual", { dataatual: dataAtual })
                                .getOne()];
                    case 2:
                        verificarDataCaixa = _a.sent();
                        if (!(verificarDataCaixa == undefined)) return [3, 3];
                        return [2, { caixa: 1, msg: '' }];
                    case 3: return [4, fechamentoRepository.createQueryBuilder("fechamentos")
                            .where("data = :dataatual", { dataatual: dataAtual })
                            .andWhere("status = :status", { status: true })
                            .getOne()];
                    case 4:
                        verificarStatusCaixa = _a.sent();
                        if (verificarStatusCaixa != undefined) {
                            return [2, { caixa: 2, msg: 'Caixa aberto com sucesso. Ótimo trabalho ...' }];
                        }
                        else {
                            return [2, { caixa: 3, msg: 'Caixa fechado com sucesso. Até amanhã ...' }];
                        }
                        _a.label = 5;
                    case 5: return [2];
                }
            });
        });
    };
    FechamentoService.prototype.fechamentoSalvar = function (_a) {
        var valor_total = _a.valor_total, data = _a.data, status = _a.status;
        return __awaiter(this, void 0, void 0, function () {
            var dataAtual, fechamentoRepository, fechamentoSalvado, fechar, retorno, fechamentoEditar, fechamentoUpdate, retorno;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        dataAtual = (0, moment_1.default)(new Date()).format("YYYY-MM-DD");
                        fechamentoRepository = (0, typeorm_1.getCustomRepository)(FechamentoRepositories_1.FechamentoRepositories);
                        if (!(status == true)) return [3, 3];
                        fechamentoSalvado = fechamentoRepository.create({ valor_total: valor_total, data: new Date(), status: status });
                        return [4, fechamentoRepository.save(fechamentoSalvado)];
                    case 1:
                        fechar = _b.sent();
                        if (!fechar) {
                            return [2, { error: "Erro salvar na fechamento." }];
                        }
                        return [4, this.buscarStatusCaixa()];
                    case 2:
                        retorno = _b.sent();
                        return [2, retorno];
                    case 3:
                        fechamentoEditar = { valor_total: valor_total, data: new Date(), status: status };
                        return [4, fechamentoRepository.createQueryBuilder("fechamentos")
                                .update("fechamentos")
                                .set(fechamentoEditar)
                                .where("data = :dataatual", { dataatual: dataAtual })
                                .execute()];
                    case 4:
                        fechamentoUpdate = _b.sent();
                        if (!fechamentoUpdate) {
                            return [2, { error: "Erro ao atualizar o fechamento." }];
                        }
                        return [4, this.buscarStatusCaixa()];
                    case 5:
                        retorno = _b.sent();
                        return [2, retorno];
                }
            });
        });
    };
    FechamentoService.prototype.fechamentoSalvarAnterior = function (_a) {
        var valor_total = _a.valor_total, data = _a.data, status = _a.status;
        return __awaiter(this, void 0, void 0, function () {
            var fechamentoRepository, fechamentoEditarAnterior, fechamentoUpdateAnterior, retorno;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        fechamentoRepository = (0, typeorm_1.getCustomRepository)(FechamentoRepositories_1.FechamentoRepositories);
                        fechamentoEditarAnterior = { valor_total: valor_total, data: data, status: status };
                        return [4, fechamentoRepository.createQueryBuilder("fechamentos")
                                .update("fechamentos")
                                .set(fechamentoEditarAnterior)
                                .where("data = :dataantiga", { dataantiga: data })
                                .execute()];
                    case 1:
                        fechamentoUpdateAnterior = _b.sent();
                        if (!fechamentoUpdateAnterior) {
                            return [2, { error: "Erro ao tentar atualizar o fechamento antigo." }];
                        }
                        return [4, this.buscarStatusCaixa()];
                    case 2:
                        retorno = _b.sent();
                        return [2, retorno];
                }
            });
        });
    };
    FechamentoService.prototype.buscarIdFechamento = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fechamentoRepository, idFechamento, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fechamentoRepository = (0, typeorm_1.getCustomRepository)(FechamentoRepositories_1.FechamentoRepositories);
                        return [4, fechamentoRepository.createQueryBuilder("fechamentos")
                                .where("valor_total = :vl", { vl: 0 })
                                .andWhere("status = :status", { status: true })
                                .getOne()];
                    case 1:
                        idFechamento = _a.sent();
                        id = idFechamento.id;
                        return [2, id];
                }
            });
        });
    };
    FechamentoService.prototype.buscarVendasDia = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fechamentoRepository, fechamentoDia, id, vendaService, valorVendaDia;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        fechamentoRepository = (0, typeorm_1.getCustomRepository)(FechamentoRepositories_1.FechamentoRepositories);
                        return [4, fechamentoRepository.createQueryBuilder("fechamentos")
                                .where("status = :status", { status: true })
                                .getOne()];
                    case 1:
                        fechamentoDia = _b.sent();
                        if (fechamentoDia == undefined) {
                            return [2, false];
                        }
                        id = fechamentoDia.id;
                        vendaService = new VendaService_1.VendaService();
                        valorVendaDia = vendaService.buscarValorDia(id);
                        return [4, valorVendaDia];
                    case 2:
                        if ((_b.sent()) == undefined) {
                            return [2, false];
                        }
                        _a = { error: false, msg: "Venda do dia somada com sucesso." };
                        return [4, valorVendaDia];
                    case 3: return [2, (_a.valor_total = _b.sent(), _a)];
                }
            });
        });
    };
    FechamentoService.prototype.buscarFechamentosPorMes = function (interacao) {
        return __awaiter(this, void 0, void 0, function () {
            var fechamentoRepository, anoAtual, query, fechamentos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fechamentoRepository = (0, typeorm_1.getCustomRepository)(FechamentoRepositories_1.FechamentoRepositories);
                        anoAtual = new Date().getFullYear();
                        query = "select count(fechamentos.id) as fechamentosmes from fechamentos where EXTRACT(MONTH  from fechamentos.data) = ".concat(interacao, " and EXTRACT(YEAR from fechamentos.data) = ").concat(anoAtual);
                        return [4, fechamentoRepository.query(query)];
                    case 1:
                        fechamentos = _a.sent();
                        return [2, fechamentos[0].fechamentosmes];
                }
            });
        });
    };
    FechamentoService.prototype.listarFechamentos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var array, i, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        array = [];
                        i = 1;
                        _c.label = 1;
                    case 1:
                        if (!(i <= 12)) return [3, 4];
                        _b = (_a = array).push;
                        return [4, this.buscarFechamentosPorMes(i)];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 3;
                    case 3:
                        i++;
                        return [3, 1];
                    case 4: return [2, array];
                }
            });
        });
    };
    return FechamentoService;
}());
exports.FechamentoService = FechamentoService;
