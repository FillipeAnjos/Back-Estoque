import moment from "moment";
import { getConnection, getCustomRepository } from "typeorm";
import { TelefoneRepositories } from "../repositories/TelefoneRepositories";

interface ITelefoneSalvar{
    id_cliente: number;
    telefone?: string;
    celular: string;
    celular2?: string;
}

class TelefoneService{

    async cadastrarTelefone(telefoneSalvar: ITelefoneSalvar){

        const { id_cliente, telefone, celular, celular2 } = telefoneSalvar;

        const telefoneRepository = getCustomRepository(TelefoneRepositories);
        
        const telefoneCreate = telefoneRepository.create({ id_cliente, telefone, celular, celular2 });

        const salvarTelefone = telefoneRepository.save(telefoneCreate);

        if(!salvarTelefone){
            return false;
        }

        return true;

    }

}

export { TelefoneService }