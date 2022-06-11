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
exports.ClienteController = void 0;
var ClienteService_1 = require("../services/ClienteService");
var ClienteController = /** @class */ (function () {
    function ClienteController() {
    }
    ClienteController.prototype.cadastrarCliente = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, nome, cpf, nascimento, genero, civil, uf, rg, endereco, numero, tel, cel, email, clienteService, cliente;
            return __generator(this, function (_b) {
                _a = request.body.param, nome = _a.nome, cpf = _a.cpf, nascimento = _a.nascimento, genero = _a.genero, civil = _a.civil, uf = _a.uf, rg = _a.rg, endereco = _a.endereco, numero = _a.numero, tel = _a.tel, cel = _a.cel, email = _a.email;
                clienteService = new ClienteService_1.ClienteService();
                cliente = clienteService.cadastrarCliente({ nome: nome, cpf: cpf, nascimento: nascimento, genero: genero, civil: civil, uf: uf, rg: rg, endereco: endereco, numero: numero, tel: tel, cel: cel, email: email });
                return [2 /*return*/, cliente];
            });
        });
    };
    ClienteController.prototype.listarClientes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var clienteService, clientes;
            return __generator(this, function (_a) {
                clienteService = new ClienteService_1.ClienteService();
                clientes = clienteService.listarClientes();
                return [2 /*return*/, clientes];
            });
        });
    };
    ClienteController.prototype.listarClientesParam = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, filtro, dados, clienteService, clientes;
            return __generator(this, function (_b) {
                _a = request.body.param, filtro = _a.filtro, dados = _a.dados;
                clienteService = new ClienteService_1.ClienteService();
                clientes = clienteService.listarClientesParam({ filtro: filtro, dados: dados });
                return [2 /*return*/, clientes];
            });
        });
    };
    ClienteController.prototype.excluirCliente = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, clienteService, excluirCliente;
            return __generator(this, function (_a) {
                id = request.body.id;
                clienteService = new ClienteService_1.ClienteService();
                excluirCliente = clienteService.excluirCliente({ id: id });
                return [2 /*return*/, excluirCliente];
            });
        });
    };
    ClienteController.prototype.editarCliente = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, nome, cpf, nascimento, genero, civil, uf, rg, endereco, numero, tel, cel, email, clienteService, editarCliente;
            return __generator(this, function (_b) {
                _a = request.body.param, id = _a.id, nome = _a.nome, cpf = _a.cpf, nascimento = _a.nascimento, genero = _a.genero, civil = _a.civil, uf = _a.uf, rg = _a.rg, endereco = _a.endereco, numero = _a.numero, tel = _a.tel, cel = _a.cel, email = _a.email;
                clienteService = new ClienteService_1.ClienteService();
                editarCliente = clienteService.editarCliente({ id: id, nome: nome, cpf: cpf, nascimento: nascimento, genero: genero, civil: civil, uf: uf, rg: rg, endereco: endereco, numero: numero, tel: tel, cel: cel, email: email });
                return [2 /*return*/, editarCliente];
            });
        });
    };
    ClienteController.prototype.relatorioClientes = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, filtro, dados, ordenacao, ordenacaoordem, clienteService, clientes;
            return __generator(this, function (_b) {
                _a = request.body.param, filtro = _a.filtro, dados = _a.dados, ordenacao = _a.ordenacao, ordenacaoordem = _a.ordenacaoordem;
                clienteService = new ClienteService_1.ClienteService();
                clientes = clienteService.relatorioClientes({ filtro: filtro, dados: dados, ordenacao: ordenacao, ordenacaoordem: ordenacaoordem });
                return [2 /*return*/, clientes];
            });
        });
    };
    return ClienteController;
}());
exports.ClienteController = ClienteController;
//# sourceMappingURL=ClienteController.js.map