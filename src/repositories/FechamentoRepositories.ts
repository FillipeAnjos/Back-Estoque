import { EntityRepository, Repository } from "typeorm";
import { Fechamento } from "../models/Fechamento";

@EntityRepository(Fechamento)
class FechamentoRepositories extends Repository<Fechamento>{


}

export { FechamentoRepositories }