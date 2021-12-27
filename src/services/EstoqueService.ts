import { getCustomRepository } from "typeorm"
import { EstoqueRepositories } from "../repositories/EstoqueRepositories";

interface IEstoqueSalvar{
    id_produto: number;
    entrada: number;
    saida: number;
    saldo: number;
    valor_atual: number;
    acao: string;
}

class EstoqueService{

    salvarItemEstoque(salvar: IEstoqueSalvar){

        const estoqueRepository = getCustomRepository(EstoqueRepositories);

        var salvarEstoque = estoqueRepository.create(salvar);

        var itemEstoque = estoqueRepository.save(salvarEstoque);

        if(!itemEstoque){
            return { error: "Erro ao salvar item no estoque."};
        }

    }

}

export { EstoqueService }