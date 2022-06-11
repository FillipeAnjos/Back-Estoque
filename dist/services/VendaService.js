var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import moment from "moment";
import { getConnection, getCustomRepository } from "typeorm";
import { VendaRepositories } from "../repositories/VendaRepositories";
import { FechamentoService } from "./FechamentoService";
class VendaService {
    salvarVenda(dados) {
        return __awaiter(this, void 0, void 0, function* () {
            const vendaRepository = getCustomRepository(VendaRepositories);
            const fechamentoService = new FechamentoService();
            const dataAtual = moment(new Date()).format("YYYY-MM-DD");
            // ------------------------------------------------------------ Validações ------------------------------------------------------------
            if (dados.itens.length == 0) {
                return { error: true, msg: "Sua lista de produtos está vazia, favor informar os produtos da venda." };
            }
            const duplicados = this.verItensDuplicados(dados);
            if (yield duplicados) {
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
            const idFechamento = yield fechamentoService.buscarIdFechamento();
            // ------------------------------------------------------------------------------------------------------------------------------------
            const connection = getConnection();
            const queryRunner = connection.createQueryRunner();
            yield queryRunner.connect();
            yield queryRunner.startTransaction();
            try {
                dados.valores.desconto = dados.valores.desconto == '' ? null : dados.valores.desconto;
                // Tabela de Vendas
                //      id - autoincrement
                //      idFechamento
                //      dados.id_user
                //      dados.valores.desconto
                //      modalidadeEscolhida
                //      dados.valores.valortotal
                //      dataAtual
                //      dados.obs
                yield queryRunner.manager.query(`insert into vendas (id_fechamento, id_user, desconto, modalidade, valor_total, data, obs) values (${idFechamento}, ${dados.id_user}, ${dados.valores.desconto}, '${modalidadeEscolhida}', ${dados.valores.valortotal}, '${dataAtual}', '${dados.obs}')`);
                const idInserido = yield queryRunner.manager.query("select max(id) as id_venda from vendas");
                var arrayUpdateQuantidade = [];
                yield Promise.all(dados.itens.map((ele) => __awaiter(this, void 0, void 0, function* () {
                    // Tabela de itens
                    //      id - autoincrment
                    //      id_venda
                    //      ele.id
                    //      ele.valor
                    //      ele.unidade
                    //      dataAtual
                    yield queryRunner.manager.query(`insert into itens (id_venda, id_produto, valor_atual, unidade, data) values (${idInserido[0].id_venda}, ${ele.id}, ${ele.valor}, ${ele.unidade}, '${dataAtual}')`);
                    const qtdProduto = yield queryRunner.manager.query(`select quantidade from quantidades where id_produto = ${ele.id}`);
                    var quantidadeNova = qtdProduto[0].quantidade - ele.unidade;
                    arrayUpdateQuantidade.push({ id_produto: ele.id, qtd: quantidadeNova, qtd_saida: ele.unidade, valor: ele.valor });
                })));
                arrayUpdateQuantidade.forEach((item) => __awaiter(this, void 0, void 0, function* () {
                    yield queryRunner.manager.query(`update quantidades set quantidade = ${item.qtd} where id_produto = ${item.id_produto}`);
                    yield queryRunner.manager.query(`insert into estoques (id_produto, entrada, saida, saldo, valor_atual, acao) values (${item.id_produto}, null, ${item.qtd_saida}, ${item.qtd}, ${item.valor}, 'Venda')`);
                }));
                yield queryRunner.commitTransaction();
            }
            catch (err) {
                yield queryRunner.rollbackTransaction();
                return { error: true, msg: "Ocorreu um erro ao tentar realizar a venda. Favor entrar em contato com o administrador do sistema. Desculpe!" };
            }
            finally {
                yield queryRunner.release();
            }
            return { error: false, msg: "Venda realizada com sucesso!" };
        });
    }
    verItensDuplicados(dados) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    buscarValorDia(idFechamento = null) {
        return __awaiter(this, void 0, void 0, function* () {
            if (idFechamento == null) {
                return undefined;
            }
            const vendaRepository = getCustomRepository(VendaRepositories);
            const buscarDadosVenda = yield vendaRepository.createQueryBuilder("vendas")
                .where("id_fechamento = :id", { id: idFechamento })
                .getMany();
            var valorSomado = null;
            buscarDadosVenda.forEach((ele, index) => {
                index == 0 ? valorSomado = ele.valor_total : valorSomado += ele.valor_total;
            });
            return valorSomado;
        });
    }
    listarVendas() {
        return __awaiter(this, void 0, void 0, function* () {
            const vendaRepository = getCustomRepository(VendaRepositories);
            const vendas = yield vendaRepository.createQueryBuilder("vendas").getMany();
            return vendas;
        });
    }
    listarVendasParam(param) {
        return __awaiter(this, void 0, void 0, function* () {
            var filtro = parseInt(param.filtro);
            var dados = param.dados;
            const vendaRepository = getCustomRepository(VendaRepositories);
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
            var filtrarVendas = yield vendaRepository.query(dadosVendas);
            return filtrarVendas;
        });
    }
    relatorioVendas(param) {
        return __awaiter(this, void 0, void 0, function* () {
            var filtro = parseInt(param.filtro);
            var dados = param.dados;
            var dataIni = param.dadosdataini;
            var dataFim = param.dadosdatafim;
            var ordenacao = param.ordenacao;
            var ordenacaoordem = param.ordenacaoordem;
            const vendaRepository = getCustomRepository(VendaRepositories);
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
            //console.log(dadosVendas);
            var filtrarVendas = yield vendaRepository.query(dadosVendas);
            return filtrarVendas;
        });
    }
    relatorioFechamentos(param) {
        return __awaiter(this, void 0, void 0, function* () {
            var filtro = parseInt(param.filtro);
            var dados = param.dados;
            var dataIni = param.dadosdataini;
            var dataFim = param.dadosdatafim;
            var ordenacao = param.ordenacao;
            var ordenacaoordem = param.ordenacaoordem;
            const vendaRepository = getCustomRepository(VendaRepositories);
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
            //console.log(dadosVendas);
            var filtrarVendas = yield vendaRepository.query(dadosVendas);
            return filtrarVendas;
        });
    }
    buscarVendasPorMes(interacao) {
        return __awaiter(this, void 0, void 0, function* () {
            const vendaRepository = getCustomRepository(VendaRepositories);
            var anoAtual = new Date().getFullYear();
            var query = `select count(vendas.id) as vendasmes from vendas where EXTRACT(MONTH  from vendas.data) = ${interacao} and EXTRACT(YEAR from vendas.data) = ${anoAtual}`;
            var vendas = yield vendaRepository.query(query);
            return vendas[0].vendasmes;
        });
    }
    buscarGraficoVendas() {
        return __awaiter(this, void 0, void 0, function* () {
            var array = [];
            for (var i = 1; i <= 12; i++) {
                array.push(yield this.buscarVendasPorMes(i));
            }
            return array;
        });
    }
}
export { VendaService };
//# sourceMappingURL=VendaService.js.map