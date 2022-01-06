import { EntityRepository, Repository } from "typeorm";
import { Categoria } from "../models/Categoria";

@EntityRepository(Categoria)
class CategoriaRepositories extends Repository<Categoria>{


}

export { CategoriaRepositories }