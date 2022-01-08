import moment from "moment";
import { getConnection, getCustomRepository } from "typeorm";
import { ClienteRepositories } from "../repositories/ClienteRepositories";
import { EnderecoService } from "./EnderecoService";
import { TelefoneService } from "./TelefoneService";

interface ICadastrarCliente{
    nome: string;
    cpf?: string;
    nascimento?: string;
    genero?: string;
    civil?: string;
    uf?: string;
    rg?: string;
    endereco?: string;
    numero?: number;
    tel?: string;
    cel: string;
    email: string;
}

class ClienteService{

    async cadastrarCliente(cliente: ICadastrarCliente){

        const { nome, cpf, nascimento, genero, civil, uf, rg, endereco, numero, tel, cel, email } = cliente;

        const clienteRepository = getCustomRepository(ClienteRepositories);
        var nasc = nascimento == '' ? null : nascimento; 
                
        const clienteCreate = clienteRepository.create({ nome, email, cpf, nascimento: nasc, genero, civil, rg });

        const clienteSalvar = clienteRepository.save(clienteCreate);

        if(!clienteSalvar){
            return { error: true, msg: "Error ao tentar cadastrar o cliente." };
        }

        const idInserido = await clienteRepository.query("select max(id) as id_cliente from clientes");
        var id_cliente = parseInt(idInserido[0].id_cliente);

        const enderecoService = new EnderecoService();
        var bairro    = null;
        var municipio = null;

        if(endereco != ''){
            const enderecoCadastrar = enderecoService.cadastrarEndereco({ id_cliente, endereco, numero, bairro, municipio, uf });

            if(!enderecoCadastrar){
                return { error: true, msg: "Error ao tentar cadastrar o endereço do cliente." };
            }
        }

        const idInseridoCli = await clienteRepository.query("select max(id) as id_cliente from clientes");
        var id_cliente = parseInt(idInseridoCli[0].id_cliente);

        const telefoneService = new TelefoneService();
        var celular2 = null;

        const telefoneCadastrar = telefoneService.cadastrarTelefone({ id_cliente, telefone: tel, celular: cel, celular2 });

        if(!telefoneCadastrar){
            return { error: true, msg: "Error ao tentar cadastrar o telefone do cliente." };
        }

        return { error: false, msg: "Cliente cadastrado com sucesso." };

    }

}

export { ClienteService }