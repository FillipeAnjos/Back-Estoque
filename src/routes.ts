import { Router, Request, Response } from 'express';
import { ProdutoController } from './controllers/ProdutoController';
import { UserController } from './controllers/UserController';

const router = Router();

const userController    = new UserController();
const produtoController = new ProdutoController();

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
        const produtosPram = await produtoController.listarProdutosParam(req, res);
        return res.status(200).send({ produtosPram });
    }catch(err){
        return res.status(400).send({ error: "Erro ao listar produtos: " + err });
    }

})

router.get('/', function(req, res){
    console.log("Sem Front End");
});

export { router }