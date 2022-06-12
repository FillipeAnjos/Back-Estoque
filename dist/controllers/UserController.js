import { UserService } from "../services/UserService";
class UserController {
    async criarUser(request, response) {
        const { nome, sobre, email, senha, nascimento, genero, admin, senhaadm } = request.body.param;
        const userService = new UserService();
        const user = userService.execute({ nome, sobre, email, senha, nascimento, genero, admin, senhaadm });
        return user;
    }
    async logarUser(request, response) {
        const { email, senha } = request.body.param;
        const userService = new UserService();
        const user = userService.logar({ email, senha });
        return user;
    }
    async buscarUserLogado(request, response) {
        const id = request.body.param;
        const userService = new UserService();
        const user = userService.buscarUserLogado(id);
        return user;
    }
    async buscarUsers() {
        const userService = new UserService();
        const user = userService.buscarUsers();
        return user;
    }
    async buscarUltimosUsers() {
        const userService = new UserService();
        const user = userService.buscarUltimosUsers();
        return user;
    }
}
export { UserController };
//# sourceMappingURL=UserController.js.map