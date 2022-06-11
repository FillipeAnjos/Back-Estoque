var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ClienteService } from "../services/ClienteService";
class ClienteController {
    cadastrarCliente(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, cpf, nascimento, genero, civil, uf, rg, endereco, numero, tel, cel, email } = request.body.param;
            const clienteService = new ClienteService();
            const cliente = clienteService.cadastrarCliente({ nome, cpf, nascimento, genero, civil, uf, rg, endereco, numero, tel, cel, email });
            return cliente;
        });
    }
    listarClientes() {
        return __awaiter(this, void 0, void 0, function* () {
            const clienteService = new ClienteService();
            const clientes = clienteService.listarClientes();
            return clientes;
        });
    }
    listarClientesParam(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { filtro, dados } = request.body.param;
            const clienteService = new ClienteService();
            const clientes = clienteService.listarClientesParam({ filtro, dados });
            return clientes;
        });
    }
    excluirCliente(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body;
            const clienteService = new ClienteService();
            const excluirCliente = clienteService.excluirCliente({ id });
            return excluirCliente;
        });
    }
    editarCliente(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, nome, cpf, nascimento, genero, civil, uf, rg, endereco, numero, tel, cel, email } = request.body.param;
            const clienteService = new ClienteService();
            const editarCliente = clienteService.editarCliente({ id, nome, cpf, nascimento, genero, civil, uf, rg, endereco, numero, tel, cel, email });
            return editarCliente;
        });
    }
    relatorioClientes(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { filtro, dados, ordenacao, ordenacaoordem } = request.body.param;
            const clienteService = new ClienteService();
            const clientes = clienteService.relatorioClientes({ filtro, dados, ordenacao, ordenacaoordem });
            return clientes;
        });
    }
}
export { ClienteController };
//# sourceMappingURL=ClienteController.js.map