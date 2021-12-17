import { EntityRepository, Repository } from "typeorm";
import { Produto } from "../models/Produto";

@EntityRepository(Produto)
class ProdutoRepositories extends Repository<Produto>{


}

export { ProdutoRepositories }