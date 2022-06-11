"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FornecedorController = void 0;
const FornecedorService_1 = require("../services/FornecedorService");
class FornecedorController {
    cadastrarFornecedor(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, email, cnpj, razao, falarcom, endereco, numero, cel } = request.body.param;
            const fornecedorService = new FornecedorService_1.FornecedorService();
            const fornecedor = fornecedorService.cadastrarFornecedor({ nome, email, cnpj, razao, falarcom, endereco, numero, cel });
            return fornecedor;
        });
    }
    listarFornecedores() {
        return __awaiter(this, void 0, void 0, function* () {
            const fornecedorService = new FornecedorService_1.FornecedorService();
            const fornecedores = fornecedorService.listarFornecedores();
            return fornecedores;
        });
    }
    listarFornecedoresParam(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { filtro, dados } = request.body.param;
            const fornecedorService = new FornecedorService_1.FornecedorService();
            const fornecedores = fornecedorService.listarFornecedoresParam({ filtro, dados });
            return fornecedores;
        });
    }
    excluirFornecedor(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body;
            const fornecedorService = new FornecedorService_1.FornecedorService();
            const excluirFornecedor = fornecedorService.excluirFornecedor({ id });
            return excluirFornecedor;
        });
    }
    editarFornecedor(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, nome, cnpj, razao, falarcom, endereco, numero, cel, email } = request.body.param;
            const clienteService = new FornecedorService_1.FornecedorService();
            const editarFornecedor = clienteService.editarFornecedor({ id, nome, cnpj, razao, falarcom, endereco, numero, cel, email });
            return editarFornecedor;
        });
    }
    relatorioFornecedores(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { filtro, dados, ordenacao, ordenacaoordem } = request.body.param;
            const fornecedorService = new FornecedorService_1.FornecedorService();
            const fornecedores = fornecedorService.relatorioFornecedores({ filtro, dados, ordenacao, ordenacaoordem });
            return fornecedores;
        });
    }
}
exports.FornecedorController = FornecedorController;
//# sourceMappingURL=FornecedorController.js.map