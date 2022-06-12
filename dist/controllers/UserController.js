"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../services/UserService");
class UserController {
    async criarUser(request, response) {
        const { nome, sobre, email, senha, nascimento, genero, admin, senhaadm } = request.body.param;
        const userService = new UserService_1.UserService();
        const user = userService.execute({ nome, sobre, email, senha, nascimento, genero, admin, senhaadm });
        return user;
    }
    async logarUser(request, response) {
        const { email, senha } = request.body.param;
        const userService = new UserService_1.UserService();
        const user = userService.logar({ email, senha });
        return user;
    }
    async buscarUserLogado(request, response) {
        const id = request.body.param;
        const userService = new UserService_1.UserService();
        const user = userService.buscarUserLogado(id);
        return user;
    }
    async buscarUsers() {
        const userService = new UserService_1.UserService();
        const user = userService.buscarUsers();
        return user;
    }
    async buscarUltimosUsers() {
        const userService = new UserService_1.UserService();
        const user = userService.buscarUltimosUsers();
        return user;
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map