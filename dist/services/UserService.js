var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare, hash } from "bcryptjs";
class UserService {
    execute({ nome, sobre, email, senha, nascimento, genero, admin, senhaadm }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = getCustomRepository(UsersRepositories);
            if (!email) {
                //throw new Error("Favor informar seu email!");
                var error = { error: "Favor informar seu email." };
                return error;
            }
            const userExiste = yield usersRepository.findOne({ email });
            if (userExiste) {
                //throw new Error("Você já possui uma conta!")
                var error = { error: "Você já possui uma conta." };
                return error;
            }
            const senhaHash = yield hash(senha, 8);
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
            var usuario = yield usersRepository.save(userSalved);
            return { success: "Usuário criado com sucesso.", usuario };
        });
    }
    buscarUserLogado(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = getCustomRepository(UsersRepositories);
            const user = yield userRepository.findOne({ id });
            // Verificar se o id existe.
            if (!user) {
                var error = { status: false, error: "usuário não encontrado." };
                return error;
            }
            return user;
        });
    }
    logar({ email, senha }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = getCustomRepository(UsersRepositories);
            const user = yield userRepository.findOne({ email });
            // Verificar se o email existe.
            if (!user) {
                var error = { status: false, error: "Email e/ou Senha incorretos." };
                return error;
            }
            // Verificar se a senha está correta
            const senhHash = yield compare(senha, user.senha);
            if (!senhHash) {
                var error = { status: false, error: "Email e/ou Senha incorretos.." };
                return error;
            }
            // Verificar se o usuário tem perfil de administrador
            if (user.admin != 'true') {
                var error = { status: false, error: "Usuário não é administrador do sistema." };
                return error;
            }
            var token = Math.random().toString() + "_" + user.id; //'Token-12345678911';
            //return { status: true, success: "Usuário logado com sucesso.", name: user }
            return { status: true, success: "Usuário logado com sucesso.", id: user.id, name: user.nome, email: user.email, token: token };
        });
    }
    buscarUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = getCustomRepository(UsersRepositories);
            const usuarios = yield usersRepository.createQueryBuilder("users")
                .where("admin = :admin", { admin: true })
                .getMany();
            return usuarios;
        });
    }
    buscarUltimosUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const usersRepository = getCustomRepository(UsersRepositories);
            const usuarios = yield usersRepository.query(`select * from users order by id desc limit 5`);
            return usuarios;
        });
    }
}
export { UserService };
//# sourceMappingURL=UserService.js.map