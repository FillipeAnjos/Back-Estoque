import { getCustomRepository } from "typeorm";
import { CategoriaRepositories } from "../repositories/CategoriaRepositories";

class CategoriaService{

    async cadastrar(descricao: string){

        const categoriaRepository = getCustomRepository(CategoriaRepositories);

        const salvarCategoria = categoriaRepository.create({descricao});

        const categoriaSalvar = categoriaRepository.save(salvarCategoria);
        
        if(!categoriaSalvar){
            return { error: true, msg: "Erro ao salvar a categoria."};
        }

        return { error: false, msg: "Categoria cadastrada com sucesso"};

    }

    async buscarCategorias(){

        const categoriaRepository = getCustomRepository(CategoriaRepositories);

        const categorias = await categoriaRepository.createQueryBuilder("categorias").getMany();

        return categorias;

    }


}

export { CategoriaService }