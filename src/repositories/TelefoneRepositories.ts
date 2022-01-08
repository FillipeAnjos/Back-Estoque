import { EntityRepository, Repository } from "typeorm";
import { Telefone } from "../models/Telefone";

@EntityRepository(Telefone)
class TelefoneRepositories extends Repository<Telefone>{


}

export { TelefoneRepositories }