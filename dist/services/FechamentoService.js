"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FechamentoService = void 0;
const typeorm_1 = require("typeorm");
const FechamentoRepositories_1 = require("../repositories/FechamentoRepositories");
const moment_1 = __importDefault(require("moment"));
const VendaService_1 = require("./VendaService");
class FechamentoService {
    varStatusDataAterior() {
        return __awaiter(this, void 0, void 0, function* () {
            const fechamentoRepository = (0, typeorm_1.getCustomRepository)(FechamentoRepositories_1.FechamentoRepositories);
            const dataAtual = new Date();
            const verificarDataCaixa = yield fechamentoRepository.createQueryBuilder("fechamentos")
                .where("data < :dataatual", { dataatual: dataAtual })
                .andWhere("status = :status", { status: true })
                .getOne();
            return verificarDataCaixa != undefined ? verificarDataCaixa : true;
        });
    }
    buscarStatusCaixa() {
        return __awaiter(this, void 0, void 0, function* () {
            const statusAnterior = yield this.varStatusDataAterior();
            if (statusAnterior != true) {
                // O usuário não fechou o caixa anterior.
                return statusAnterior;
            }
            const fechamentoRepository = (0, typeorm_1.getCustomRepository)(FechamentoRepositories_1.FechamentoRepositories);
            const dataAtual = (0, moment_1.default)(new Date()).format("YYYY-MM-DD");
            const verificarDataCaixa = yield fechamentoRepository.createQueryBuilder("fechamentos")
                .where("data = :dataatual", { dataatual: dataAtual })
                .getOne();
            if (verificarDataCaixa == undefined) {
                // Abrir caixa
                return { caixa: 1, msg: '' };
            }
            else {
                const verificarStatusCaixa = yield fechamentoRepository.createQueryBuilder("fechamentos")
                    .where("data = :dataatual", { dataatual: dataAtual })
                    .andWhere("status = :status", { status: true })
                    .getOne();
                if (verificarStatusCaixa != undefined) {
                    // Caixa aberto
                    return { caixa: 2, msg: 'Caixa aberto com sucesso. Ótimo trabalho ...' };
                }
                else {
                    // Caixa fechado
                    return { caixa: 3, msg: 'Caixa fechado com sucesso. Até amanhã ...' };
                }
            }
        });
    }
    fechamentoSalvar({ valor_total, data, status }) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataAtual = (0, moment_1.default)(new Date()).format("YYYY-MM-DD");
            const fechamentoRepository = (0, typeorm_1.getCustomRepository)(FechamentoRepositories_1.FechamentoRepositories);
            if (status == true) {
                const fechamentoSalvado = fechamentoRepository.create({ valor_total, data: new Date(), status });
                var fechar = yield fechamentoRepository.save(fechamentoSalvado);
                if (!fechar) {
                    return { error: "Erro salvar na fechamento." };
                }
                const retorno = yield this.buscarStatusCaixa();
                return retorno;
            }
            else {
                const fechamentoEditar = { valor_total, data: new Date(), status };
                const fechamentoUpdate = yield fechamentoRepository.createQueryBuilder("fechamentos")
                    .update("fechamentos")
                    .set(fechamentoEditar)
                    .where("data = :dataatual", { dataatual: dataAtual })
                    .execute();
                if (!fechamentoUpdate) {
                    return { error: "Erro ao atualizar o fechamento." };
                }
                const retorno = yield this.buscarStatusCaixa();
                return retorno;
            }
        });
    }
    fechamentoSalvarAnterior({ valor_total, data, status }) {
        return __awaiter(this, void 0, void 0, function* () {
            const fechamentoRepository = (0, typeorm_1.getCustomRepository)(FechamentoRepositories_1.FechamentoRepositories);
            const fechamentoEditarAnterior = { valor_total, data, status };
            const fechamentoUpdateAnterior = yield fechamentoRepository.createQueryBuilder("fechamentos")
                .update("fechamentos")
                .set(fechamentoEditarAnterior)
                .where("data = :dataantiga", { dataantiga: data })
                .execute();
            if (!fechamentoUpdateAnterior) {
                return { error: "Erro ao tentar atualizar o fechamento antigo." };
            }
            const retorno = yield this.buscarStatusCaixa();
            return retorno;
        });
    }
    buscarIdFechamento() {
        return __awaiter(this, void 0, void 0, function* () {
            const fechamentoRepository = (0, typeorm_1.getCustomRepository)(FechamentoRepositories_1.FechamentoRepositories);
            const idFechamento = yield fechamentoRepository.createQueryBuilder("fechamentos")
                .where("valor_total = :vl", { vl: 0 })
                .andWhere("status = :status", { status: true })
                .getOne();
            const { id } = idFechamento;
            return id;
        });
    }
    buscarVendasDia() {
        return __awaiter(this, void 0, void 0, function* () {
            const fechamentoRepository = (0, typeorm_1.getCustomRepository)(FechamentoRepositories_1.FechamentoRepositories);
            const fechamentoDia = yield fechamentoRepository.createQueryBuilder("fechamentos")
                .where("status = :status", { status: true })
                .getOne();
            if (fechamentoDia == undefined) {
                return false;
            }
            const { id } = fechamentoDia;
            const vendaService = new VendaService_1.VendaService();
            const valorVendaDia = vendaService.buscarValorDia(id);
            if ((yield valorVendaDia) == undefined) {
                return false;
            }
            return { error: false, msg: "Venda do dia somada com sucesso.", valor_total: yield valorVendaDia };
        });
    }
    buscarFechamentosPorMes(interacao) {
        return __awaiter(this, void 0, void 0, function* () {
            const fechamentoRepository = (0, typeorm_1.getCustomRepository)(FechamentoRepositories_1.FechamentoRepositories);
            var anoAtual = new Date().getFullYear();
            var query = `select count(fechamentos.id) as fechamentosmes from fechamentos where EXTRACT(MONTH  from fechamentos.data) = ${interacao} and EXTRACT(YEAR from fechamentos.data) = ${anoAtual}`;
            var fechamentos = yield fechamentoRepository.query(query);
            return fechamentos[0].fechamentosmes;
        });
    }
    listarFechamentos() {
        return __awaiter(this, void 0, void 0, function* () {
            var array = [];
            for (var i = 1; i <= 12; i++) {
                array.push(yield this.buscarFechamentosPorMes(i));
            }
            return array;
        });
    }
}
exports.FechamentoService = FechamentoService;
//# sourceMappingURL=FechamentoService.js.map