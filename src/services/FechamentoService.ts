import { getCustomRepository } from "typeorm";
import { FechamentoRepositories } from "../repositories/FechamentoRepositories";
import moment from "moment";

interface ISalvarFechamento{
    valor_total: number;
    data: Date;
    status: boolean;
}

type ISalvarFechamentoAnterior = Omit<ISalvarFechamento, 'data'>

class FechamentoService{

    async varStatusDataAterior(){

        const fechamentoRepository = getCustomRepository(FechamentoRepositories);

        const dataAtual = new Date();

        const verificarDataCaixa = await fechamentoRepository.createQueryBuilder("fechamentos")
                                                    .where("data < :dataatual", { dataatual: dataAtual })
                                                    .andWhere("status = :status", {status: true})
                                                    .getOne();

        return verificarDataCaixa != undefined ? verificarDataCaixa : true;

    }

    async buscarStatusCaixa(){

        const statusAnterior = await this.varStatusDataAterior();

        if(statusAnterior != true){
            // O usuário não fechou o caixa anterior.
            return statusAnterior;
        }

        const fechamentoRepository = getCustomRepository(FechamentoRepositories);
        
        const dataAtual = moment(new Date()).format("YYYY-MM-DD");

        const verificarDataCaixa = await fechamentoRepository.createQueryBuilder("fechamentos")
                                                    .where("data = :dataatual", { dataatual: dataAtual })
                                                    .getOne();

        if(verificarDataCaixa == undefined){
            // Abrir caixa
            return { caixa: 1, msg: '' };
        }else{

            const verificarStatusCaixa = await fechamentoRepository.createQueryBuilder("fechamentos")
                                                    .where("data = :dataatual", { dataatual: dataAtual })
                                                    .andWhere("status = :status", {status: true})
                                                    .getOne();

            if(verificarStatusCaixa != undefined){
                // Caixa aberto
                return { caixa: 2, msg: 'Caixa aberto com sucesso. Ótimo trabalho ...' };
            }else{
                // Caixa fechado
                return { caixa: 3, msg: 'Caixa fechado com sucesso. Até amanhã ...' };
            }
            
        }

    }
    
    async fechamentoSalvar({ valor_total, data, status }: ISalvarFechamento){

        const dataAtual = moment(new Date()).format("YYYY-MM-DD");

        const fechamentoRepository = getCustomRepository(FechamentoRepositories);

        if(status == true){

            const fechamentoSalvado = fechamentoRepository.create({ valor_total, data: new Date(), status });
    
            var fechar = await fechamentoRepository.save(fechamentoSalvado);

            if(!fechar){
                return { error: "Erro salvar na fechamento."};
            }
            
            const retorno = await this.buscarStatusCaixa();

            return retorno;

        }else{

            const fechamentoEditar = { valor_total, data: new Date(), status };
        
            const fechamentoUpdate = await fechamentoRepository.createQueryBuilder("fechamentos")
                                .update("fechamentos")
                                .set(fechamentoEditar)
                                .where("data = :dataatual", { dataatual: dataAtual })
                                .execute();
            
            if(!fechamentoUpdate){
                return { error: "Erro ao atualizar o fechamento."};
            }

            const retorno = await this.buscarStatusCaixa();

            return retorno;
            
        }

    }

    async fechamentoSalvarAnterior({ valor_total, data, status }: ISalvarFechamento){

        const fechamentoRepository = getCustomRepository(FechamentoRepositories);
 
        const fechamentoEditarAnterior = { valor_total, data, status };

        const fechamentoUpdateAnterior = await fechamentoRepository.createQueryBuilder("fechamentos")
                                                .update("fechamentos")
                                                .set(fechamentoEditarAnterior)
                                                .where("data = :dataantiga", { dataantiga: data })
                                                .execute();

        if(!fechamentoUpdateAnterior){
            return { error: "Erro ao tentar atualizar o fechamento antigo."};
        }      
        
        const retorno = await this.buscarStatusCaixa();

        return retorno;
        
    }

}

export { FechamentoService }