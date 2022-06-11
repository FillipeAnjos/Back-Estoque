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
exports.router = void 0;
var express_1 = require("express");
var ProdutoController_1 = require("./controllers/ProdutoController");
var UserController_1 = require("./controllers/UserController");
var QuantidadeController_1 = require("./controllers/QuantidadeController");
var FechamentoController_1 = require("./controllers/FechamentoController");
var VendaController_1 = require("./controllers/VendaController");
var CategoriaController_1 = require("./controllers/CategoriaController");
var ClienteController_1 = require("./controllers/ClienteController");
var FornecedorController_1 = require("./controllers/FornecedorController");
var router = (0, express_1.Router)();
exports.router = router;
var userController = new UserController_1.UserController();
var produtoController = new ProdutoController_1.ProdutoController();
var quantidadeController = new QuantidadeController_1.QuantidadeController();
var fechamentoController = new FechamentoController_1.FechamentoController();
var vendaController = new VendaController_1.VendaController();
var categoriaController = new CategoriaController_1.CategoriaController();
var clienteController = new ClienteController_1.ClienteController();
var fornecedorController = new FornecedorController_1.FornecedorController();
router.post('/cadastrarUser', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var user, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, userController.criarUser(req, res)];
                case 1:
                    user = _a.sent();
                    return [2 /*return*/, res.status(200).send({ user: user })];
                case 2:
                    err_1 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao incluir o usuário." })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/login', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var user, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, userController.logarUser(req, res)];
                case 1:
                    user = _a.sent();
                    return [2 /*return*/, res.status(200).send({ user: user })];
                case 2:
                    err_2 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao logar o usuário." })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/buscarUserLogado', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var user, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, userController.buscarUserLogado(req, res)];
                case 1:
                    user = _a.sent();
                    return [2 /*return*/, res.status(200).send({ user: user })];
                case 2:
                    err_3 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao logar o usuário." })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/buscarCodProd', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var resposta, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, produtoController.buscarCodigo()];
                case 1:
                    resposta = _a.sent();
                    return [2 /*return*/, res.status(200).send({ resposta: resposta })];
                case 2:
                    err_4 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Erros ao buscar o código do produto: " + err_4 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/cadastrarProduto', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var produto, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, produtoController.cadastrarProduto(req, res)];
                case 1:
                    produto = _a.sent();
                    return [2 /*return*/, res.status(200).send({ produto: produto })];
                case 2:
                    err_5 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Erro ao cadastrar o produto: " + err_5 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.get('/listarProdutosInativos', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var produtos, err_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, produtoController.listarProdutosInativos()];
                case 1:
                    produtos = _a.sent();
                    return [2 /*return*/, res.status(200).send({ produtos: produtos })];
                case 2:
                    err_6 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Erro ao listar os produtos: " + err_6 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.get('/listarProdutos', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var produtos, err_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, produtoController.listarProdutos()];
                case 1:
                    produtos = _a.sent();
                    return [2 /*return*/, res.status(200).send({ produtos: produtos })];
                case 2:
                    err_7 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Erro ao listar os produtos: " + err_7 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/listarProdutos', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var produtos, err_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, produtoController.listarProdutosParam(req, res)];
                case 1:
                    produtos = _a.sent();
                    return [2 /*return*/, res.status(200).send({ produtos: produtos })];
                case 2:
                    err_8 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Erro ao listar produtos: " + err_8 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.get('/listarProdutosBalanco', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var produtos, err_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, produtoController.listarProdutosBalanco()];
                case 1:
                    produtos = _a.sent();
                    return [2 /*return*/, res.status(200).send({ produtos: produtos })];
                case 2:
                    err_9 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Erro ao listar os produtos: " + err_9 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/listarProdutosBalanco', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var produtos, err_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, produtoController.listarProdutosBalancoParam(req, res)];
                case 1:
                    produtos = _a.sent();
                    return [2 /*return*/, res.status(200).send({ produtos: produtos })];
                case 2:
                    err_10 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Erro ao listar os produtos: " + err_10 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/desativarAtivarItem', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var produto, err_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, produtoController.desativarAtivarItem(req, res)];
                case 1:
                    produto = _a.sent();
                    return [2 /*return*/, res.status(200).send({ produto: produto })];
                case 2:
                    err_11 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao desativar o produto: " + err_11 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/editarProduto', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var produto, err_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, produtoController.editarProduto(req, res)];
                case 1:
                    produto = _a.sent();
                    return [2 /*return*/, res.status(200).send({ produto: produto })];
                case 2:
                    err_12 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao atualizar o produto: " + err_12 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/editarUnidade', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var unidade, err_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, quantidadeController.editarUnidade(req, res)];
                case 1:
                    unidade = _a.sent();
                    return [2 /*return*/, res.status(200).send({ unidade: unidade })];
                case 2:
                    err_13 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao atualizar a quantidade do produto: " + err_13 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.get('/buscarStatusCaixa', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var fechamento, err_14;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fechamentoController.buscarStatusCaixa()];
                case 1:
                    fechamento = _a.sent();
                    return [2 /*return*/, res.status(200).send({ fechamento: fechamento })];
                case 2:
                    err_14 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao atualizar o fechamento: " + err_14 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/salvarFechamento', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var fechamento, err_15;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fechamentoController.fechamentoSalvar(req, res)];
                case 1:
                    fechamento = _a.sent();
                    return [2 /*return*/, res.status(200).send({ fechamento: fechamento })];
                case 2:
                    err_15 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao atualizar o fechamento: " + err_15 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/salvarFechamentoAnterior', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var fechamento, err_16;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fechamentoController.fechamentoSalvarAnterior(req, res)];
                case 1:
                    fechamento = _a.sent();
                    return [2 /*return*/, res.status(200).send({ fechamento: fechamento })];
                case 2:
                    err_16 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao atualizar o fechamento: " + err_16 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/verificarQuantidadeItem', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var unidade, err_17;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, quantidadeController.verificarQuantidadeItem(req, res)];
                case 1:
                    unidade = _a.sent();
                    return [2 /*return*/, res.status(200).send({ unidade: unidade })];
                case 2:
                    err_17 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao atualizar o fechamento: " + err_17 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.get('/buscarUsers', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var usuarios, err_18;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, userController.buscarUsers()];
                case 1:
                    usuarios = _a.sent();
                    return [2 /*return*/, res.status(200).send({ usuarios: usuarios })];
                case 2:
                    err_18 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Erro ao buscar os usuarios: " + err_18 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.get('/buscarUltimosUsers', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var usuarios, err_19;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, userController.buscarUltimosUsers()];
                case 1:
                    usuarios = _a.sent();
                    return [2 /*return*/, res.status(200).send({ usuarios: usuarios })];
                case 2:
                    err_19 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Erro ao buscar os usuarios: " + err_19 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/realizarVenda', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var venda, err_20;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, vendaController.salvarVenda(req, res)];
                case 1:
                    venda = _a.sent();
                    return [2 /*return*/, res.status(200).send({ venda: venda })];
                case 2:
                    err_20 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao atualizar o fechamento: " + err_20 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.get('/buscarVendasDia', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var fechamento, err_21;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fechamentoController.buscarVendasDia()];
                case 1:
                    fechamento = _a.sent();
                    return [2 /*return*/, res.status(200).send({ fechamento: fechamento })];
                case 2:
                    err_21 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao buscar as vendas: " + err_21 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/cadastrarCategoria', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var categoria, err_22;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, categoriaController.cadastrar(req, res)];
                case 1:
                    categoria = _a.sent();
                    return [2 /*return*/, res.status(200).send({ categoria: categoria })];
                case 2:
                    err_22 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error cadastrar a categoria: " + err_22 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.get('/buscarCategorias', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var categorias, err_23;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, categoriaController.buscarCategorias()];
                case 1:
                    categorias = _a.sent();
                    return [2 /*return*/, res.status(200).send({ categorias: categorias })];
                case 2:
                    err_23 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao buscar as vendas: " + err_23 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.get('/listarVendas', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var vendas, err_24;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, vendaController.listarVendas()];
                case 1:
                    vendas = _a.sent();
                    return [2 /*return*/, res.status(200).send({ vendas: vendas })];
                case 2:
                    err_24 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao buscar as vendas: " + err_24 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/listarVendas', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var vendas, err_25;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, vendaController.listarVendasParam(req, res)];
                case 1:
                    vendas = _a.sent();
                    return [2 /*return*/, res.status(200).send({ vendas: vendas })];
                case 2:
                    err_25 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao buscar as vendas: " + err_25 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/cadastrarCliente', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var cliente, err_26;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, clienteController.cadastrarCliente(req, res)];
                case 1:
                    cliente = _a.sent();
                    return [2 /*return*/, res.status(200).send({ cliente: cliente })];
                case 2:
                    err_26 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao cadastrar o cliente: " + err_26 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.get('/listarClientes', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var clientes, err_27;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, clienteController.listarClientes()];
                case 1:
                    clientes = _a.sent();
                    return [2 /*return*/, res.status(200).send({ clientes: clientes })];
                case 2:
                    err_27 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao buscar os clientes: " + err_27 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/listarClientes', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var clientes, err_28;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, clienteController.listarClientesParam(req, res)];
                case 1:
                    clientes = _a.sent();
                    return [2 /*return*/, res.status(200).send({ clientes: clientes })];
                case 2:
                    err_28 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao buscar os clientes: " + err_28 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/excluirCliente', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var cliente, err_29;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, clienteController.excluirCliente(req, res)];
                case 1:
                    cliente = _a.sent();
                    return [2 /*return*/, res.status(200).send({ cliente: cliente })];
                case 2:
                    err_29 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao excluir o cliente: " + err_29 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/editarCliente', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var cliente, err_30;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, clienteController.editarCliente(req, res)];
                case 1:
                    cliente = _a.sent();
                    return [2 /*return*/, res.status(200).send({ cliente: cliente })];
                case 2:
                    err_30 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao editar o cliente: " + err_30 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/cadastrarFornecedor', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var fornecedor, err_31;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fornecedorController.cadastrarFornecedor(req, res)];
                case 1:
                    fornecedor = _a.sent();
                    return [2 /*return*/, res.status(200).send({ fornecedor: fornecedor })];
                case 2:
                    err_31 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao cadastrar o fornecedor: " + err_31 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.get('/listarFornecedores', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var fornecedores, err_32;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fornecedorController.listarFornecedores()];
                case 1:
                    fornecedores = _a.sent();
                    return [2 /*return*/, res.status(200).send({ fornecedores: fornecedores })];
                case 2:
                    err_32 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao buscar os fornecedores: " + err_32 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/listarFornecedores', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var fornecedores, err_33;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fornecedorController.listarFornecedoresParam(req, res)];
                case 1:
                    fornecedores = _a.sent();
                    return [2 /*return*/, res.status(200).send({ fornecedores: fornecedores })];
                case 2:
                    err_33 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao buscar os fornecedores: " + err_33 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/excluirfornecedor', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var fornecedor, err_34;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fornecedorController.excluirFornecedor(req, res)];
                case 1:
                    fornecedor = _a.sent();
                    return [2 /*return*/, res.status(200).send({ fornecedor: fornecedor })];
                case 2:
                    err_34 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao excluir o fornecedor: " + err_34 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/editarFornecedor', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var fornecedor, err_35;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fornecedorController.editarFornecedor(req, res)];
                case 1:
                    fornecedor = _a.sent();
                    return [2 /*return*/, res.status(200).send({ fornecedor: fornecedor })];
                case 2:
                    err_35 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao editar o cliente: " + err_35 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/relatorioVendas', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var vendas, err_36;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, vendaController.relatorioVendas(req, res)];
                case 1:
                    vendas = _a.sent();
                    return [2 /*return*/, res.status(200).send({ vendas: vendas })];
                case 2:
                    err_36 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao gerar o relatório de vendas: " + err_36 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/relatorioFechamentos', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var vendas, err_37;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, vendaController.relatorioFechamentos(req, res)];
                case 1:
                    vendas = _a.sent();
                    return [2 /*return*/, res.status(200).send({ vendas: vendas })];
                case 2:
                    err_37 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao gerar o relatório de fechamento: " + err_37 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/relatorioProdutos', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var produtos, err_38;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, produtoController.relatorioProdutos(req, res)];
                case 1:
                    produtos = _a.sent();
                    return [2 /*return*/, res.status(200).send({ produtos: produtos })];
                case 2:
                    err_38 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao gerar o relatório de produtos: " + err_38 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/relatorioClientes', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var clientes, err_39;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, clienteController.relatorioClientes(req, res)];
                case 1:
                    clientes = _a.sent();
                    return [2 /*return*/, res.status(200).send({ clientes: clientes })];
                case 2:
                    err_39 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao gerar o relatório de clientes: " + err_39 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/relatorioFornecedores', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var fornecedores, err_40;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fornecedorController.relatorioFornecedores(req, res)];
                case 1:
                    fornecedores = _a.sent();
                    return [2 /*return*/, res.status(200).send({ fornecedores: fornecedores })];
                case 2:
                    err_40 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao gerar o relatório de fornecedores: " + err_40 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.post('/buscarGraficoVendas', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var vendas, err_41;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, vendaController.buscarGraficoVendas()];
                case 1:
                    vendas = _a.sent();
                    return [2 /*return*/, res.status(200).send({ vendas: vendas })];
                case 2:
                    err_41 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao buscar o grafico das vendas: " + err_41 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.get('/listarFechamentos', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var fechamentos, err_42;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fechamentoController.listarFechamentos()];
                case 1:
                    fechamentos = _a.sent();
                    return [2 /*return*/, res.status(200).send({ fechamentos: fechamentos })];
                case 2:
                    err_42 = _a.sent();
                    return [2 /*return*/, res.status(400).send({ error: "Error ao buscar o grafico dos fechamentos: " + err_42 })];
                case 3: return [2 /*return*/];
            }
        });
    });
});
router.get('/', function (req, res) {
    console.log("Sem Front End");
});
//# sourceMappingURL=routes.js.map