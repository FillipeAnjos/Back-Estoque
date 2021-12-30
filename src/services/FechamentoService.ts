import { getCustomRepository } from "typeorm";
import { FechamentoRepositories } from "../repositories/FechamentoRepositories";

interface ISalvarFechamento{
    valor_total: number;
    data: Date;
    status: boolean;
}

class FechamentoService{

    async buscarStatusCaixa(){

        return 1
    }

    async fechamentoSalvar({ valor_total, data, status }: ISalvarFechamento){

        const fechamentoRepository = getCustomRepository(FechamentoRepositories);

        const fechamentoSalvado = fechamentoRepository.create({ valor_total, data, status });

        var fechar = await fechamentoRepository.save(fechamentoSalvado);

        if(!fechar){
            return { error: "Erro salvar na fechamento."};
        }

    }

}

export { FechamentoService }