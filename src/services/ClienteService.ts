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
    endereco: string;
    numero?: number;
    tel?: string;
    cel: string;
    email: string;
}

interface IListarClientesParam{
    filtro: string;
    dados: string;
}

interface IEditarDadosCliente{
    id: number;
    nome: string;
    cpf: string;
    nascimento: Date;
    genero: string;
    civil: string;
    uf: string;
    rg: string;
    endereco: string;
    numero: number;
    tel: string;
    cel: string;
    email: string;
}

interface IBuscarDadosRelatorio{ 
    filtro: string;
    dados: string;
    ordenacao: string;
    ordenacaoordem: string;
}

class ClienteService{

    async cadastrarCliente(cliente: ICadastrarCliente){

        const { nome, cpf, nascimento, genero, civil, uf, rg, endereco, numero, tel, cel, email } = cliente;

        const clienteRepository = getCustomRepository(ClienteRepositories);
        var nasc = nascimento == '' ? null : nascimento; 
                
        const clienteCreate = clienteRepository.create({ nome, email, cpf, nascimento: nasc, genero, civil, rg });

        const clienteSalvar = await clienteRepository.save(clienteCreate);

        if(!clienteSalvar){
            return { error: true, msg: "Error ao tentar cadastrar o cliente." };
        }

        const idInserido = await clienteRepository.query("select max(id) as id_cliente from clientes");

        var id_cliente = parseInt(idInserido[0].id_cliente);

        const enderecoService = new EnderecoService();
        var bairro    = null;
        var municipio = null;

        const enderecoCadastrar = enderecoService.cadastrarEndereco({ id_cliente, endereco, numero, bairro, municipio, uf });

        if(!enderecoCadastrar){
            return { error: true, msg: "Error ao tentar cadastrar o endereço do cliente." };
        }

        const telefoneService = new TelefoneService();
        var celular2 = null;

        const telefoneCadastrar = telefoneService.cadastrarTelefone({ id_cliente, telefone: tel, celular: cel, celular2 });

        if(!telefoneCadastrar){
            return { error: true, msg: "Error ao tentar cadastrar o telefone do cliente." };
        }

        return { error: false, msg: "Cliente cadastrado com sucesso." };

    }

    async listarClientes(){

        const clienteRepository = getCustomRepository(ClienteRepositories);

        const clientes = await clienteRepository.query(`select c.id as id,
        c.nome as nome,
        c.email as email,
        c.cpf as cpf,
        c.nascimento as nascimento,
        c.genero as genero,
        c.civil as civil,
        c.rg as rg,
        e.rua as rua,
        e.numero as numero,
        e.bairro as bairro,
        e.municipio as municipio,
        e.uf as uf,
        t.telefone as telefone,
        t.celular as celular,
        t.celular2 as celular2 from clientes c inner join enderecos e on c.id = e.id_cliente inner join telefones t on t.id_cliente = c.id`);

        return clientes;

    }

    async listarClientesParam(param: IListarClientesParam){

        var filtro = parseInt(param.filtro);
        var dados  = param.dados;

        const clienteRepository = getCustomRepository(ClienteRepositories);

        let dadosClientes = null;
        let queryInicial = 'select * from clientes c inner join enderecos e on c.id = e.id_cliente inner join telefones t on t.id_cliente = c.id';

        if(filtro == 1){
            dadosClientes = `${queryInicial} where c.nome like '${dados}%'`;
        }else if(filtro == 2){
            dadosClientes = `${queryInicial} where c.email like '${dados}%'`;
        }else if(filtro == 3){
            dadosClientes = `${queryInicial} where c.cpf like '${dados}%'`;
        }else{
            dadosClientes = `${queryInicial}`;
        }

        //console.log(dadosClientes);

        var filtrarClientes = await clienteRepository.query(dadosClientes);

        return filtrarClientes;

    }
    
    async excluirCliente({ id }){
        
        const clienteRepository = getCustomRepository(ClienteRepositories);

        if(!id){
            return { error: true, msg: "Erro código invalido."};
        }

        const endereco = await clienteRepository.query(`delete from enderecos where id_cliente = ${id}`);

        if(!endereco){
            return { error: true, msg: "Erro ao tentar excluir o endereco com o id_cliente: " + id};
        }

        const telefone = await clienteRepository.query(`delete from telefones where id_cliente = ${id}`);

        if(!telefone){
            return { error: true, msg: "Erro ao tentar excluir o telefone com o id_cliente: " + id};
        }

        const cliente = await clienteRepository.query(`delete from clientes where id = ${id}`);

        if(!cliente){
            return { error: true, msg: "Erro ao tentar excluir o cliente: " + id};
        }

        return { error: false, msg: "Cliente excluso com sucesso." }

    }

    async editarCliente({ id, nome, cpf, nascimento, genero, civil, uf, rg, endereco, numero, tel, cel, email }: IEditarDadosCliente){

        //console.log({ id, nome, cpf, nascimento, genero, civil, uf, rg, endereco, numero, tel, cel, email });

        const clienteRepository = getCustomRepository(ClienteRepositories);

        const updateCliente = clienteRepository.createQueryBuilder("clientes")
                                                    .update("clientes")
                                                    .set({nome: nome, email: email, cpf: cpf, nascimento: nascimento, genero: genero, civil: civil, rg: rg})
                                                    .where("id = :id", {id: id})
                                                    .execute();

        if(!updateCliente){
            return { error: true, msg: "Ocorreu um erro ao atualizar os dados do cliente."};
        }

        const enderecoService = new EnderecoService();

        const updateEndereco = enderecoService.editarEndereco({ id_cliente: id, rua: endereco, numero, uf });

        if(!updateEndereco){
            return { error: true, msg: "Ocorreu um erro ao atualizar os dados do endereco."};
        }

        const telefoneService = new TelefoneService();

        const updateTelefone = telefoneService.editarTelefone({ id_cliente: id, telefone: tel, celular: cel });

        if(!updateTelefone){
            return { error: true, msg: "Ocorreu um erro ao atualizar os dados do telefone."};
        }

        return { error: false, msg: "Os dados do cliente foram atualizados com sucesso."};

    }

    async relatorioClientes(param: IBuscarDadosRelatorio){
        
        var filtro         = parseInt(param.filtro);
        var dados          = param.dados;
        var ordenacao      = param.ordenacao;
        var ordenacaoordem = param.ordenacaoordem;

        const clienteRepository = getCustomRepository(ClienteRepositories);

        let dadosClientes = null;
        let queryInicial = `select * from clientes`;

        if(filtro == 1){
            dadosClientes = dados != '' ? `${queryInicial} where id = '${dados}'` : queryInicial
        }else if(filtro == 2){
            dadosClientes = `${queryInicial} where nome like '${dados}%'`;
        }else if(filtro == 3){
            dadosClientes = `${queryInicial} where email like '${dados}%'`;
        }else if(filtro == 4){
            dadosClientes = `${queryInicial} where cpf like '${dados}%'`;
        }else if(filtro == 5){
            dadosClientes = `${queryInicial} where genero like '${dados}%'`;
        }else if(filtro == 6){
            dadosClientes = `${queryInicial} where civil like '${dados}%'`;
        }else if(filtro == 7){
            dadosClientes = `${queryInicial} where rg like '${dados}%'`;
        }else{
            dadosClientes = `${queryInicial}`;
        }

        dadosClientes = `${dadosClientes} order by ${ordenacao} ${ordenacaoordem}`;

        //console.log(dadosClientes);

        var filtrarClientes = await clienteRepository.query(dadosClientes);

        return filtrarClientes;

    }

}

export { ClienteService }