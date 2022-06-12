"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValorService = void 0;
const typeorm_1 = require("typeorm");
const ValorRepositories_1 = require("../repositories/ValorRepositories");
class ValorService {
    async salvarValor(codigo, valor) {
        var id_produto = codigo;
        const valorRepository = (0, typeorm_1.getCustomRepository)(ValorRepositories_1.ValorRepositories);
        const valorSalvado = valorRepository.create({ id_produto, valor });
        var vlr = await valorRepository.save(valorSalvado);
        if (!vlr) {
            return { error: "Erro ao salvar o valor." };
        }
    }
}
exports.ValorService = ValorService;
//# sourceMappingURL=ValorService.js.map