import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { compare, hash } from "bcryptjs";

interface IUserRequest{
    nome: string; 
    sobre: string; 
    email: string;
    senha: string; 
    nascimento: Date;
    genero: string; 
    admin: string;
    senhaadm: string;
}

interface ILogarUser{
    email: string;
    senha: string;
}

class UserService{

    async execute({ nome, sobre, email, senha, nascimento, genero, admin, senhaadm }: IUserRequest){
        
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
        const adminSalvarBanco = admin == senhaadm ? 'true' : 'false';

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

    async logar({ email, senha }: ILogarUser){

        const userRepository = getCustomRepository(UsersRepositories);

        const user = await userRepository.findOne({email});

        // Verificar se o email existe.
        if(!user){
            var error = { status: false, error: "Email e/ou Senha incorretos." };
            return error;
        }

        // Verificar se a senha está correta
        const senhHash = await compare(senha, user.senha);
        if(!senhHash){
            var error = { status: false, error: "Email e/ou Senha incorretos.." };
            return error;
        }

        // Verificar se o usuário tem perfil de administrador
        if(user.admin != 'true'){
            var error = { status: false, error: "Usuário não é administrador do sistema." };
            return error;
        }

        //return { status: true, success: "Usuário logado com sucesso.", name: user }
        return { status: true, success: "Usuário logado com sucesso.", name: user.nome, email: user.id }

    }

    async buscarUsers(){

        const usersRepository = getCustomRepository(UsersRepositories);

        const usuarios = await usersRepository.createQueryBuilder("users")
                                            .where("admin = :admin", {admin: true})
                                            .getMany();

        return usuarios;

    }

    async buscarUltimosUsers(){

        const usersRepository = getCustomRepository(UsersRepositories);

        const usuarios = await usersRepository.query(`select * from users order by id desc limit 5`);

        return usuarios;

    }

}

export { UserService }