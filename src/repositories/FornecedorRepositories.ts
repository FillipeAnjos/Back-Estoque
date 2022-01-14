import { EntityRepository, Repository } from "typeorm";
import { Fornecedor } from "../models/Fornecedor";

@EntityRepository(Fornecedor)
class FornecedorRepositories extends Repository<Fornecedor>{


}

export { FornecedorRepositories }