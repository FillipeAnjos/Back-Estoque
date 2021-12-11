import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { hash } from "bcryptjs";

interface IUserRequest{
    nome: string; 
    sobre: string; 
    email: string;
    senha: string; 
    nascimento: Date;
    genero: string; 
    admin: string
}

class UserService{

    async execute({ nome, sobre, email, senha, nascimento, genero, admin }: IUserRequest){
        
        const usersRepository = getCustomRepository(UsersRepositories);

        if(!email){
            //throw new Error("Favor informar seu email!");
            var error = { error: "Favor informar seu email." };
            return error;
        }

        const userExiste = await usersRepository.findOne({email});

        if(userExiste){
            //throw new Error("Você já possui uma conta!")
            var error = { error: "Você já possui uma conta." };
            return error;
        }

        const senhaHash = await hash(senha, 8);
        const adminSalvarBanco = admin == '24042019' ? 'true' : 'false';

        const userSalved = usersRepository.create({
            nome, 
            sobre, 
            email, 
            senha: senhaHash, 
            nascimento, 
            genero, 
            admin: adminSalvarBanco
        });

        var usuario = await usersRepository.save(userSalved);

        return { success: "Usuário criado com sucesso.", usuario };
    }
}

export { UserService }