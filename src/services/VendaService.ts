import moment from "moment";
import { getCustomRepository } from "typeorm";
import { VendaRepositories } from "../repositories/VendaRepositories";
import { FechamentoService } from "./FechamentoService";

interface IItens{
    id: number;
    produto: string;
    valor: number;
    unidade: number;
}

interface IModalidade{
    dinheiro: boolean;
    pix: boolean;
    credito: boolean;
    debito: boolean;
    loja: boolean;
}

interface IValores{
    subtotal: string;
    desconto: string;
    valortotal: string;
    valorrecebito: string;
    valorrestante: string;
    troco: string;}

interface ISalvarVenda{
    id_user: number;
    itens: IItens[];
    modalidade: IModalidade;
    valores: IValores;
    obs: string;
}

class VendaService{

    async salvarVenda(dados: ISalvarVenda){

        const vendaRepositories = getCustomRepository(VendaRepositories);

        const fechamentoService = new FechamentoService();

        const dataAtual = moment(new Date()).format("YYYY-MM-DD");

        // ------------------------------------------------------------ Validações ------------------------------------------------------------
        
            if(dados.itens.length == 0){
                return { error: true, msg: "Sua lista de produtos está vazia, favor informar os produtos da venda."}
            }

            const duplicados = this.verItensDuplicados(dados);

            if(await duplicados){
                return { error: true, msg: "Error: Você não pode adicionar dois produtos com o mesmo código."}
            }

            var modalidadeEscolhida = null;
            if(dados.modalidade.dinheiro){
                modalidadeEscolhida = 'dinheiro';
            }else if(dados.modalidade.pix){
                modalidadeEscolhida = 'pix';
            }else if(dados.modalidade.credito){
                modalidadeEscolhida = 'credito';
            }else if(dados.modalidade.debito){
                modalidadeEscolhida = 'debito'; 
            }else if(dados.modalidade.loja){
                modalidadeEscolhida = 'loja';
            }else{
                return { error: true, msg: "Error: Você precisa informar qual a modalidade de pagamento."}
            }

        // ------------------------------------------------------------------------------------------------------------------------------------
    
        const idFechamento = await fechamentoService.buscarIdFechamento();

        // Tabela de Vendas
        //      id - autoincrement
        //      idFechamento
        //      dados.id_user
        //      dados.valores.desconto
        //      modalidadeEscolhida
        //      dados.valores.valortotal
        //      dataAtual
        //      dados.obs

        // Tabela de itens
        dados.itens.forEach(ele => {
            // id - autoincrment
            // id_venda
            // ele.id
            // ele.valor
            // ele.unidade
            // dataAtual
        });

        
        return { error: false, msg: "Sucesso!"};
    }

    async verItensDuplicados(dados: ISalvarVenda){

        var arrayIdItens = [];
        dados.itens.forEach(ele => {
            arrayIdItens.push(ele.id);
        });

        var itensIguais = null;

        itensIguais = arrayIdItens.filter(function(ele, pos){
            if(arrayIdItens.indexOf(ele) != pos){
                return true;
            }
        }).length; 
        
        if(itensIguais != 0){
            return true;
        }

    }

}

export { VendaService }