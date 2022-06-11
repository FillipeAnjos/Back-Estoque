var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UserService } from "../services/UserService";
class UserController {
    criarUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, sobre, email, senha, nascimento, genero, admin, senhaadm } = request.body.param;
            const userService = new UserService();
            const user = userService.execute({ nome, sobre, email, senha, nascimento, genero, admin, senhaadm });
            return user;
        });
    }
    logarUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, senha } = request.body.param;
            const userService = new UserService();
            const user = userService.logar({ email, senha });
            return user;
        });
    }
    buscarUserLogado(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = request.body.param;
            const userService = new UserService();
            const user = userService.buscarUserLogado(id);
            return user;
        });
    }
    buscarUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const userService = new UserService();
            const user = userService.buscarUsers();
            return user;
        });
    }
    buscarUltimosUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const userService = new UserService();
            const user = userService.buscarUltimosUsers();
            return user;
        });
    }
}
export { UserController };
//# sourceMappingURL=UserController.js.map