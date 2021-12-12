import { Router, Request, Response } from 'express';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();

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


    /*
    var obj = {};
    if(req.body.param.email == 'fillipe.anjos.2000@hotmail.com' && req.body.param.senha == '1234'){
        obj = { status: true, id: 222, name: 'Fillipe dos Anjos', email: 'fillipe.anjos.2000@hotmail.com', idade: 33, senha: '123' };
        return res.json(obj);
    }else{
        obj = { status: false };
        return res.json(obj);
    }*/
    
});

router.get('/', function(req, res){
    console.log("Sem Front End");
});

export { router }