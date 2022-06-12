import { getCustomRepository } from "typeorm";
import { TelefoneRepositories } from "../repositories/TelefoneRepositories";
class TelefoneService {
    async cadastrarTelefone(telefoneSalvar) {
        const { id_cliente, telefone, celular, celular2 } = telefoneSalvar;
        const telefoneRepository = getCustomRepository(TelefoneRepositories);
        const telefoneCreate = telefoneRepository.create({ id_cliente, telefone, celular, celular2 });
        const salvarTelefone = await telefoneRepository.save(telefoneCreate);
        if (!salvarTelefone) {
            return false;
        }
        return true;
    }
    async cadastrarTelefoneFornecedor(telefoneSalvar) {
        const { id_fornecedor, telefone, celular, celular2 } = telefoneSalvar;
        const telefoneRepository = getCustomRepository(TelefoneRepositories);
        const telefoneCreate = telefoneRepository.create({ id_fornecedor, telefone, celular, celular2 });
        const salvarTelefone = await telefoneRepository.save(telefoneCreate);
        if (!salvarTelefone) {
            return false;
        }
        return true;
    }
    async editarTelefone(updateSalvar) {
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
    }
    async editarTelefoneFornecedor(updateSalvar) {
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
    }
}
export { TelefoneService };
//# sourceMappingURL=TelefoneService.js.map