import { EntityRepository, Repository } from "typeorm";
import { Venda } from "../models/Venda";

@EntityRepository(Venda)
class VendaRepositories extends Repository<Venda>{


}

export { VendaRepositories }