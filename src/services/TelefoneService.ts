import moment from "moment";
import { getConnection, getCustomRepository } from "typeorm";
import { TelefoneRepositories } from "../repositories/TelefoneRepositories";

interface ITelefoneSalvar{
    id_cliente?: number;
    id_fornecedor?: number;
    telefone?: string;
    celular: string;
    celular2?: string;
}

interface ITelefoneUpdate{
    id_cliente?: number;
    id_fornecedor?: number; 
    telefone: string;
    celular: string;
}

class TelefoneService{

    async cadastrarTelefone(telefoneSalvar: ITelefoneSalvar){

        const { id_cliente, telefone, celular, celular2 } = telefoneSalvar;

        const telefoneRepository = getCustomRepository(TelefoneRepositories);
        
        const telefoneCreate = telefoneRepository.create({ id_cliente, telefone, celular, celular2 });

        const salvarTelefone = await telefoneRepository.save(telefoneCreate);

        if(!salvarTelefone){
            return false;
        }

        return true;

    }

    async cadastrarTelefoneFornecedor(telefoneSalvar: ITelefoneSalvar){

        const { id_fornecedor, telefone, celular, celular2 } = telefoneSalvar;

        const telefoneRepository = getCustomRepository(TelefoneRepositories);
        
        const telefoneCreate = telefoneRepository.create({ id_fornecedor, telefone, celular, celular2 });

        const salvarTelefone = await telefoneRepository.save(telefoneCreate);

        if(!salvarTelefone){
            return false;
        }

        return true;

    }

    async editarTelefone(updateSalvar: ITelefoneUpdate){

        const { id_cliente, telefone, celular } = updateSalvar;

        const telefoneRepository = getCustomRepository(TelefoneRepositories); 

        const updateTelefone = telefoneRepository.createQueryBuilder("telefones")
                                                    .update("telefones")
                                                    .set({ id_cliente: id_cliente, telefone: telefone, celular: celular })
                                                    .where("id_cliente = :id_cliente", {id_cliente: id_cliente})
                                                    .execute();

        if(!updateTelefone){
            return false
        }

        return true;

    }

    async editarTelefoneFornecedor(updateSalvar: ITelefoneUpdate){

        const { id_fornecedor, telefone, celular } = updateSalvar;

        const telefoneRepository = getCustomRepository(TelefoneRepositories); 

        const updateTelefone = telefoneRepository.createQueryBuilder("telefones")
                                                    .update("telefones")
                                                    .set({ id_fornecedor: id_fornecedor, telefone: telefone, celular: celular })
                                                    .where("id_fornecedor = :id_fornecedor", {id_fornecedor: id_fornecedor})
                                                    .execute();

        if(!updateTelefone){
            return false
        }

        return true;

    }

}

export { TelefoneService }