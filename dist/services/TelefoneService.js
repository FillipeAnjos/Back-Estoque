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
import { TelefoneRepositories } from "../repositories/TelefoneRepositories";
class TelefoneService {
    cadastrarTelefone(telefoneSalvar) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_cliente, telefone, celular, celular2 } = telefoneSalvar;
            const telefoneRepository = getCustomRepository(TelefoneRepositories);
            const telefoneCreate = telefoneRepository.create({ id_cliente, telefone, celular, celular2 });
            const salvarTelefone = yield telefoneRepository.save(telefoneCreate);
            if (!salvarTelefone) {
                return false;
            }
            return true;
        });
    }
    cadastrarTelefoneFornecedor(telefoneSalvar) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_fornecedor, telefone, celular, celular2 } = telefoneSalvar;
            const telefoneRepository = getCustomRepository(TelefoneRepositories);
            const telefoneCreate = telefoneRepository.create({ id_fornecedor, telefone, celular, celular2 });
            const salvarTelefone = yield telefoneRepository.save(telefoneCreate);
            if (!salvarTelefone) {
                return false;
            }
            return true;
        });
    }
    editarTelefone(updateSalvar) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_cliente, telefone, celular } = updateSalvar;
            const telefoneRepository = getCustomRepository(TelefoneRepositories);
            const updateTelefone = telefoneRepository.createQueryBuilder("telefones")
                .update("telefones")
                .set({ id_cliente: id_cliente, telefone: telefone, celular: celular })
                .where("id_cliente = :id_cliente", { id_cliente: id_cliente })
                .execute();
            if (!updateTelefone) {
                return false;
            }
            return true;
        });
    }
    editarTelefoneFornecedor(updateSalvar) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_fornecedor, telefone, celular } = updateSalvar;
            const telefoneRepository = getCustomRepository(TelefoneRepositories);
            const updateTelefone = telefoneRepository.createQueryBuilder("telefones")
                .update("telefones")
                .set({ id_fornecedor: id_fornecedor, telefone: telefone, celular: celular })
                .where("id_fornecedor = :id_fornecedor", { id_fornecedor: id_fornecedor })
                .execute();
            if (!updateTelefone) {
                return false;
            }
            return true;
        });
    }
}
export { TelefoneService };
//# sourceMappingURL=TelefoneService.js.map