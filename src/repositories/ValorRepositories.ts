import { EntityRepository, Repository } from "typeorm";
import { Valor } from "../models/Valor";

@EntityRepository(Valor)
class ValorRepositories extends Repository<Valor>{


}

export { ValorRepositories }