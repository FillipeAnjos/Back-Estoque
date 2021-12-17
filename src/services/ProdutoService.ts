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

        switch (filtro) {
            case 1:
                //produto
                break;
            case 2:
                //Categoria
                break;
            case 3:
                //descricao
                break;
            case 4:
                //tamanho
                break;
        
            default:
                break;
        }
        
        const produtoRepository = getCustomRepository(ProdutoRepositories);
        
        const filtrarProdutos = await produtoRepository.query(`select * from produtos where produto like '${dados}%'`);
        
        console.log(filtrarProdutos);
        
    }

}

export { ProdutoService}