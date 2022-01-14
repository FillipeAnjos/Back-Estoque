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

    

}

export { FornecedorService }