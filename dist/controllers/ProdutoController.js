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
exports.ProdutoController = void 0;
var ProdutoService_1 = require("../services/ProdutoService");
var ProdutoController = /** @class */ (function () {
    function ProdutoController() {
    }
    ProdutoController.prototype.buscarCodigo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var produtoService, quantidade;
            return __generator(this, function (_a) {
                produtoService = new ProdutoService_1.ProdutoService();
                quantidade = produtoService.buscarCodigo();
                return [2 /*return*/, quantidade];
            });
        });
    };
    ProdutoController.prototype.cadastrarProduto = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, codigo, produto, categoria, descricao, cor, tamanho, valor, obs, status, produtoService, prod;
            return __generator(this, function (_b) {
                _a = request.body.param, codigo = _a.codigo, produto = _a.produto, categoria = _a.categoria, descricao = _a.descricao, cor = _a.cor, tamanho = _a.tamanho, valor = _a.valor, obs = _a.obs, status = _a.status;
                produtoService = new ProdutoService_1.ProdutoService();
                prod = produtoService.cadastrarProduto({ codigo: codigo, produto: produto, categoria: categoria, descricao: descricao, cor: cor, tamanho: tamanho, valor: valor, obs: obs, status: status });
                return [2 /*return*/, prod];
            });
        });
    };
    ProdutoController.prototype.listarProdutos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var produtoService, prod;
            return __generator(this, function (_a) {
                produtoService = new ProdutoService_1.ProdutoService();
                prod = produtoService.listarProdutos();
                return [2 /*return*/, prod];
            });
        });
    };
    ProdutoController.prototype.listarProdutosInativos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var produtoService, prod;
            return __generator(this, function (_a) {
                produtoService = new ProdutoService_1.ProdutoService();
                prod = produtoService.listarProdutos(false);
                return [2 /*return*/, prod];
            });
        });
    };
    ProdutoController.prototype.listarProdutosBalanco = function () {
        return __awaiter(this, void 0, void 0, function () {
            var produtoService, prod;
            return __generator(this, function (_a) {
                produtoService = new ProdutoService_1.ProdutoService();
                prod = produtoService.listarProdutosBalanco();
                return [2 /*return*/, prod];
            });
        });
    };
    ProdutoController.prototype.listarProdutosBalancoParam = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, filtro, dados, acao, produtoService, prod;
            return __generator(this, function (_b) {
                _a = request.body.param, filtro = _a.filtro, dados = _a.dados, acao = _a.acao;
                produtoService = new ProdutoService_1.ProdutoService();
                prod = produtoService.listarProdutosBalancoParam({ filtro: filtro, dados: dados, acao: acao });
                return [2 /*return*/, prod];
            });
        });
    };
    ProdutoController.prototype.listarProdutosParam = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, filtro, dados, acao, produtoService, produtos;
            return __generator(this, function (_b) {
                _a = request.body.param, filtro = _a.filtro, dados = _a.dados, acao = _a.acao;
                produtoService = new ProdutoService_1.ProdutoService();
                produtos = produtoService.listarProdutosParam({ filtro: filtro, dados: dados, acao: acao });
                return [2 /*return*/, produtos];
            });
        });
    };
    ProdutoController.prototype.desativarAtivarItem = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, acao, produtoService, produtoDesativar;
            return __generator(this, function (_b) {
                _a = request.body, id = _a.id, acao = _a.acao;
                produtoService = new ProdutoService_1.ProdutoService();
                produtoDesativar = produtoService.desativarAtivarItem({ id: id, acao: acao });
                return [2 /*return*/, produtoDesativar];
            });
        });
    };
    ProdutoController.prototype.editarProduto = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, codigo, produto, categoria, descricao, cor, tamanho, valor, obs, status, produtoService, produtoEditar;
            return __generator(this, function (_b) {
                _a = request.body.param, codigo = _a.codigo, produto = _a.produto, categoria = _a.categoria, descricao = _a.descricao, cor = _a.cor, tamanho = _a.tamanho, valor = _a.valor, obs = _a.obs, status = _a.status;
                produtoService = new ProdutoService_1.ProdutoService();
                produtoEditar = produtoService.editarProduto({ codigo: codigo, produto: produto, categoria: categoria, descricao: descricao, cor: cor, tamanho: tamanho, valor: valor, obs: obs, status: status });
                return [2 /*return*/, produtoEditar];
            });
        });
    };
    ProdutoController.prototype.relatorioProdutos = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, filtro, dados, ordenacao, ordenacaoordem, produtoService, produtos;
            return __generator(this, function (_b) {
                _a = request.body.param, filtro = _a.filtro, dados = _a.dados, ordenacao = _a.ordenacao, ordenacaoordem = _a.ordenacaoordem;
                produtoService = new ProdutoService_1.ProdutoService();
                produtos = produtoService.relatorioProdutos({ filtro: filtro, dados: dados, ordenacao: ordenacao, ordenacaoordem: ordenacaoordem });
                return [2 /*return*/, produtos];
            });
        });
    };
    return ProdutoController;
}());
exports.ProdutoController = ProdutoController;
//# sourceMappingURL=ProdutoController.js.map