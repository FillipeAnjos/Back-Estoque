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
exports.EnderecoService = void 0;
var typeorm_1 = require("typeorm");
var EnderecoRepositories_1 = require("../repositories/EnderecoRepositories");
var EnderecoService = /** @class */ (function () {
    function EnderecoService() {
    }
    EnderecoService.prototype.cadastrarEndereco = function (enderecoSalvar) {
        return __awaiter(this, void 0, void 0, function () {
            var id_cliente, endereco, numero, bairro, municipio, uf, enderecoRepository, enderecoCreate, salvarEndereco;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id_cliente = enderecoSalvar.id_cliente, endereco = enderecoSalvar.endereco, numero = enderecoSalvar.numero, bairro = enderecoSalvar.bairro, municipio = enderecoSalvar.municipio, uf = enderecoSalvar.uf;
                        enderecoRepository = (0, typeorm_1.getCustomRepository)(EnderecoRepositories_1.EnderecoRepositories);
                        enderecoCreate = enderecoRepository.create({ id_cliente: id_cliente, rua: endereco, numero: numero, bairro: bairro, municipio: municipio, uf: uf });
                        return [4 /*yield*/, enderecoRepository.save(enderecoCreate)];
                    case 1:
                        salvarEndereco = _a.sent();
                        if (!salvarEndereco) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    EnderecoService.prototype.cadastrarEnderecoFornecedor = function (enderecoSalvar) {
        return __awaiter(this, void 0, void 0, function () {
            var id_fornecedor, endereco, numero, bairro, municipio, uf, enderecoRepository, enderecoCreate, salvarEndereco;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id_fornecedor = enderecoSalvar.id_fornecedor, endereco = enderecoSalvar.endereco, numero = enderecoSalvar.numero, bairro = enderecoSalvar.bairro, municipio = enderecoSalvar.municipio, uf = enderecoSalvar.uf;
                        enderecoRepository = (0, typeorm_1.getCustomRepository)(EnderecoRepositories_1.EnderecoRepositories);
                        enderecoCreate = enderecoRepository.create({ id_fornecedor: id_fornecedor, rua: endereco, numero: numero, bairro: bairro, municipio: municipio, uf: uf });
                        return [4 /*yield*/, enderecoRepository.save(enderecoCreate)];
                    case 1:
                        salvarEndereco = _a.sent();
                        if (!salvarEndereco) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    EnderecoService.prototype.editarEndereco = function (updateSalvar) {
        return __awaiter(this, void 0, void 0, function () {
            var id_cliente, rua, numero, uf, enderecoRepository, updateEnderecos;
            return __generator(this, function (_a) {
                id_cliente = updateSalvar.id_cliente, rua = updateSalvar.rua, numero = updateSalvar.numero, uf = updateSalvar.uf;
                enderecoRepository = (0, typeorm_1.getCustomRepository)(EnderecoRepositories_1.EnderecoRepositories);
                updateEnderecos = enderecoRepository.createQueryBuilder("enderecos")
                    .update("enderecos")
                    .set({ id_cliente: id_cliente, rua: rua, numero: numero, uf: uf })
                    .where("id_cliente = :id_cliente", { id_cliente: id_cliente })
                    .execute();
                if (!updateEnderecos) {
                    return [2 /*return*/, false];
                }
                return [2 /*return*/, true];
            });
        });
    };
    EnderecoService.prototype.editarEnderecoFornecedor = function (updateSalvar) {
        return __awaiter(this, void 0, void 0, function () {
            var id_fornecedor, rua, numero, uf, enderecoRepository, updateEnderecos;
            return __generator(this, function (_a) {
                id_fornecedor = updateSalvar.id_fornecedor, rua = updateSalvar.rua, numero = updateSalvar.numero, uf = updateSalvar.uf;
                enderecoRepository = (0, typeorm_1.getCustomRepository)(EnderecoRepositories_1.EnderecoRepositories);
                updateEnderecos = enderecoRepository.createQueryBuilder("enderecos")
                    .update("enderecos")
                    .set({ id_fornecedor: id_fornecedor, rua: rua, numero: numero, uf: uf })
                    .where("id_fornecedor = :id_fornecedor", { id_fornecedor: id_fornecedor })
                    .execute();
                if (!updateEnderecos) {
                    return [2 /*return*/, false];
                }
                return [2 /*return*/, true];
            });
        });
    };
    return EnderecoService;
}());
exports.EnderecoService = EnderecoService;
//# sourceMappingURL=EnderecoService.js.map