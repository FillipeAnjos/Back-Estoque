import { Request, Response } from "express";
import { CategoriaService } from "../services/CategoriaService";

class CategoriaController{

    async cadastrar(request: Request, response: Response) {

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

export { CategoriaController }