"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendaService = void 0;
const moment_1 = __importDefault(require("moment"));
const typeorm_1 = require("typeorm");
const VendaRepositories_1 = require("../repositories/VendaRepositories");
const FechamentoService_1 = require("./FechamentoService");
class VendaService {
    async salvarVenda(dados) {
        const vendaRepository = (0, typeorm_1.getCustomRepository)(VendaRepositories_1.VendaRepositories);
        const fechamentoService = new FechamentoService_1.FechamentoService();
        const dataAtual = (0, moment_1.default)(new Date()).format("YYYY-MM-DD");
        if (dados.itens.length == 0) {
            return { error: true, msg: "Sua lista de produtos está vazia, favor informar os produtos da venda." };
        }
        const duplicados = this.verItensDuplicados(dados);
        if (await duplicados) {
            return { error: true, msg: "Error: Você não pode adicionar dois produtos com o mesmo código." };
        }
        var modalidadeEscolhida = null;
        if (dados.modalidade.dinheiro) {
            modalidadeEscolhida = 'dinheiro';
        }
        else if (dados.modalidade.pix) {
            modalidadeEscolhida = 'pix';
        }
        else if (dados.modalidade.credito) {
            modalidadeEscolhida = 'credito';
        }
        else if (dados.modalidade.debito) {
            modalidadeEscolhida = 'debito';
        }
        else if (dados.modalidade.loja) {
            modalidadeEscolhida = 'loja';
        }
        else {
            return { error: true, msg: "Error: Você precisa informar qual a modalidade de pagamento." };
        }
        const idFechamento = await fechamentoService.buscarIdFechamento();
        const connection = (0, typeorm_1.getConnection)();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            dados.valores.desconto = dados.valores.desconto == '' ? null : dados.valores.desconto;
            await queryRunner.manager.query(`insert into vendas (id_fechamento, id_user, desconto, modalidade, valor_total, data, obs) values (${idFechamento}, ${dados.id_user}, ${dados.valores.desconto}, '${modalidadeEscolhida}', ${dados.valores.valortotal}, '${dataAtual}', '${dados.obs}')`);
            const idInserido = await queryRunner.manager.query("select max(id) as id_venda from vendas");
            var arrayUpdateQuantidade = [];
            await Promise.all(dados.itens.map(async (ele) => {
                await queryRunner.manager.query(`insert into itens (id_venda, id_produto, valor_atual, unidade, data) values (${idInserido[0].id_venda}, ${ele.id}, ${ele.valor}, ${ele.unidade}, '${dataAtual}')`);
                const qtdProduto = await queryRunner.manager.query(`select quantidade from quantidades where id_produto = ${ele.id}`);
                var quantidadeNova = qtdProduto[0].quantidade - ele.unidade;
                arrayUpdateQuantidade.push({ id_produto: ele.id, qtd: quantidadeNova, qtd_saida: ele.unidade, valor: ele.valor });
            }));
            arrayUpdateQuantidade.forEach(async (item) => {
                await queryRunner.manager.query(`update quantidades set quantidade = ${item.qtd} where id_produto = ${item.id_produto}`);
                await queryRunner.manager.query(`insert into estoques (id_produto, entrada, saida, saldo, valor_atual, acao) values (${item.id_produto}, null, ${item.qtd_saida}, ${item.qtd}, ${item.valor}, 'Venda')`);
            });
            await queryRunner.commitTransaction();
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            return { error: true, msg: "Ocorreu um erro ao tentar realizar a venda. Favor entrar em contato com o administrador do sistema. Desculpe!" };
        }
        finally {
            await queryRunner.release();
        }
        return { error: false, msg: "Venda realizada com sucesso!" };
    }
    async verItensDuplicados(dados) {
        var arrayIdItens = [];
        dados.itens.forEach(ele => {
            arrayIdItens.push(ele.id);
        });
        var itensIguais = null;
        itensIguais = arrayIdItens.filter(function (ele, pos) {
            if (arrayIdItens.indexOf(ele) != pos) {
                return true;
            }
        }).length;
        if (itensIguais != 0) {
            return true;
        }
    }
    async buscarValorDia(idFechamento = null) {
        if (idFechamento == null) {
            return undefined;
        }
        const vendaRepository = (0, typeorm_1.getCustomRepository)(VendaRepositories_1.VendaRepositories);
        const buscarDadosVenda = await vendaRepository.createQueryBuilder("vendas")
            .where("id_fechamento = :id", { id: idFechamento })
            .getMany();
        var valorSomado = null;
        buscarDadosVenda.forEach((ele, index) => {
            index == 0 ? valorSomado = ele.valor_total : valorSomado += ele.valor_total;
        });
        return valorSomado;
    }
    async listarVendas() {
        const vendaRepository = (0, typeorm_1.getCustomRepository)(VendaRepositories_1.VendaRepositories);
        const vendas = await vendaRepository.createQueryBuilder("vendas").getMany();
        return vendas;
    }
    async listarVendasParam(param) {
        var filtro = parseInt(param.filtro);
        var dados = param.dados;
        const vendaRepository = (0, typeorm_1.getCustomRepository)(VendaRepositories_1.VendaRepositories);
        let dadosVendas = null;
        let queryInicial = 'select * from vendas';
        if (filtro == 1) {
            dadosVendas = `${queryInicial} where data = '${dados}'`;
        }
        else if (filtro == 2) {
            dadosVendas = `${queryInicial} where modalidade like '${dados}%'`;
        }
        else if (filtro == 3) {
            dadosVendas = `${queryInicial} where CAST(valor_total AS TEXT) like '${dados}%'`;
        }
        else {
            dadosVendas = `${queryInicial}`;
        }
        var filtrarVendas = await vendaRepository.query(dadosVendas);
        return filtrarVendas;
    }
    async relatorioVendas(param) {
        var filtro = parseInt(param.filtro);
        var dados = param.dados;
        var dataIni = param.dadosdataini;
        var dataFim = param.dadosdatafim;
        var ordenacao = param.ordenacao;
        var ordenacaoordem = param.ordenacaoordem;
        const vendaRepository = (0, typeorm_1.getCustomRepository)(VendaRepositories_1.VendaRepositories);
        let dadosVendas = null;
        let queryInicial = 'select * from vendas';
        if (filtro != 3) {
            if (filtro == 1) {
                dadosVendas = dados != '' ? `${queryInicial} where id = '${dados}'` : queryInicial;
            }
            else if (filtro == 2) {
                dadosVendas = `${queryInicial} where modalidade like '${dados}%'`;
            }
            else if (filtro == 4) {
                dadosVendas = `${queryInicial} where CAST(valor_total AS TEXT) like '${dados}%'`;
            }
            else if (filtro == 5) {
                dadosVendas = `${queryInicial} where CAST(desconto AS TEXT) like '${dados}%'`;
            }
            else {
                dadosVendas = `${queryInicial}`;
            }
        }
        else {
            if (filtro == 3) {
                if (dataIni == '' || dataFim == '') {
                    dadosVendas = queryInicial;
                }
                else {
                    dadosVendas = `${queryInicial} where data BETWEEN '${dataIni}' and '${dataFim}'`;
                }
            }
            else {
                dadosVendas = `${queryInicial}`;
            }
        }
        dadosVendas = `${dadosVendas} order by ${ordenacao} ${ordenacaoordem}`;
        var filtrarVendas = await vendaRepository.query(dadosVendas);
        return filtrarVendas;
    }
    async relatorioFechamentos(param) {
        var filtro = parseInt(param.filtro);
        var dados = param.dados;
        var dataIni = param.dadosdataini;
        var dataFim = param.dadosdatafim;
        var ordenacao = param.ordenacao;
        var ordenacaoordem = param.ordenacaoordem;
        const vendaRepository = (0, typeorm_1.getCustomRepository)(VendaRepositories_1.VendaRepositories);
        let dadosVendas = null;
        let queryInicial = 'select * from fechamentos';
        if (filtro != 3) {
            if (filtro == 1) {
                dadosVendas = dados != '' ? `${queryInicial} where id = '${dados}'` : queryInicial;
            }
            else if (filtro == 2) {
                dadosVendas = `${queryInicial} where CAST(valor_total AS TEXT) like '${dados}%'`;
            }
            else {
                dadosVendas = `${queryInicial}`;
            }
        }
        else {
            if (filtro == 3) {
                if (dataIni == '' || dataFim == '') {
                    dadosVendas = queryInicial;
                }
                else {
                    dadosVendas = `${queryInicial} where data BETWEEN '${dataIni}' and '${dataFim}'`;
                }
            }
            else {
                dadosVendas = `${queryInicial}`;
            }
        }
        dadosVendas = `${dadosVendas} order by ${ordenacao} ${ordenacaoordem}`;
        var filtrarVendas = await vendaRepository.query(dadosVendas);
        return filtrarVendas;
    }
    async buscarVendasPorMes(interacao) {
        const vendaRepository = (0, typeorm_1.getCustomRepository)(VendaRepositories_1.VendaRepositories);
        var anoAtual = new Date().getFullYear();
        var query = `select count(vendas.id) as vendasmes from vendas where EXTRACT(MONTH  from vendas.data) = ${interacao} and EXTRACT(YEAR from vendas.data) = ${anoAtual}`;
        var vendas = await vendaRepository.query(query);
        return vendas[0].vendasmes;
    }
    async buscarGraficoVendas() {
        var array = [];
        for (var i = 1; i <= 12; i++) {
            array.push(await this.buscarVendasPorMes(i));
        }
        return array;
    }
}
exports.VendaService = VendaService;
//# sourceMappingURL=VendaService.js.map