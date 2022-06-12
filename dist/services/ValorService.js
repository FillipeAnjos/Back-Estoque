import { getCustomRepository } from "typeorm";
import { ValorRepositories } from "../repositories/ValorRepositories";
class ValorService {
    async salvarValor(codigo, valor) {
        var id_produto = codigo;
        const valorRepository = getCustomRepository(ValorRepositories);
        const valorSalvado = valorRepository.create({ id_produto, valor });
        var vlr = await valorRepository.save(valorSalvado);
        if (!vlr) {
            return { error: "Erro ao salvar o valor." };
        }
    }
}
export { ValorService };
//# sourceMappingURL=ValorService.js.map