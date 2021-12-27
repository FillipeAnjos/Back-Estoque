import { Router, Request, Response } from 'express';
import { ProdutoController } from './controllers/ProdutoController';
import { UserController } from './controllers/UserController';
import { QuantidadeController } from './controllers/QuantidadeController';

const router = Router();

const userController       = new UserController();
const produtoController    = new ProdutoController();
const quantidadeController = new QuantidadeController();

router.post('/cadastrarUser', async function(req: Request, res: Response) {
    
    try{
        const user = await userController.criarUser(req, res)
        return res.status(200).send({ user });
    }catch(err){
        return res.status(400).send({ error: "Error ao incluir o usuário."} );
    }
    
} );

router.post('/login', async function(req, res){

    try{
        const user = await userController.logarUser(req, res);
        return res.status(200).send({ user });
    }catch(err){
        return res.status(400).send({ error: "Error ao logar o usuário."} );
    }
    
});

router.post('/buscarCodProd', async function(req, res){
    
    try{
        const resposta = await produtoController.buscarCodigo();
        return res.status(200).send({ resposta });
    }catch(err){
        return res.status(400).send({ error: "Erros ao buscar o código do produto: " + err });
    }

});

router.post('/cadastrarProduto', async function(req, res){

    try{
        const produto = await produtoController.cadastrarProduto(req, res);
        return res.status(200).send({ produto });
    }catch(err){
        return res.status(400).send({ error: "Erro ao cadastrar o produto: " + err });
    }

});

router.get('/listarProdutosInativos', async function(req, res){

    try{
        const produtos = await produtoController.listarProdutosInativos();
        return res.status(200).send({ produtos });
    }catch(err){
        return res.status(400).send({ error: "Erro ao listar os produtos: " + err });
    }

})

router.get('/listarProdutos', async function(req, res){

    try{
        const produtos = await produtoController.listarProdutos();
        return res.status(200).send({ produtos });
    }catch(err){
        return res.status(400).send({ error: "Erro ao listar os produtos: " + err });
    }

})

router.post('/listarProdutos', async function(req, res){

    try{
        const produtos = await produtoController.listarProdutosParam(req, res);
        return res.status(200).send({ produtos });
    }catch(err){
        return res.status(400).send({ error: "Erro ao listar produtos: " + err });
    }

})

router.get('/listarProdutosBalanco', async function(req, res){

    try{
        const produtos = await produtoController.listarProdutosBalanco();
        return res.status(200).send({ produtos });
    }catch(err){
        return res.status(400).send({ error: "Erro ao listar os produtos: " + err });
    }

})

router.post('/listarProdutosBalanco', async function(req, res){

    try{
        const produtos = await produtoController.listarProdutosBalancoParam(req, res);
        return res.status(200).send({ produtos });
    }catch(err){
        return res.status(400).send({ error: "Erro ao listar os produtos: " + err });
    }

})

router.post('/desativarAtivarItem', async function(req, res){

    try{
        const produto = await produtoController.desativarAtivarItem(req, res);
        return res.status(200).send({ produto });
    }catch(err){
        return res.status(400).send({ error: "Error ao desativar o produto: " + err });
    }

})

router.post('/editarProduto', async function(req, res){

    try{
        const produto = await produtoController.editarProduto(req, res);
        return res.status(200).send({ produto });
    }catch(err){
        return res.status(400).send({ error: "Error ao atualizar o produto: " + err });
    }

})

router.post('/editarUnidade', async function(req, res){

    try{
        const unidade = await quantidadeController.editarUnidade(req, res);
        return res.status(200).send({ unidade });
    }catch(err){
        return res.status(400).send({ error: "Error ao atualizar a quantidade do produto: " + err });
    }

})

router.get('/', function(req, res){
    console.log("Sem Front End");
});

export { router }