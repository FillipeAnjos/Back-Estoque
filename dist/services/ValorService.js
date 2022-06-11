"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValorService = void 0;
const typeorm_1 = require("typeorm");
const ValorRepositories_1 = require("../repositories/ValorRepositories");
class ValorService {
    salvarValor(codigo, valor) {
        return __awaiter(this, void 0, void 0, function* () {
            var id_produto = codigo;
            const valorRepository = (0, typeorm_1.getCustomRepository)(ValorRepositories_1.ValorRepositories);
            const valorSalvado = valorRepository.create({ id_produto, valor });
            var vlr = yield valorRepository.save(valorSalvado);
            if (!vlr) {
                return { error: "Erro ao salvar o valor." };
            }
        });
    }
}
exports.ValorService = ValorService;
//# sourceMappingURL=ValorService.js.map