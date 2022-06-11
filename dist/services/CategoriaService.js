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
exports.CategoriaService = void 0;
const typeorm_1 = require("typeorm");
const CategoriaRepositories_1 = require("../repositories/CategoriaRepositories");
class CategoriaService {
    cadastrar(descricao) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoriaRepository = (0, typeorm_1.getCustomRepository)(CategoriaRepositories_1.CategoriaRepositories);
            const salvarCategoria = categoriaRepository.create({ descricao });
            const categoriaSalvar = categoriaRepository.save(salvarCategoria);
            if (!categoriaSalvar) {
                return { error: true, msg: "Erro ao salvar a categoria." };
            }
            return { error: false, msg: "Categoria cadastrada com sucesso" };
        });
    }
    buscarCategorias() {
        return __awaiter(this, void 0, void 0, function* () {
            const categoriaRepository = (0, typeorm_1.getCustomRepository)(CategoriaRepositories_1.CategoriaRepositories);
            const categorias = yield categoriaRepository.createQueryBuilder("categorias").getMany();
            return categorias;
        });
    }
}
exports.CategoriaService = CategoriaService;
//# sourceMappingURL=CategoriaService.js.map