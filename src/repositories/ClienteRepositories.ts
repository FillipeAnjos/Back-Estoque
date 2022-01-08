import { EntityRepository, Repository } from "typeorm";
import { Cliente } from "../models/Cliente";

@EntityRepository(Cliente)
class ClienteRepositories extends Repository<Cliente>{


}

export { ClienteRepositories }