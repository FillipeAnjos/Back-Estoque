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
import { CategoriaRepositories } from "../repositories/CategoriaRepositories";
class CategoriaService {
    cadastrar(descricao) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoriaRepository = getCustomRepository(CategoriaRepositories);
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
            const categoriaRepository = getCustomRepository(CategoriaRepositories);
            const categorias = yield categoriaRepository.createQueryBuilder("categorias").getMany();
            return categorias;
        });
    }
}
export { CategoriaService };
//# sourceMappingURL=CategoriaService.js.map