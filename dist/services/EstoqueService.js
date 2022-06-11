"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstoqueService = void 0;
var typeorm_1 = require("typeorm");
var EstoqueRepositories_1 = require("../repositories/EstoqueRepositories");
var EstoqueService = /** @class */ (function () {
    function EstoqueService() {
    }
    EstoqueService.prototype.salvarItemEstoque = function (salvar) {
        var estoqueRepository = (0, typeorm_1.getCustomRepository)(EstoqueRepositories_1.EstoqueRepositories);
        var salvarEstoque = estoqueRepository.create(salvar);
        var itemEstoque = estoqueRepository.save(salvarEstoque);
        if (!itemEstoque) {
            return { error: "Erro ao salvar item no estoque." };
        }
    };
    return EstoqueService;
}());
exports.EstoqueService = EstoqueService;
//# sourceMappingURL=EstoqueService.js.map