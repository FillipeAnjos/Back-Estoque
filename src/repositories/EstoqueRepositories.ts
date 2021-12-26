import { EntityRepository, Repository } from "typeorm";
import { Estoque } from "../models/Estoque";

@EntityRepository(Estoque)
class EstoqueRepositories extends Repository<Estoque>{


}

export { EstoqueRepositories }