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
exports.TelefoneService = void 0;
var typeorm_1 = require("typeorm");
var TelefoneRepositories_1 = require("../repositories/TelefoneRepositories");
var TelefoneService = /** @class */ (function () {
    function TelefoneService() {
    }
    TelefoneService.prototype.cadastrarTelefone = function (telefoneSalvar) {
        return __awaiter(this, void 0, void 0, function () {
            var id_cliente, telefone, celular, celular2, telefoneRepository, telefoneCreate, salvarTelefone;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id_cliente = telefoneSalvar.id_cliente, telefone = telefoneSalvar.telefone, celular = telefoneSalvar.celular, celular2 = telefoneSalvar.celular2;
                        telefoneRepository = (0, typeorm_1.getCustomRepository)(TelefoneRepositories_1.TelefoneRepositories);
                        telefoneCreate = telefoneRepository.create({ id_cliente: id_cliente, telefone: telefone, celular: celular, celular2: celular2 });
                        return [4 /*yield*/, telefoneRepository.save(telefoneCreate)];
                    case 1:
                        salvarTelefone = _a.sent();
                        if (!salvarTelefone) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    TelefoneService.prototype.cadastrarTelefoneFornecedor = function (telefoneSalvar) {
        return __awaiter(this, void 0, void 0, function () {
            var id_fornecedor, telefone, celular, celular2, telefoneRepository, telefoneCreate, salvarTelefone;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id_fornecedor = telefoneSalvar.id_fornecedor, telefone = telefoneSalvar.telefone, celular = telefoneSalvar.celular, celular2 = telefoneSalvar.celular2;
                        telefoneRepository = (0, typeorm_1.getCustomRepository)(TelefoneRepositories_1.TelefoneRepositories);
                        telefoneCreate = telefoneRepository.create({ id_fornecedor: id_fornecedor, telefone: telefone, celular: celular, celular2: celular2 });
                        return [4 /*yield*/, telefoneRepository.save(telefoneCreate)];
                    case 1:
                        salvarTelefone = _a.sent();
                        if (!salvarTelefone) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    TelefoneService.prototype.editarTelefone = function (updateSalvar) {
        return __awaiter(this, void 0, void 0, function () {
            var id_cliente, telefone, celular, telefoneRepository, updateTelefone;
            return __generator(this, function (_a) {
                id_cliente = updateSalvar.id_cliente, telefone = updateSalvar.telefone, celular = updateSalvar.celular;
                telefoneRepository = (0, typeorm_1.getCustomRepository)(TelefoneRepositories_1.TelefoneRepositories);
                updateTelefone = telefoneRepository.createQueryBuilder("telefones")
                    .update("telefones")
                    .set({ id_cliente: id_cliente, telefone: telefone, celular: celular })
                    .where("id_cliente = :id_cliente", { id_cliente: id_cliente })
                    .execute();
                if (!updateTelefone) {
                    return [2 /*return*/, false];
                }
                return [2 /*return*/, true];
            });
        });
    };
    TelefoneService.prototype.editarTelefoneFornecedor = function (updateSalvar) {
        return __awaiter(this, void 0, void 0, function () {
            var id_fornecedor, telefone, celular, telefoneRepository, updateTelefone;
            return __generator(this, function (_a) {
                id_fornecedor = updateSalvar.id_fornecedor, telefone = updateSalvar.telefone, celular = updateSalvar.celular;
                telefoneRepository = (0, typeorm_1.getCustomRepository)(TelefoneRepositories_1.TelefoneRepositories);
                updateTelefone = telefoneRepository.createQueryBuilder("telefones")
                    .update("telefones")
                    .set({ id_fornecedor: id_fornecedor, telefone: telefone, celular: celular })
                    .where("id_fornecedor = :id_fornecedor", { id_fornecedor: id_fornecedor })
                    .execute();
                if (!updateTelefone) {
                    return [2 /*return*/, false];
                }
                return [2 /*return*/, true];
            });
        });
    };
    return TelefoneService;
}());
exports.TelefoneService = TelefoneService;
//# sourceMappingURL=TelefoneService.js.map