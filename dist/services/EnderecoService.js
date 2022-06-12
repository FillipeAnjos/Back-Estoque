"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnderecoService = void 0;
const typeorm_1 = require("typeorm");
const EnderecoRepositories_1 = require("../repositories/EnderecoRepositories");
class EnderecoService {
    async cadastrarEndereco(enderecoSalvar) {
        const { id_cliente, endereco, numero, bairro, municipio, uf } = enderecoSalvar;
        const enderecoRepository = (0, typeorm_1.getCustomRepository)(EnderecoRepositories_1.EnderecoRepositories);
        const enderecoCreate = enderecoRepository.create({ id_cliente, rua: endereco, numero, bairro, municipio, uf });
        const salvarEndereco = await enderecoRepository.save(enderecoCreate);
        if (!salvarEndereco) {
            return false;
        }
        return true;
    }
    async cadastrarEnderecoFornecedor(enderecoSalvar) {
        const { id_fornecedor, endereco, numero, bairro, municipio, uf } = enderecoSalvar;
        const enderecoRepository = (0, typeorm_1.getCustomRepository)(EnderecoRepositories_1.EnderecoRepositories);
        const enderecoCreate = enderecoRepository.create({ id_fornecedor, rua: endereco, numero, bairro, municipio, uf });
        const salvarEndereco = await enderecoRepository.save(enderecoCreate);
        if (!salvarEndereco) {
            return false;
        }
        return true;
    }
    async editarEndereco(updateSalvar) {
        const { id_cliente, rua, numero, uf } = updateSalvar;
        const enderecoRepository = (0, typeorm_1.getCustomRepository)(EnderecoRepositories_1.EnderecoRepositories);
        const updateEnderecos = enderecoRepository.createQueryBuilder("enderecos")
            .update("enderecos")
            .set({ id_cliente: id_cliente, rua: rua, numero: numero, uf: uf })
            .where("id_cliente = :id_cliente", { id_cliente: id_cliente })
            .execute();
        if (!updateEnderecos) {
            return false;
        }
        return true;
    }
    async editarEnderecoFornecedor(updateSalvar) {
        const { id_fornecedor, rua, numero, uf } = updateSalvar;
        const enderecoRepository = (0, typeorm_1.getCustomRepository)(EnderecoRepositories_1.EnderecoRepositories);
        const updateEnderecos = enderecoRepository.createQueryBuilder("enderecos")
            .update("enderecos")
            .set({ id_fornecedor: id_fornecedor, rua: rua, numero: numero, uf: uf })
            .where("id_fornecedor = :id_fornecedor", { id_fornecedor: id_fornecedor })
            .execute();
        if (!updateEnderecos) {
            return false;
        }
        return true;
    }
}
exports.EnderecoService = EnderecoService;
//# sourceMappingURL=EnderecoService.js.map