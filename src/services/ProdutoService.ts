import { getCustomRepository } from "typeorm";
import { ProdutoRepositories } from "../repositories/ProdutoRepositories";
import { EstoqueService } from "./EstoqueService";
import { QuantidadeService } from "./QuantidadeService";
import { ValorService } from "./ValorService";

interface IProdutoRequest{
    codigo: number;
    produto: string;
    categoria: string;
    descricao: string;
    cor: string;
    tamanho: string;
    valor: number;
    obs: string;
    status: boolean;
}

interface IBuscarDadosRelatorio{ 
    filtro: string;
    dados: string;
    ordenacao: string;
    ordenacaoordem: string;
}

class ProdutoService{

    async buscarCodigo(){

        const produtoRepository = getCustomRepository(ProdutoRepositories);

        const produto = await produtoRepository.createQueryBuilder("produtos")
                            .orderBy("produtos.id", "DESC")
                            .limit(1)
                            .getMany();

        var produtoId = null;

        produto.map((ele) => produtoId = ele.id )
        produtoId = produtoId + 1;
        
        return { success: "Retorno da quantidade de produtos.", qtd: produtoId };
    }

    async cadastrarProduto({ codigo, produto, categoria, descricao, cor, tamanho, valor, obs, status }: IProdutoRequest){
        
        const produtoRepository = getCustomRepository(ProdutoRepositories);

        const produtoSalvado = produtoRepository.create({produto, categoria, descricao, cor, tamanho, valor, obs, status});

        var prod = await produtoRepository.save(produtoSalvado);

        if(!prod){
            return { error: "Erro ao salvar o produto."};
        }

        const valorService = new ValorService();
        valorService.salvarValor(codigo, valor);

        const quantidadeService = new QuantidadeService();
        var dadosQuantidade = {
            id_produto: codigo,
            quantidade: 1
        }
        quantidadeService.salvarQuantidade(dadosQuantidade);

        const salvarItem = new EstoqueService();
        var dadosSalvarItemEstoque = {
            id_produto: codigo,
            entrada: 1,
            saida: null,
            saldo: 1,
            valor_atual: valor,
            acao: 'Cadastro',
        }        
        salvarItem.salvarItemEstoque(dadosSalvarItemEstoque);

        return { success: "Produto salvo com sucesso.", prod };

    }

    async listarProdutos(ativos = true){

        const produtoRepository = getCustomRepository(ProdutoRepositories);

        /*const listarProdutos = await produtoRepository.createQueryBuilder("produtos")
                                .where('status = :condition', { condition: true })
                                .orderBy("produtos.id", "ASC")
                                .getMany();*/

        const listarProdutos = await produtoRepository
                                .query(`select p.id as id,
                                p.produto as produto,
                                p.categoria as categoria,
                                p.descricao as descricao,
                                p.cor as cor,
                                p.tamanho as tamanho,
                                p.obs as obs,
                                p.valor as valor,
                                p."status" as status,
                                q.quantidade as quantidade from produtos as p inner join quantidades as q on p.id = q.id_produto where p.status = ${ativos} order by p.id ASC`);

        return listarProdutos;

    }

    async listarProdutosBalancoParam({filtro, dados, acao}){

        let produtoRepository = getCustomRepository(ProdutoRepositories);

        let dadosProdutos = null;
        let queryInicial = `select 
        p.id as id,
        p.produto as produto,
        p.categoria as categoria,
        p.descricao as descricao,
        p.cor as cor,
        p.tamanho as tamanho,
        p.obs as obs,
        p.valor as valor,
        p."status" as status,
        q.quantidade as quantidade
         from produtos as p inner join quantidades as q on p.id = q.id_produto`;

        if(filtro == 1){
            dadosProdutos = `${queryInicial} where p.produto like '${dados}%' `;
        }else if(filtro == 2){
            dadosProdutos = `${queryInicial} where p.categoria like '${dados}%' `;
        }else if(filtro == 3){
            dadosProdutos = `${queryInicial} where p.descricao like '${dados}%' `;
        }else if(filtro == 4){
            dadosProdutos = `${queryInicial} where p.tamanho like '${dados}%' `;
        }else{
            dadosProdutos = `${queryInicial}`;
        }

        var filtrarProdutos = await produtoRepository.query(dadosProdutos);
        
        return filtrarProdutos;
        
    }

    async listarProdutosParam({filtro, dados, acao}){

        let produtoRepository = getCustomRepository(ProdutoRepositories);

        let dadosProdutos = null;
        let queryInicial = `select p.id as id,
        p.produto as produto,
        p.categoria as categoria,
        p.descricao as descricao,
        p.cor as cor,
        p.tamanho as tamanho,
        p.obs as obs,
        p.valor as valor,
        p."status" as status,
        q.quantidade as quantidade from produtos as p inner join quantidades as q on p.id = q.id_produto`;

        if(filtro == 1){
            dadosProdutos = `${queryInicial} where p.produto like '${dados}%' and p.status = ${acao}`;
        }else if(filtro == 2){
            dadosProdutos = `${queryInicial} where p.categoria like '${dados}%' and p.status = ${acao}`;
        }else if(filtro == 3){
            dadosProdutos = `${queryInicial} where p.descricao like '${dados}%' and p.status = ${acao}`;
        }else if(filtro == 4){
            dadosProdutos = `${queryInicial} where p.tamanho like '${dados}%' and p.status = ${acao}`;
        }else{
            dadosProdutos = `${queryInicial} where p.status = ${acao}`;
        }

        var filtrarProdutos = await produtoRepository.query(dadosProdutos);
        
        return filtrarProdutos;
        
    }

    async listarProdutosBalanco(){

        const produtoRepository = getCustomRepository(ProdutoRepositories);

        /*const listarProdutos = await produtoRepository.createQueryBuilder("produtos")
                                .where('status = :condition', { condition: true })
                                .orderBy("produtos.id", "ASC")
                                .getMany();*/

        const listarProdutos = await produtoRepository
                                .query(`select 
                                p.id as id,
                                p.produto as produto,
                                p.categoria as categoria,
                                p.descricao as descricao,
                                p.cor as cor,
                                p.tamanho as tamanho,
                                p.obs as obs,
                                p.valor as valor,
                                p."status" as status,
                                q.quantidade as quantidade
                                 from produtos as p inner join quantidades as q on p.id = q.id_produto order by p.id ASC`);

        return listarProdutos;

    }

    async desativarAtivarItem({ id, acao }){
        
        const produtoRepository = getCustomRepository(ProdutoRepositories);

        if(!id){
            return { error: "Erro código invalido."};
        }

        const produto = await produtoRepository.createQueryBuilder("produtos")
                            .update("produtos")
                            .set({ status: acao })
                            .where("id = :id", { id: id })
                            .execute();

        if(!produto){
            return { error: "Erro ao tentar desativar o item."};
        }

        return acao == false ? { success: "Produto desativado com sucesso." } : { success: "Produto ativado com sucesso." };

    }

    async editarProduto({ codigo, produto, categoria, descricao, cor, tamanho, valor, obs, status }){
        
        const produtoRepository = getCustomRepository(ProdutoRepositories);
        
        const produtoEditar = { produto, categoria, descricao, cor, tamanho, valor, obs, status };
        
        const prodSalved = await produtoRepository.createQueryBuilder("produtos")
                            .update("produtos")
                            .set(produtoEditar)
                            .where("id = :id", { id: codigo })
                            .execute();
        
        if(!prodSalved){
            return { error: "Erro ao atualizar o produto."};
        }

        const valorService = new ValorService();
        valorService.salvarValor(codigo, valor);

        var produtosListados = await this.listarProdutos(status);

        return { success: "Produto atualizado com sucesso.", prod: produtosListados };

    }

    async relatorioProdutos(param: IBuscarDadosRelatorio){
        
        var filtro         = parseInt(param.filtro);
        var dados          = param.dados;
        var ordenacao      = param.ordenacao;
        var ordenacaoordem = param.ordenacaoordem;

        const produtoRepository = getCustomRepository(ProdutoRepositories);

        let dadosProdutos = null;
        let queryInicial = `select p.id as id,
        p.produto as produto,
        p.categoria as categoria,
        p.descricao as descricao,
        p.cor as cor,
        p.tamanho as tamanho,
        p.obs as obs,
        p.valor as valor,
        p."status" as status,
        q.quantidade as quantidade from produtos p inner join quantidades q on p.id = q.id_produto`;

        if(filtro == 1){
            dadosProdutos = dados != '' ? `${queryInicial} where id = '${dados}'` : queryInicial
        }else if(filtro == 2){
            dadosProdutos = `${queryInicial} where p.produto like '${dados}%'`;
        }else if(filtro == 3){
            dadosProdutos = `${queryInicial} where p.categoria like '${dados}%'`;
        }else if(filtro == 4){
            dadosProdutos = `${queryInicial} where p.descricao like '${dados}%'`;
        }else if(filtro == 5){
            dadosProdutos = `${queryInicial} where p.cor like '${dados}%'`;
        }else if(filtro == 6){
            dadosProdutos = `${queryInicial} where p.obs like '${dados}%'`;
        }else if(filtro == 7){
            dadosProdutos = `${queryInicial} where CAST(p.valor AS TEXT) like '${dados}%'`;
        }else if(filtro == 8){
            dadosProdutos = `${queryInicial} where p.status = true`;
        }else if(filtro == 9){
            dadosProdutos = `${queryInicial} where p.status = false`;
        }else if(filtro == 10){
            dadosProdutos = `${queryInicial} where q.quantidade = '${dados}'`;
        }else{
            dadosProdutos = `${queryInicial}`;
        }

        dadosProdutos = `${dadosProdutos} order by ${ordenacao} ${ordenacaoordem}`;

        //console.log(dadosProdutos);

        var filtrarProdutos = await produtoRepository.query(dadosProdutos);

        return filtrarProdutos;

    }

}

export { ProdutoService}