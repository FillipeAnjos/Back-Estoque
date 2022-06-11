import { getCustomRepository } from "typeorm";
import { EstoqueRepositories } from "../repositories/EstoqueRepositories";
class EstoqueService {
    salvarItemEstoque(salvar) {
        const estoqueRepository = getCustomRepository(EstoqueRepositories);
        var salvarEstoque = estoqueRepository.create(salvar);
        var itemEstoque = estoqueRepository.save(salvarEstoque);
        if (!itemEstoque) {
            return { error: "Erro ao salvar item no estoque." };
        }
    }
}
export { EstoqueService };
//# sourceMappingURL=EstoqueService.js.map