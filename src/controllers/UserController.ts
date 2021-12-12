import { Request, Response } from "express";
import { UserService } from "../services/UserService";


class UserController{

    async criarUser(request: Request, response: Response){

        const { nome, sobre, email, senha, nascimento, genero, admin } = request.body.param

        const userService =  new UserService();

        const user = userService.execute({ nome, sobre, email, senha, nascimento, genero, admin });

        return user;

    }

    async logarUser(request: Request, response: Response){

        const { email, senha } = request.body.param;

        const userService = new UserService();

        const user = userService.logar({ email, senha });

        return user;

    }

}

export { UserController }