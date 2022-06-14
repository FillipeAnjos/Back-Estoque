"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = require("express");

var _ProdutoController = require("./controllers/ProdutoController");

var _UserController = require("./controllers/UserController");

var _QuantidadeController = require("./controllers/QuantidadeController");

var _FechamentoController = require("./controllers/FechamentoController");

var _VendaController = require("./controllers/VendaController");

var _CategoriaController = require("./controllers/CategoriaController");

var _ClienteController = require("./controllers/ClienteController");

var _FornecedorController = require("./controllers/FornecedorController");

const router = (0, _express.Router)();
exports.router = router;
const userController = new _UserController.UserController();
const produtoController = new _ProdutoController.ProdutoController();
const quantidadeController = new _QuantidadeController.QuantidadeController();
const fechamentoController = new _FechamentoController.FechamentoController();
const vendaController = new _VendaController.VendaController();
const categoriaController = new _CategoriaController.CategoriaController();
const clienteController = new _ClienteController.ClienteController();
const fornecedorController = new _FornecedorController.FornecedorController();
router.post('/cadastrarUser', async function (req, res) {
  try {
    const user = await userController.criarUser(req, res);
    return res.status(200).send({
      user
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao incluir o usuário."
    });
  }
});
router.post('/login', async function (req, res) {
  try {
    const user = await userController.logarUser(req, res);
    return res.status(200).send({
      user
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao logar o usuário."
    });
  }
});
router.post('/buscarUserLogado', async function (req, res) {
  try {
    const user = await userController.buscarUserLogado(req, res);
    return res.status(200).send({
      user
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao logar o usuário."
    });
  }
});
router.post('/buscarCodProd', async function (req, res) {
  try {
    const resposta = await produtoController.buscarCodigo();
    return res.status(200).send({
      resposta
    });
  } catch (err) {
    return res.status(400).send({
      error: "Erros ao buscar o código do produto: " + err
    });
  }
});
router.post('/cadastrarProduto', async function (req, res) {
  try {
    const produto = await produtoController.cadastrarProduto(req, res);
    return res.status(200).send({
      produto
    });
  } catch (err) {
    return res.status(400).send({
      error: "Erro ao cadastrar o produto: " + err
    });
  }
});
router.get('/listarProdutosInativos', async function (req, res) {
  try {
    const produtos = await produtoController.listarProdutosInativos();
    return res.status(200).send({
      produtos
    });
  } catch (err) {
    return res.status(400).send({
      error: "Erro ao listar os produtos: " + err
    });
  }
});
router.get('/listarProdutos', async function (req, res) {
  try {
    const produtos = await produtoController.listarProdutos();
    return res.status(200).send({
      produtos
    });
  } catch (err) {
    return res.status(400).send({
      error: "Erro ao listar os produtos: " + err
    });
  }
});
router.post('/listarProdutos', async function (req, res) {
  try {
    const produtos = await produtoController.listarProdutosParam(req, res);
    return res.status(200).send({
      produtos
    });
  } catch (err) {
    return res.status(400).send({
      error: "Erro ao listar produtos: " + err
    });
  }
});
router.get('/listarProdutosBalanco', async function (req, res) {
  try {
    const produtos = await produtoController.listarProdutosBalanco();
    return res.status(200).send({
      produtos
    });
  } catch (err) {
    return res.status(400).send({
      error: "Erro ao listar os produtos: " + err
    });
  }
});
router.post('/listarProdutosBalanco', async function (req, res) {
  try {
    const produtos = await produtoController.listarProdutosBalancoParam(req, res);
    return res.status(200).send({
      produtos
    });
  } catch (err) {
    return res.status(400).send({
      error: "Erro ao listar os produtos: " + err
    });
  }
});
router.post('/desativarAtivarItem', async function (req, res) {
  try {
    const produto = await produtoController.desativarAtivarItem(req, res);
    return res.status(200).send({
      produto
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao desativar o produto: " + err
    });
  }
});
router.post('/editarProduto', async function (req, res) {
  try {
    const produto = await produtoController.editarProduto(req, res);
    return res.status(200).send({
      produto
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao atualizar o produto: " + err
    });
  }
});
router.post('/editarUnidade', async function (req, res) {
  try {
    const unidade = await quantidadeController.editarUnidade(req, res);
    return res.status(200).send({
      unidade
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao atualizar a quantidade do produto: " + err
    });
  }
});
router.get('/buscarStatusCaixa', async function (req, res) {
  try {
    const fechamento = await fechamentoController.buscarStatusCaixa();
    return res.status(200).send({
      fechamento
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao atualizar o fechamento: " + err
    });
  }
});
router.post('/salvarFechamento', async function (req, res) {
  try {
    const fechamento = await fechamentoController.fechamentoSalvar(req, res);
    return res.status(200).send({
      fechamento
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao atualizar o fechamento: " + err
    });
  }
});
router.post('/salvarFechamentoAnterior', async function (req, res) {
  try {
    const fechamento = await fechamentoController.fechamentoSalvarAnterior(req, res);
    return res.status(200).send({
      fechamento
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao atualizar o fechamento: " + err
    });
  }
});
router.post('/verificarQuantidadeItem', async function (req, res) {
  try {
    const unidade = await quantidadeController.verificarQuantidadeItem(req, res);
    return res.status(200).send({
      unidade
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao atualizar o fechamento: " + err
    });
  }
});
router.get('/buscarUsers', async function (req, res) {
  try {
    const usuarios = await userController.buscarUsers();
    return res.status(200).send({
      usuarios
    });
  } catch (err) {
    return res.status(400).send({
      error: "Erro ao buscar os usuarios: " + err
    });
  }
});
router.get('/buscarUltimosUsers', async function (req, res) {
  try {
    const usuarios = await userController.buscarUltimosUsers();
    return res.status(200).send({
      usuarios
    });
  } catch (err) {
    return res.status(400).send({
      error: "Erro ao buscar os usuarios: " + err
    });
  }
});
router.post('/realizarVenda', async function (req, res) {
  try {
    const venda = await vendaController.salvarVenda(req, res);
    return res.status(200).send({
      venda
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao atualizar o fechamento: " + err
    });
  }
});
router.get('/buscarVendasDia', async function (req, res) {
  try {
    const fechamento = await fechamentoController.buscarVendasDia();
    return res.status(200).send({
      fechamento
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao buscar as vendas: " + err
    });
  }
});
router.post('/cadastrarCategoria', async function (req, res) {
  try {
    const categoria = await categoriaController.cadastrar(req, res);
    return res.status(200).send({
      categoria
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error cadastrar a categoria: " + err
    });
  }
});
router.get('/buscarCategorias', async function (req, res) {
  try {
    const categorias = await categoriaController.buscarCategorias();
    return res.status(200).send({
      categorias
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao buscar as vendas: " + err
    });
  }
});
router.get('/listarVendas', async function (req, res) {
  try {
    const vendas = await vendaController.listarVendas();
    return res.status(200).send({
      vendas
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao buscar as vendas: " + err
    });
  }
});
router.post('/listarVendas', async function (req, res) {
  try {
    const vendas = await vendaController.listarVendasParam(req, res);
    return res.status(200).send({
      vendas
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao buscar as vendas: " + err
    });
  }
});
router.post('/cadastrarCliente', async function (req, res) {
  try {
    const cliente = await clienteController.cadastrarCliente(req, res);
    return res.status(200).send({
      cliente
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao cadastrar o cliente: " + err
    });
  }
});
router.get('/listarClientes', async function (req, res) {
  try {
    const clientes = await clienteController.listarClientes();
    return res.status(200).send({
      clientes
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao buscar os clientes: " + err
    });
  }
});
router.post('/listarClientes', async function (req, res) {
  try {
    const clientes = await clienteController.listarClientesParam(req, res);
    return res.status(200).send({
      clientes
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao buscar os clientes: " + err
    });
  }
});
router.post('/excluirCliente', async function (req, res) {
  try {
    const cliente = await clienteController.excluirCliente(req, res);
    return res.status(200).send({
      cliente
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao excluir o cliente: " + err
    });
  }
});
router.post('/editarCliente', async function (req, res) {
  try {
    const cliente = await clienteController.editarCliente(req, res);
    return res.status(200).send({
      cliente
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao editar o cliente: " + err
    });
  }
});
router.post('/cadastrarFornecedor', async function (req, res) {
  try {
    const fornecedor = await fornecedorController.cadastrarFornecedor(req, res);
    return res.status(200).send({
      fornecedor
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao cadastrar o fornecedor: " + err
    });
  }
});
router.get('/listarFornecedores', async function (req, res) {
  try {
    const fornecedores = await fornecedorController.listarFornecedores();
    return res.status(200).send({
      fornecedores
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao buscar os fornecedores: " + err
    });
  }
});
router.post('/listarFornecedores', async function (req, res) {
  try {
    const fornecedores = await fornecedorController.listarFornecedoresParam(req, res);
    return res.status(200).send({
      fornecedores
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao buscar os fornecedores: " + err
    });
  }
});
router.post('/excluirfornecedor', async function (req, res) {
  try {
    const fornecedor = await fornecedorController.excluirFornecedor(req, res);
    return res.status(200).send({
      fornecedor
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao excluir o fornecedor: " + err
    });
  }
});
router.post('/editarFornecedor', async function (req, res) {
  try {
    const fornecedor = await fornecedorController.editarFornecedor(req, res);
    return res.status(200).send({
      fornecedor
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao editar o cliente: " + err
    });
  }
});
router.post('/relatorioVendas', async function (req, res) {
  try {
    const vendas = await vendaController.relatorioVendas(req, res);
    return res.status(200).send({
      vendas
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao gerar o relatório de vendas: " + err
    });
  }
});
router.post('/relatorioFechamentos', async function (req, res) {
  try {
    const vendas = await vendaController.relatorioFechamentos(req, res);
    return res.status(200).send({
      vendas
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao gerar o relatório de fechamento: " + err
    });
  }
});
router.post('/relatorioProdutos', async function (req, res) {
  try {
    const produtos = await produtoController.relatorioProdutos(req, res);
    return res.status(200).send({
      produtos
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao gerar o relatório de produtos: " + err
    });
  }
});
router.post('/relatorioClientes', async function (req, res) {
  try {
    const clientes = await clienteController.relatorioClientes(req, res);
    return res.status(200).send({
      clientes
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao gerar o relatório de clientes: " + err
    });
  }
});
router.post('/relatorioFornecedores', async function (req, res) {
  try {
    const fornecedores = await fornecedorController.relatorioFornecedores(req, res);
    return res.status(200).send({
      fornecedores
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao gerar o relatório de fornecedores: " + err
    });
  }
});
router.post('/buscarGraficoVendas', async function (req, res) {
  try {
    const vendas = await vendaController.buscarGraficoVendas();
    return res.status(200).send({
      vendas
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao buscar o grafico das vendas: " + err
    });
  }
});
router.get('/listarFechamentos', async function (req, res) {
  try {
    const fechamentos = await fechamentoController.listarFechamentos();
    return res.status(200).send({
      fechamentos
    });
  } catch (err) {
    return res.status(400).send({
      error: "Error ao buscar o grafico dos fechamentos: " + err
    });
  }
});
router.get('/', function (req, res) {
  console.log("Sem Front End");
});