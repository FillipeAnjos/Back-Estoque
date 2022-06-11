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
import { EnderecoRepositories } from "../repositories/EnderecoRepositories";
class EnderecoService {
    cadastrarEndereco(enderecoSalvar) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_cliente, endereco, numero, bairro, municipio, uf } = enderecoSalvar;
            const enderecoRepository = getCustomRepository(EnderecoRepositories);
            const enderecoCreate = enderecoRepository.create({ id_cliente, rua: endereco, numero, bairro, municipio, uf });
            const salvarEndereco = yield enderecoRepository.save(enderecoCreate);
            if (!salvarEndereco) {
                return false;
            }
            return true;
        });
    }
    cadastrarEnderecoFornecedor(enderecoSalvar) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_fornecedor, endereco, numero, bairro, municipio, uf } = enderecoSalvar;
            const enderecoRepository = getCustomRepository(EnderecoRepositories);
            const enderecoCreate = enderecoRepository.create({ id_fornecedor, rua: endereco, numero, bairro, municipio, uf });
            const salvarEndereco = yield enderecoRepository.save(enderecoCreate);
            if (!salvarEndereco) {
                return false;
            }
            return true;
        });
    }
    editarEndereco(updateSalvar) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_cliente, rua, numero, uf } = updateSalvar;
            const enderecoRepository = getCustomRepository(EnderecoRepositories);
            const updateEnderecos = enderecoRepository.createQueryBuilder("enderecos")
                .update("enderecos")
                .set({ id_cliente: id_cliente, rua: rua, numero: numero, uf: uf })
                .where("id_cliente = :id_cliente", { id_cliente: id_cliente })
                .execute();
            if (!updateEnderecos) {
                return false;
            }
            return true;
        });
    }
    editarEnderecoFornecedor(updateSalvar) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_fornecedor, rua, numero, uf } = updateSalvar;
            const enderecoRepository = getCustomRepository(EnderecoRepositories);
            const updateEnderecos = enderecoRepository.createQueryBuilder("enderecos")
                .update("enderecos")
                .set({ id_fornecedor: id_fornecedor, rua: rua, numero: numero, uf: uf })
                .where("id_fornecedor = :id_fornecedor", { id_fornecedor: id_fornecedor })
                .execute();
            if (!updateEnderecos) {
                return false;
            }
            return true;
        });
    }
}
export { EnderecoService };
//# sourceMappingURL=EnderecoService.js.map