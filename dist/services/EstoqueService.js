"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueService = void 0;
const typeorm_1 = require("typeorm");
const EstoqueRepositories_1 = require("../repositories/EstoqueRepositories");
class EstoqueService {
    salvarItemEstoque(salvar) {
        const estoqueRepository = (0, typeorm_1.getCustomRepository)(EstoqueRepositories_1.EstoqueRepositories);
        var salvarEstoque = estoqueRepository.create(salvar);
        var itemEstoque = estoqueRepository.save(salvarEstoque);
        if (!itemEstoque) {
            return { error: "Erro ao salvar item no estoque." };
        }
    }
}
exports.EstoqueService = EstoqueService;
//# sourceMappingURL=EstoqueService.js.map