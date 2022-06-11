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
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const ProdutoController_1 = require("./controllers/ProdutoController");
const UserController_1 = require("./controllers/UserController");
const QuantidadeController_1 = require("./controllers/QuantidadeController");
const FechamentoController_1 = require("./controllers/FechamentoController");
const VendaController_1 = require("./controllers/VendaController");
const CategoriaController_1 = require("./controllers/CategoriaController");
const ClienteController_1 = require("./controllers/ClienteController");
const FornecedorController_1 = require("./controllers/FornecedorController");
const router = (0, express_1.Router)();
exports.router = router;
const userController = new UserController_1.UserController();
const produtoController = new ProdutoController_1.ProdutoController();
const quantidadeController = new QuantidadeController_1.QuantidadeController();
const fechamentoController = new FechamentoController_1.FechamentoController();
const vendaController = new VendaController_1.VendaController();
const categoriaController = new CategoriaController_1.CategoriaController();
const clienteController = new ClienteController_1.ClienteController();
const fornecedorController = new FornecedorController_1.FornecedorController();
router.post('/cadastrarUser', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield userController.criarUser(req, res);
            return res.status(200).send({ user });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao incluir o usuário." });
        }
    });
});
router.post('/login', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield userController.logarUser(req, res);
            return res.status(200).send({ user });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao logar o usuário." });
        }
    });
});
router.post('/buscarUserLogado', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield userController.buscarUserLogado(req, res);
            return res.status(200).send({ user });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao logar o usuário." });
        }
    });
});
router.post('/buscarCodProd', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const resposta = yield produtoController.buscarCodigo();
            return res.status(200).send({ resposta });
        }
        catch (err) {
            return res.status(400).send({ error: "Erros ao buscar o código do produto: " + err });
        }
    });
});
router.post('/cadastrarProduto', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const produto = yield produtoController.cadastrarProduto(req, res);
            return res.status(200).send({ produto });
        }
        catch (err) {
            return res.status(400).send({ error: "Erro ao cadastrar o produto: " + err });
        }
    });
});
router.get('/listarProdutosInativos', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const produtos = yield produtoController.listarProdutosInativos();
            return res.status(200).send({ produtos });
        }
        catch (err) {
            return res.status(400).send({ error: "Erro ao listar os produtos: " + err });
        }
    });
});
router.get('/listarProdutos', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const produtos = yield produtoController.listarProdutos();
            return res.status(200).send({ produtos });
        }
        catch (err) {
            return res.status(400).send({ error: "Erro ao listar os produtos: " + err });
        }
    });
});
router.post('/listarProdutos', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const produtos = yield produtoController.listarProdutosParam(req, res);
            return res.status(200).send({ produtos });
        }
        catch (err) {
            return res.status(400).send({ error: "Erro ao listar produtos: " + err });
        }
    });
});
router.get('/listarProdutosBalanco', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const produtos = yield produtoController.listarProdutosBalanco();
            return res.status(200).send({ produtos });
        }
        catch (err) {
            return res.status(400).send({ error: "Erro ao listar os produtos: " + err });
        }
    });
});
router.post('/listarProdutosBalanco', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const produtos = yield produtoController.listarProdutosBalancoParam(req, res);
            return res.status(200).send({ produtos });
        }
        catch (err) {
            return res.status(400).send({ error: "Erro ao listar os produtos: " + err });
        }
    });
});
router.post('/desativarAtivarItem', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const produto = yield produtoController.desativarAtivarItem(req, res);
            return res.status(200).send({ produto });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao desativar o produto: " + err });
        }
    });
});
router.post('/editarProduto', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const produto = yield produtoController.editarProduto(req, res);
            return res.status(200).send({ produto });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao atualizar o produto: " + err });
        }
    });
});
router.post('/editarUnidade', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const unidade = yield quantidadeController.editarUnidade(req, res);
            return res.status(200).send({ unidade });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao atualizar a quantidade do produto: " + err });
        }
    });
});
router.get('/buscarStatusCaixa', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fechamento = yield fechamentoController.buscarStatusCaixa();
            return res.status(200).send({ fechamento });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao atualizar o fechamento: " + err });
        }
    });
});
router.post('/salvarFechamento', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fechamento = yield fechamentoController.fechamentoSalvar(req, res);
            return res.status(200).send({ fechamento });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao atualizar o fechamento: " + err });
        }
    });
});
router.post('/salvarFechamentoAnterior', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fechamento = yield fechamentoController.fechamentoSalvarAnterior(req, res);
            return res.status(200).send({ fechamento });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao atualizar o fechamento: " + err });
        }
    });
});
router.post('/verificarQuantidadeItem', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const unidade = yield quantidadeController.verificarQuantidadeItem(req, res);
            return res.status(200).send({ unidade });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao atualizar o fechamento: " + err });
        }
    });
});
router.get('/buscarUsers', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const usuarios = yield userController.buscarUsers();
            return res.status(200).send({ usuarios });
        }
        catch (err) {
            return res.status(400).send({ error: "Erro ao buscar os usuarios: " + err });
        }
    });
});
router.get('/buscarUltimosUsers', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const usuarios = yield userController.buscarUltimosUsers();
            return res.status(200).send({ usuarios });
        }
        catch (err) {
            return res.status(400).send({ error: "Erro ao buscar os usuarios: " + err });
        }
    });
});
router.post('/realizarVenda', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const venda = yield vendaController.salvarVenda(req, res);
            return res.status(200).send({ venda });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao atualizar o fechamento: " + err });
        }
    });
});
router.get('/buscarVendasDia', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fechamento = yield fechamentoController.buscarVendasDia();
            return res.status(200).send({ fechamento });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao buscar as vendas: " + err });
        }
    });
});
router.post('/cadastrarCategoria', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const categoria = yield categoriaController.cadastrar(req, res);
            return res.status(200).send({ categoria });
        }
        catch (err) {
            return res.status(400).send({ error: "Error cadastrar a categoria: " + err });
        }
    });
});
router.get('/buscarCategorias', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const categorias = yield categoriaController.buscarCategorias();
            return res.status(200).send({ categorias });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao buscar as vendas: " + err });
        }
    });
});
router.get('/listarVendas', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const vendas = yield vendaController.listarVendas();
            return res.status(200).send({ vendas });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao buscar as vendas: " + err });
        }
    });
});
router.post('/listarVendas', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const vendas = yield vendaController.listarVendasParam(req, res);
            return res.status(200).send({ vendas });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao buscar as vendas: " + err });
        }
    });
});
router.post('/cadastrarCliente', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const cliente = yield clienteController.cadastrarCliente(req, res);
            return res.status(200).send({ cliente });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao cadastrar o cliente: " + err });
        }
    });
});
router.get('/listarClientes', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const clientes = yield clienteController.listarClientes();
            return res.status(200).send({ clientes });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao buscar os clientes: " + err });
        }
    });
});
router.post('/listarClientes', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const clientes = yield clienteController.listarClientesParam(req, res);
            return res.status(200).send({ clientes });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao buscar os clientes: " + err });
        }
    });
});
router.post('/excluirCliente', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const cliente = yield clienteController.excluirCliente(req, res);
            return res.status(200).send({ cliente });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao excluir o cliente: " + err });
        }
    });
});
router.post('/editarCliente', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const cliente = yield clienteController.editarCliente(req, res);
            return res.status(200).send({ cliente });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao editar o cliente: " + err });
        }
    });
});
router.post('/cadastrarFornecedor', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fornecedor = yield fornecedorController.cadastrarFornecedor(req, res);
            return res.status(200).send({ fornecedor });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao cadastrar o fornecedor: " + err });
        }
    });
});
router.get('/listarFornecedores', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fornecedores = yield fornecedorController.listarFornecedores();
            return res.status(200).send({ fornecedores });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao buscar os fornecedores: " + err });
        }
    });
});
router.post('/listarFornecedores', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fornecedores = yield fornecedorController.listarFornecedoresParam(req, res);
            return res.status(200).send({ fornecedores });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao buscar os fornecedores: " + err });
        }
    });
});
router.post('/excluirfornecedor', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fornecedor = yield fornecedorController.excluirFornecedor(req, res);
            return res.status(200).send({ fornecedor });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao excluir o fornecedor: " + err });
        }
    });
});
router.post('/editarFornecedor', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fornecedor = yield fornecedorController.editarFornecedor(req, res);
            return res.status(200).send({ fornecedor });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao editar o cliente: " + err });
        }
    });
});
router.post('/relatorioVendas', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const vendas = yield vendaController.relatorioVendas(req, res);
            return res.status(200).send({ vendas });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao gerar o relatório de vendas: " + err });
        }
    });
});
router.post('/relatorioFechamentos', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const vendas = yield vendaController.relatorioFechamentos(req, res);
            return res.status(200).send({ vendas });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao gerar o relatório de fechamento: " + err });
        }
    });
});
router.post('/relatorioProdutos', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const produtos = yield produtoController.relatorioProdutos(req, res);
            return res.status(200).send({ produtos });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao gerar o relatório de produtos: " + err });
        }
    });
});
router.post('/relatorioClientes', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const clientes = yield clienteController.relatorioClientes(req, res);
            return res.status(200).send({ clientes });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao gerar o relatório de clientes: " + err });
        }
    });
});
router.post('/relatorioFornecedores', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fornecedores = yield fornecedorController.relatorioFornecedores(req, res);
            return res.status(200).send({ fornecedores });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao gerar o relatório de fornecedores: " + err });
        }
    });
});
router.post('/buscarGraficoVendas', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const vendas = yield vendaController.buscarGraficoVendas();
            return res.status(200).send({ vendas });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao buscar o grafico das vendas: " + err });
        }
    });
});
router.get('/listarFechamentos', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fechamentos = yield fechamentoController.listarFechamentos();
            return res.status(200).send({ fechamentos });
        }
        catch (err) {
            return res.status(400).send({ error: "Error ao buscar o grafico dos fechamentos: " + err });
        }
    });
});
router.get('/', function (req, res) {
    console.log("Sem Front End");
});
//# sourceMappingURL=routes.js.map