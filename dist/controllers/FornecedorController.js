import { FornecedorService } from "../services/FornecedorService";
class FornecedorController {
    async cadastrarFornecedor(request, response) {
        const { nome, email, cnpj, razao, falarcom, endereco, numero, cel } = request.body.param;
        const fornecedorService = new FornecedorService();
        const fornecedor = fornecedorService.cadastrarFornecedor({ nome, email, cnpj, razao, falarcom, endereco, numero, cel });
        return fornecedor;
    }
    async listarFornecedores() {
        const fornecedorService = new FornecedorService();
        const fornecedores = fornecedorService.listarFornecedores();
        return fornecedores;
    }
    async listarFornecedoresParam(request, response) {
        const { filtro, dados } = request.body.param;
        const fornecedorService = new FornecedorService();
        const fornecedores = fornecedorService.listarFornecedoresParam({ filtro, dados });
        return fornecedores;
    }
    async excluirFornecedor(request, response) {
        const { id } = request.body;
        const fornecedorService = new FornecedorService();
        const excluirFornecedor = fornecedorService.excluirFornecedor({ id });
        return excluirFornecedor;
    }
    async editarFornecedor(request, response) {
        const { id, nome, cnpj, razao, falarcom, endereco, numero, cel, email } = request.body.param;
        const clienteService = new FornecedorService();
        const editarFornecedor = clienteService.editarFornecedor({ id, nome, cnpj, razao, falarcom, endereco, numero, cel, email });
        return editarFornecedor;
    }
    async relatorioFornecedores(request, response) {
        const { filtro, dados, ordenacao, ordenacaoordem } = request.body.param;
        const fornecedorService = new FornecedorService();
        const fornecedores = fornecedorService.relatorioFornecedores({ filtro, dados, ordenacao, ordenacaoordem });
        return fornecedores;
    }
}
export { FornecedorController };
//# sourceMappingURL=FornecedorController.js.map