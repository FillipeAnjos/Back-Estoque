import { EntityRepository, Repository } from "typeorm";
import { Quantidade } from "../models/Quantidade";

@EntityRepository(Quantidade)
class QuantidadeRepositories extends Repository<Quantidade>{


}

export { QuantidadeRepositories }