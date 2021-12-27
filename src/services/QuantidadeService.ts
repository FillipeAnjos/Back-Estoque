import { getCustomRepository } from "typeorm";
import { QuantidadeRepositories } from "../repositories/QuantidadeRepositories";
import { EstoqueService } from "./EstoqueService";

interface IEditarQuantidade{
    id_produto: number;
    valor: number;
    entrada_saida: string;
    unidade: number;
    acao: string;
}

interface ISalvarQtd{
    id_produto: number;
    quantidade: number;
}

class QuantidadeService{

    async salvarQuantidade(dados: ISalvarQtd){

        const quantidadeRepository = getCustomRepository(QuantidadeRepositories);

        const salvarQuantidade = quantidadeRepository.create(dados);

        const salvarqtd = quantidadeRepository.save(salvarQuantidade);
        
        if(!salvarqtd){
            return { error: "Erro ao salvar a quantidade do produto."};
        }

    }

    async editarUnidade(dados: IEditarQuantidade){

        const { id_produto, valor, entrada_saida, unidade, acao } = dados;

        const quantidadeRepository = getCustomRepository(QuantidadeRepositories);

        const dadosQuantidade = await quantidadeRepository.createQueryBuilder("quantidades")
                                            .where("id_produto = :id_produto", {id_produto: id_produto})
                                            .getOne();

        const { quantidade } = dadosQuantidade;

        var quantidadeNova = null;

        const estoqueService = new EstoqueService();
        var dadosEstoque = null;
        
        if(entrada_saida == '1'){ 
            // Entrada

            quantidadeNova = quantidade + unidade;
            
            const darEntrada = quantidadeRepository.createQueryBuilder("quantidades")
                                                    .update("quantidades")
                                                    .set({quantidade: quantidadeNova})
                                                    .where("id_produto = :id_produto", {id_produto: id_produto})
                                                    .execute();

            if(!darEntrada){
                return { error: "Ocorreu um erro ao atualizar a quantidade de entrada."};
            }

            dadosEstoque = {
                id_produto: id_produto,
                entrada: unidade,
                saida: null,
                saldo: quantidadeNova,
                valor_atual: valor,
                acao: acao
            }
            estoqueService.salvarItemEstoque(dadosEstoque);

            return { success: "Quantidade atualizada com sucesso." };
        }

        if(entrada_saida == '0'){ 
            // Saída
            if(quantidade < unidade){
                return { error: "Você não pode dar uma quantidade de saída maior que sua quantidade em estoque."};
            }

            quantidadeNova = quantidade - unidade;

            const darSaida = quantidadeRepository.createQueryBuilder("quantidades")
                                                    .update("quantidades")
                                                    .set({quantidade: quantidadeNova})
                                                    .where("id_produto = :id_produto", {id_produto: id_produto})
                                                    .execute();
            if(!darSaida){
                return { error: "Ocorreu um erro ao atualizar a quantidade de saída."};
            }

            dadosEstoque = {
                id_produto: id_produto,
                entrada: null,
                saida: unidade,
                saldo: quantidadeNova,
                valor_atual: valor,
                acao: acao
            }
            estoqueService.salvarItemEstoque(dadosEstoque);

            return { success: "Quantidade atualizada com sucesso." };

        }

    }

}

export { QuantidadeService }