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
exports.FornecedorService = void 0;
var typeorm_1 = require("typeorm");
var FornecedorRepositories_1 = require("../repositories/FornecedorRepositories");
var EnderecoService_1 = require("./EnderecoService");
var TelefoneService_1 = require("./TelefoneService");
var FornecedorService = /** @class */ (function () {
    function FornecedorService() {
    }
    FornecedorService.prototype.cadastrarFornecedor = function (fornecedor) {
        return __awaiter(this, void 0, void 0, function () {
            var nome, email, cnpj, razao, falarcom, endereco, numero, cel, fornecedorRepository, fornecedorCreate, fornecedorSalvar, idInserido, id_fornecedor, enderecoService, bairro, municipio, uf, enderecoCadastrar, telefoneService, celular2, tel, telefoneCadastrar;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nome = fornecedor.nome, email = fornecedor.email, cnpj = fornecedor.cnpj, razao = fornecedor.razao, falarcom = fornecedor.falarcom, endereco = fornecedor.endereco, numero = fornecedor.numero, cel = fornecedor.cel;
                        fornecedorRepository = (0, typeorm_1.getCustomRepository)(FornecedorRepositories_1.FornecedorRepositories);
                        fornecedorCreate = fornecedorRepository.create({ nome: nome, email: email, cnpj: cnpj, razao: razao, falarcom: falarcom });
                        return [4 /*yield*/, fornecedorRepository.save(fornecedorCreate)];
                    case 1:
                        fornecedorSalvar = _a.sent();
                        if (!fornecedorSalvar) {
                            return [2 /*return*/, { error: true, msg: "Error ao tentar cadastrar o fornecedor." }];
                        }
                        return [4 /*yield*/, fornecedorRepository.query("select max(id) as id_fornecedor from fornecedores")];
                    case 2:
                        idInserido = _a.sent();
                        id_fornecedor = parseInt(idInserido[0].id_fornecedor);
                        enderecoService = new EnderecoService_1.EnderecoService();
                        bairro = null;
                        municipio = null;
                        uf = null;
                        enderecoCadastrar = enderecoService.cadastrarEnderecoFornecedor({ id_fornecedor: id_fornecedor, endereco: endereco, numero: numero, bairro: bairro, municipio: municipio, uf: uf });
                        if (!enderecoCadastrar) {
                            return [2 /*return*/, { error: true, msg: "Error ao tentar cadastrar o endereço do fornecedor." }];
                        }
                        telefoneService = new TelefoneService_1.TelefoneService();
                        celular2 = null;
                        tel = null;
                        telefoneCadastrar = telefoneService.cadastrarTelefoneFornecedor({ id_fornecedor: id_fornecedor, telefone: tel, celular: cel, celular2: celular2 });
                        if (!telefoneCadastrar) {
                            return [2 /*return*/, { error: true, msg: "Error ao tentar cadastrar o telefone do fornecedor." }];
                        }
                        return [2 /*return*/, { error: false, msg: "Fornecedor cadastrado com sucesso." }];
                }
            });
        });
    };
    FornecedorService.prototype.listarFornecedores = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fornecedorRepository, fornecedores;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fornecedorRepository = (0, typeorm_1.getCustomRepository)(FornecedorRepositories_1.FornecedorRepositories);
                        return [4 /*yield*/, fornecedorRepository.query("select \n            f.id as id,\n            f.nome,\n            f.email,\n            f.cnpj,\n            f.razao,\n            f.falarcom,\n            e.rua,\n            e.numero,\n            e.bairro,\n            e.municipio,\n            e.uf,\n            t.telefone,\n            t.celular,\n            t.celular2\n        from fornecedores f inner join enderecos e on f.id = e.id_fornecedor inner join telefones t on t.id_fornecedor = f.id")];
                    case 1:
                        fornecedores = _a.sent();
                        return [2 /*return*/, fornecedores];
                }
            });
        });
    };
    FornecedorService.prototype.listarFornecedoresParam = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var filtro, dados, fornecedorRepository, dadosFornecedores, queryInicial, filtrarFornecedores;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filtro = parseInt(param.filtro);
                        dados = param.dados;
                        fornecedorRepository = (0, typeorm_1.getCustomRepository)(FornecedorRepositories_1.FornecedorRepositories);
                        dadosFornecedores = null;
                        queryInicial = 'select * from fornecedores f inner join enderecos e on f.id = e.id_fornecedor inner join telefones t on t.id_fornecedor = f.id';
                        if (filtro == 1) {
                            dadosFornecedores = "".concat(queryInicial, " where f.nome like '").concat(dados, "%'");
                        }
                        else if (filtro == 2) {
                            dadosFornecedores = "".concat(queryInicial, " where f.email like '").concat(dados, "%'");
                        }
                        else if (filtro == 3) {
                            dadosFornecedores = "".concat(queryInicial, " where f.cnpj like '").concat(dados, "%'");
                        }
                        else {
                            dadosFornecedores = "".concat(queryInicial);
                        }
                        return [4 /*yield*/, fornecedorRepository.query(dadosFornecedores)];
                    case 1:
                        filtrarFornecedores = _a.sent();
                        return [2 /*return*/, filtrarFornecedores];
                }
            });
        });
    };
    FornecedorService.prototype.excluirFornecedor = function (_a) {
        var id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            var fornecedorRepository, endereco, telefone, fornecedor;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        fornecedorRepository = (0, typeorm_1.getCustomRepository)(FornecedorRepositories_1.FornecedorRepositories);
                        if (!id) {
                            return [2 /*return*/, { error: true, msg: "Erro código invalido." }];
                        }
                        return [4 /*yield*/, fornecedorRepository.query("delete from enderecos where id_fornecedor = ".concat(id))];
                    case 1:
                        endereco = _b.sent();
                        if (!endereco) {
                            return [2 /*return*/, { error: true, msg: "Erro ao tentar excluir o endereco com o id_fornecedor: " + id }];
                        }
                        return [4 /*yield*/, fornecedorRepository.query("delete from telefones where id_fornecedor = ".concat(id))];
                    case 2:
                        telefone = _b.sent();
                        if (!telefone) {
                            return [2 /*return*/, { error: true, msg: "Erro ao tentar excluir o telefone com o id_fornecedor: " + id }];
                        }
                        return [4 /*yield*/, fornecedorRepository.query("delete from fornecedores where id = ".concat(id))];
                    case 3:
                        fornecedor = _b.sent();
                        if (!fornecedor) {
                            return [2 /*return*/, { error: true, msg: "Erro ao tentar excluir o fornecedor: " + id }];
                        }
                        return [2 /*return*/, { error: false, msg: "Fornecedor excluso com sucesso." }];
                }
            });
        });
    };
    FornecedorService.prototype.editarFornecedor = function (_a) {
        var id = _a.id, nome = _a.nome, cnpj = _a.cnpj, razao = _a.razao, falarcom = _a.falarcom, endereco = _a.endereco, numero = _a.numero, cel = _a.cel, email = _a.email;
        return __awaiter(this, void 0, void 0, function () {
            var fornecedorRepository, updateFornecedor, enderecoService, uf, updateEndereco, telefoneService, tel, updateTelefone;
            return __generator(this, function (_b) {
                fornecedorRepository = (0, typeorm_1.getCustomRepository)(FornecedorRepositories_1.FornecedorRepositories);
                updateFornecedor = fornecedorRepository.createQueryBuilder("fornecedores")
                    .update("fornecedores")
                    .set({ nome: nome, email: email, cnpj: cnpj, razao: razao, falarcom: falarcom })
                    .where("id = :id", { id: id })
                    .execute();
                if (!updateFornecedor) {
                    return [2 /*return*/, { error: true, msg: "Ocorreu um erro ao atualizar os dados do fornecedor." }];
                }
                enderecoService = new EnderecoService_1.EnderecoService();
                uf = null;
                updateEndereco = enderecoService.editarEnderecoFornecedor({ id_fornecedor: parseInt(id), rua: endereco, numero: numero, uf: uf });
                if (!updateEndereco) {
                    return [2 /*return*/, { error: true, msg: "Ocorreu um erro ao atualizar os dados do endereco." }];
                }
                telefoneService = new TelefoneService_1.TelefoneService();
                tel = null;
                updateTelefone = telefoneService.editarTelefoneFornecedor({ id_fornecedor: parseInt(id), telefone: tel, celular: cel });
                if (!updateTelefone) {
                    return [2 /*return*/, { error: true, msg: "Ocorreu um erro ao atualizar os dados do telefone." }];
                }
                return [2 /*return*/, { error: false, msg: "Os dados do fornecedor foram atualizados com sucesso." }];
            });
        });
    };
    FornecedorService.prototype.relatorioFornecedores = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var filtro, dados, ordenacao, ordenacaoordem, fornecedoresRepository, dadosFornecedores, queryInicial, filtrarFornecedores;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filtro = parseInt(param.filtro);
                        dados = param.dados;
                        ordenacao = param.ordenacao;
                        ordenacaoordem = param.ordenacaoordem;
                        fornecedoresRepository = (0, typeorm_1.getCustomRepository)(FornecedorRepositories_1.FornecedorRepositories);
                        dadosFornecedores = null;
                        queryInicial = "select * from fornecedores";
                        if (filtro == 1) {
                            dadosFornecedores = dados != '' ? "".concat(queryInicial, " where id = '").concat(dados, "'") : queryInicial;
                        }
                        else if (filtro == 2) {
                            dadosFornecedores = "".concat(queryInicial, " where nome like '").concat(dados, "%'");
                        }
                        else if (filtro == 3) {
                            dadosFornecedores = "".concat(queryInicial, " where email like '").concat(dados, "%'");
                        }
                        else if (filtro == 4) {
                            dadosFornecedores = "".concat(queryInicial, " where cnpj like '").concat(dados, "%'");
                        }
                        else if (filtro == 5) {
                            dadosFornecedores = "".concat(queryInicial, " where razao like '").concat(dados, "%'");
                        }
                        else {
                            dadosFornecedores = "".concat(queryInicial);
                        }
                        dadosFornecedores = "".concat(dadosFornecedores, " order by ").concat(ordenacao, " ").concat(ordenacaoordem);
                        return [4 /*yield*/, fornecedoresRepository.query(dadosFornecedores)];
                    case 1:
                        filtrarFornecedores = _a.sent();
                        return [2 /*return*/, filtrarFornecedores];
                }
            });
        });
    };
    return FornecedorService;
}());
exports.FornecedorService = FornecedorService;
//# sourceMappingURL=FornecedorService.js.map