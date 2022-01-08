import { EntityRepository, Repository } from "typeorm";
import { Endereco } from "../models/Endereco";

@EntityRepository(Endereco)
class EnderecoRepositories extends Repository<Endereco>{


}

export { EnderecoRepositories }