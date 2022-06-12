import { CategoriaService } from "../services/CategoriaService";
class CategoriaController {
    async cadastrar(request, response) {
        const descricao = request.body.param;
        const categoriaService = new CategoriaService();
        const categoria = categoriaService.cadastrar(descricao);
        return categoria;
    }
    async buscarCategorias() {
        const categoriaService = new CategoriaService();
        const categoria = categoriaService.buscarCategorias();
        return categoria;
    }
}
export { CategoriaController };
//# sourceMappingURL=CategoriaController.js.map