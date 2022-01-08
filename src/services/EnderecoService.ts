import moment from "moment";
import { getConnection, getCustomRepository } from "typeorm";
import { EnderecoRepositories } from "../repositories/EnderecoRepositories";

interface IEnderecoSalvar{
    id_cliente: number;
    endereco: string;
    numero: number;
    bairro?: string;
    municipio?: string;
    uf?: string;
}

class EnderecoService{

    async cadastrarEndereco(enderecoSalvar: IEnderecoSalvar){

        const { id_cliente, endereco, numero, bairro, municipio, uf } = enderecoSalvar;

        const enderecoRepository = getCustomRepository(EnderecoRepositories);
        
        const enderecoCreate = enderecoRepository.create({ id_cliente, rua: endereco, numero, bairro, municipio, uf });

        const salvarEndereco = enderecoRepository.save(enderecoCreate);

        if(!salvarEndereco){
            return false;
        }

        return true;

    }

}

export { EnderecoService }