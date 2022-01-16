import moment from "moment";
import { getConnection, getCustomRepository } from "typeorm";
import { EnderecoRepositories } from "../repositories/EnderecoRepositories";

interface IEnderecoSalvar{
    id_cliente?: number;
    id_fornecedor?: number;
    endereco: string;
    numero: number;
    bairro?: string;
    municipio?: string;
    uf?: string;
}

interface IEnderecoUpdate{
    id_cliente?: number;
    id_fornecedor?: number;
    rua: string;
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

        const salvarEndereco = await enderecoRepository.save(enderecoCreate);

        if(!salvarEndereco){
            return false;
        }

        return true;

    }

    async cadastrarEnderecoFornecedor(enderecoSalvar: IEnderecoSalvar){

        const { id_fornecedor, endereco, numero, bairro, municipio, uf } = enderecoSalvar;

        const enderecoRepository = getCustomRepository(EnderecoRepositories);
        
        const enderecoCreate = enderecoRepository.create({ id_fornecedor, rua: endereco, numero, bairro, municipio, uf });

        const salvarEndereco = await enderecoRepository.save(enderecoCreate);

        if(!salvarEndereco){
            return false;
        }

        return true;

    }

    async editarEndereco(updateSalvar: IEnderecoUpdate){

        const { id_cliente, rua, numero, uf } = updateSalvar;

        const enderecoRepository = getCustomRepository(EnderecoRepositories); 

        const updateEnderecos = enderecoRepository.createQueryBuilder("enderecos")
                                                    .update("enderecos")
                                                    .set({ id_cliente: id_cliente, rua: rua, numero: numero, uf: uf })
                                                    .where("id_cliente = :id_cliente", {id_cliente: id_cliente})
                                                    .execute();

        if(!updateEnderecos){
            return false
        }

        return true;

    }

    async editarEnderecoFornecedor(updateSalvar: IEnderecoUpdate){

        const { id_fornecedor, rua, numero, uf } = updateSalvar;

        const enderecoRepository = getCustomRepository(EnderecoRepositories); 

        const updateEnderecos = enderecoRepository.createQueryBuilder("enderecos")
                                                    .update("enderecos")
                                                    .set({ id_fornecedor: id_fornecedor, rua: rua, numero: numero, uf: uf })
                                                    .where("id_fornecedor = :id_fornecedor", {id_fornecedor: id_fornecedor})
                                                    .execute();

        if(!updateEnderecos){
            return false
        }

        return true;

    }

}

export { EnderecoService }