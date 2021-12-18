import { getCustomRepository } from "typeorm";
import { ProdutoRepositories } from "../repositories/ProdutoRepositories";

interface IProdutoRequest{
    produto: string;
    categoria: string;
    descricao: string;
    cor: string;
    tamanho: string;
    obs: string;
    status: boolean;
}

class ProdutoService{

    async buscarCodigo(){

        const produtoRepository = getCustomRepository(ProdutoRepositories);

        const produto = await produtoRepository.createQueryBuilder("produtos").orderBy("produtos.id", "DESC").limit(1).getMany();

        var produtoId = null;

        produto.map((ele) => produtoId = ele.id )
        produtoId = produtoId + 1;
        
        return { success: "Retorno da quantidade de produtos.", qtd: produtoId };
    }

    async cadastrarProduto({ produto, categoria, descricao, cor, tamanho, obs, status }: IProdutoRequest){

        const produtoRepository = getCustomRepository(ProdutoRepositories);

        const produtoSalvado = produtoRepository.create({produto, categoria, descricao, cor, tamanho, obs, status});

        var prod = await produtoRepository.save(produtoSalvado);

        if(!prod){
            return { error: "Erro ao salvar o produto."};
        }

        return { success: "Produto salvo com sucesso.", prod };

    }

    async listarProdutos(){

        const produtoRepository = getCustomRepository(ProdutoRepositories);

        const listarProdutos = await produtoRepository.createQueryBuilder("produtos").getMany();

        return listarProdutos;

    }

    async listarProdutosParam({filtro, dados}){

        let produtoRepository = getCustomRepository(ProdutoRepositories);
        let dadosProdutos = null;

        if(filtro == 1){
            dadosProdutos = `select * from produtos where produto like '${dados}%'`;
        }else if(filtro == 2){
            dadosProdutos = `select * from produtos where categoria like '${dados}%'`;
        }else if(filtro == 3){
            dadosProdutos = `select * from produtos where descricao like '${dados}%'`;
        }else if(filtro == 4){
            dadosProdutos = `select * from produtos where tamanho like '${dados}%'`;
        }else{
            dadosProdutos = `select * from produtos`;
        }

        var filtrarProdutos = await produtoRepository.query(dadosProdutos);
        
        return filtrarProdutos;
        
    }

}

export { ProdutoService}