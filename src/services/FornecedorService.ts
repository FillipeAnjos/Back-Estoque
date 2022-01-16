import moment from "moment";
import { getConnection, getCustomRepository } from "typeorm";
import { FornecedorRepositories } from "../repositories/FornecedorRepositories";
import { EnderecoService } from "./EnderecoService";
import { TelefoneService } from "./TelefoneService";

interface ICadastrarFornecedor{
    nome: string; 
    email: string; 
    cnpj?: string; 
    razao?: string; 
    falarcom: string;
    endereco: string; 
    numero: number; 
    cel: string;
}

interface IListarFornecedoresParam{
    filtro: string;
    dados: string;
}

interface IEditarDadosFornecedor{
    id: string;
    nome: string;
    cnpj: string;
    razao: string;
    falarcom: string;
    endereco: string;
    numero: number;
    cel: string;
    email: string;
}

class FornecedorService{

    async cadastrarFornecedor(fornecedor: ICadastrarFornecedor){

        const { nome, email, cnpj, razao, falarcom, endereco, numero, cel } = fornecedor;

        const fornecedorRepository = getCustomRepository(FornecedorRepositories);
                
        const fornecedorCreate = fornecedorRepository.create({ nome, email, cnpj, razao, falarcom });

        const fornecedorSalvar = await fornecedorRepository.save(fornecedorCreate);

        if(!fornecedorSalvar){
            return { error: true, msg: "Error ao tentar cadastrar o fornecedor." };
        }

        const idInserido = await fornecedorRepository.query("select max(id) as id_fornecedor from fornecedores");

        var id_fornecedor = parseInt(idInserido[0].id_fornecedor);

        const enderecoService = new EnderecoService();
        var bairro    = null;
        var municipio = null;
        var uf        = null;

        const enderecoCadastrar = enderecoService.cadastrarEnderecoFornecedor({ id_fornecedor, endereco, numero, bairro, municipio, uf });

        if(!enderecoCadastrar){
            return { error: true, msg: "Error ao tentar cadastrar o endereço do fornecedor." };
        }

        const telefoneService = new TelefoneService();
        var celular2 = null;
        var tel      = null;

        const telefoneCadastrar = telefoneService.cadastrarTelefoneFornecedor({ id_fornecedor, telefone: tel, celular: cel, celular2 });

        if(!telefoneCadastrar){
            return { error: true, msg: "Error ao tentar cadastrar o telefone do fornecedor." };
        }

        return { error: false, msg: "Fornecedor cadastrado com sucesso." };

    }

    async listarFornecedores(){

        const fornecedorRepository = getCustomRepository(FornecedorRepositories);

        const fornecedores = await fornecedorRepository.query(`select 
            f.id as id,
            f.nome,
            f.email,
            f.cnpj,
            f.razao,
            f.falarcom,
            e.rua,
            e.numero,
            e.bairro,
            e.municipio,
            e.uf,
            t.telefone,
            t.celular,
            t.celular2
        from fornecedores f inner join enderecos e on f.id = e.id_fornecedor inner join telefones t on t.id_fornecedor = f.id`);

        return fornecedores;

    }

    async listarFornecedoresParam(param: IListarFornecedoresParam){

        var filtro = parseInt(param.filtro);
        var dados  = param.dados;

        const fornecedorRepository = getCustomRepository(FornecedorRepositories);

        let dadosFornecedores = null;
        let queryInicial = 'select * from fornecedores f inner join enderecos e on f.id = e.id_fornecedor inner join telefones t on t.id_fornecedor = f.id';

        if(filtro == 1){
            dadosFornecedores = `${queryInicial} where f.nome like '${dados}%'`;
        }else if(filtro == 2){
            dadosFornecedores = `${queryInicial} where f.email like '${dados}%'`;
        }else if(filtro == 3){
            dadosFornecedores = `${queryInicial} where f.cnpj like '${dados}%'`;
        }else{
            dadosFornecedores = `${queryInicial}`;
        }

        //console.log(dadosFornecedores);

        var filtrarFornecedores = await fornecedorRepository.query(dadosFornecedores);

        return filtrarFornecedores;

    }

    async excluirFornecedor({ id }){
        
        const fornecedorRepository = getCustomRepository(FornecedorRepositories);

        if(!id){
            return { error: true, msg: "Erro código invalido."};
        }

        const endereco = await fornecedorRepository.query(`delete from enderecos where id_fornecedor = ${id}`);

        if(!endereco){
            return { error: true, msg: "Erro ao tentar excluir o endereco com o id_fornecedor: " + id};
        }

        const telefone = await fornecedorRepository.query(`delete from telefones where id_fornecedor = ${id}`);

        if(!telefone){
            return { error: true, msg: "Erro ao tentar excluir o telefone com o id_fornecedor: " + id};
        }

        const fornecedor = await fornecedorRepository.query(`delete from fornecedores where id = ${id}`);

        if(!fornecedor){
            return { error: true, msg: "Erro ao tentar excluir o fornecedor: " + id};
        }

        return { error: false, msg: "Fornecedor excluso com sucesso." }

    }

    async editarFornecedor({ id, nome, cnpj, razao, falarcom, endereco, numero, cel, email }: IEditarDadosFornecedor){

        //console.log({ id, nome, cnpj, razao, falarcom, endereco, numero, cel, email });

        const fornecedorRepository = getCustomRepository(FornecedorRepositories);

        const updateFornecedor = fornecedorRepository.createQueryBuilder("fornecedores")
                                                    .update("fornecedores")
                                                    .set({nome: nome, email: email, cnpj: cnpj, razao: razao, falarcom: falarcom})
                                                    .where("id = :id", {id: id})
                                                    .execute();

        if(!updateFornecedor){
            return { error: true, msg: "Ocorreu um erro ao atualizar os dados do fornecedor."};
        }

        const enderecoService = new EnderecoService();
        var uf = null;

        const updateEndereco = enderecoService.editarEnderecoFornecedor({ id_fornecedor: parseInt(id), rua: endereco, numero, uf });

        if(!updateEndereco){
            return { error: true, msg: "Ocorreu um erro ao atualizar os dados do endereco."};
        }

        const telefoneService = new TelefoneService();
        var tel = null;

        const updateTelefone = telefoneService.editarTelefoneFornecedor({ id_fornecedor: parseInt(id), telefone: tel, celular: cel });

        if(!updateTelefone){
            return { error: true, msg: "Ocorreu um erro ao atualizar os dados do telefone."};
        }

        return { error: false, msg: "Os dados do fornecedor foram atualizados com sucesso."};

    }
    

}

export { FornecedorService }