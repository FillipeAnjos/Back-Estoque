import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare, hash } from "bcryptjs";
class UserService {
    async execute({ nome, sobre, email, senha, nascimento, genero, admin, senhaadm }) {
        const usersRepository = getCustomRepository(UsersRepositories);
        if (!email) {
            var error = { error: "Favor informar seu email." };
            return error;
        }
        const userExiste = await usersRepository.findOne({ email });
        if (userExiste) {
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
    async buscarUserLogado(id) {
        const userRepository = getCustomRepository(UsersRepositories);
        const user = await userRepository.findOne({ id });
        if (!user) {
            var error = { status: false, error: "usuário não encontrado." };
            return error;
        }
        return user;
    }
    async logar({ email, senha }) {
        const userRepository = getCustomRepository(UsersRepositories);
        const user = await userRepository.findOne({ email });
        if (!user) {
            var error = { status: false, error: "Email e/ou Senha incorretos." };
            return error;
        }
        const senhHash = await compare(senha, user.senha);
        if (!senhHash) {
            var error = { status: false, error: "Email e/ou Senha incorretos.." };
            return error;
        }
        if (user.admin != 'true') {
            var error = { status: false, error: "Usuário não é administrador do sistema." };
            return error;
        }
        var token = Math.random().toString() + "_" + user.id;
        return { status: true, success: "Usuário logado com sucesso.", id: user.id, name: user.nome, email: user.email, token: token };
    }
    async buscarUsers() {
        const usersRepository = getCustomRepository(UsersRepositories);
        const usuarios = await usersRepository.createQueryBuilder("users")
            .where("admin = :admin", { admin: true })
            .getMany();
        return usuarios;
    }
    async buscarUltimosUsers() {
        const usersRepository = getCustomRepository(UsersRepositories);
        const usuarios = await usersRepository.query(`select * from users order by id desc limit 5`);
        return usuarios;
    }
}
export { UserService };
//# sourceMappingURL=UserService.js.map