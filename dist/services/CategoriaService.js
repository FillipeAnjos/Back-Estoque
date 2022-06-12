"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaService = void 0;
const typeorm_1 = require("typeorm");
const CategoriaRepositories_1 = require("../repositories/CategoriaRepositories");
class CategoriaService {
    async cadastrar(descricao) {
        const categoriaRepository = (0, typeorm_1.getCustomRepository)(CategoriaRepositories_1.CategoriaRepositories);
        const salvarCategoria = categoriaRepository.create({ descricao });
        const categoriaSalvar = categoriaRepository.save(salvarCategoria);
        if (!categoriaSalvar) {
            return { error: true, msg: "Erro ao salvar a categoria." };
        }
        return { error: false, msg: "Categoria cadastrada com sucesso" };
    }
    async buscarCategorias() {
        const categoriaRepository = (0, typeorm_1.getCustomRepository)(CategoriaRepositories_1.CategoriaRepositories);
        const categorias = await categoriaRepository.createQueryBuilder("categorias").getMany();
        return categorias;
    }
}
exports.CategoriaService = CategoriaService;
//# sourceMappingURL=CategoriaService.js.map