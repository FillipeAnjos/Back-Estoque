"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FechamentoService = void 0;

var _typeorm = require("typeorm");

var _FechamentoRepositories = require("../repositories/FechamentoRepositories");

var _moment = _interopRequireDefault(require("moment"));

var _VendaService = require("./VendaService");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FechamentoService {
  async varStatusDataAterior() {
    const fechamentoRepository = (0, _typeorm.getCustomRepository)(_FechamentoRepositories.FechamentoRepositories);
    const dataAtual = new Date();
    const verificarDataCaixa = await fechamentoRepository.createQueryBuilder("fechamentos").where("data < :dataatual", {
      dataatual: dataAtual
    }).andWhere("status = :status", {
      status: true
    }).getOne();
    return verificarDataCaixa != undefined ? verificarDataCaixa : true;
  }

  async buscarStatusCaixa() {
    const statusAnterior = await this.varStatusDataAterior();

    if (statusAnterior != true) {
      // O usuário não fechou o caixa anterior.
      return statusAnterior;
    }

    const fechamentoRepository = (0, _typeorm.getCustomRepository)(_FechamentoRepositories.FechamentoRepositories);
    const dataAtual = (0, _moment.default)(new Date()).format("YYYY-MM-DD");
    const verificarDataCaixa = await fechamentoRepository.createQueryBuilder("fechamentos").where("data = :dataatual", {
      dataatual: dataAtual
    }).getOne();

    if (verificarDataCaixa == undefined) {
      // Abrir caixa
      return {
        caixa: 1,
        msg: ''
      };
    } else {
      const verificarStatusCaixa = await fechamentoRepository.createQueryBuilder("fechamentos").where("data = :dataatual", {
        dataatual: dataAtual
      }).andWhere("status = :status", {
        status: true
      }).getOne();

      if (verificarStatusCaixa != undefined) {
        // Caixa aberto
        return {
          caixa: 2,
          msg: 'Caixa aberto com sucesso. Ótimo trabalho ...'
        };
      } else {
        // Caixa fechado
        return {
          caixa: 3,
          msg: 'Caixa fechado com sucesso. Até amanhã ...'
        };
      }
    }
  }

  async fechamentoSalvar({
    valor_total,
    data,
    status
  }) {
    const dataAtual = (0, _moment.default)(new Date()).format("YYYY-MM-DD");
    const fechamentoRepository = (0, _typeorm.getCustomRepository)(_FechamentoRepositories.FechamentoRepositories);

    if (status == true) {
      const fechamentoSalvado = fechamentoRepository.create({
        valor_total,
        data: new Date(),
        status
      });
      var fechar = await fechamentoRepository.save(fechamentoSalvado);

      if (!fechar) {
        return {
          error: "Erro salvar na fechamento."
        };
      }

      const retorno = await this.buscarStatusCaixa();
      return retorno;
    } else {
      const fechamentoEditar = {
        valor_total,
        data: new Date(),
        status
      };
      const fechamentoUpdate = await fechamentoRepository.createQueryBuilder("fechamentos").update("fechamentos").set(fechamentoEditar).where("data = :dataatual", {
        dataatual: dataAtual
      }).execute();

      if (!fechamentoUpdate) {
        return {
          error: "Erro ao atualizar o fechamento."
        };
      }

      const retorno = await this.buscarStatusCaixa();
      return retorno;
    }
  }

  async fechamentoSalvarAnterior({
    valor_total,
    data,
    status
  }) {
    const fechamentoRepository = (0, _typeorm.getCustomRepository)(_FechamentoRepositories.FechamentoRepositories);
    const fechamentoEditarAnterior = {
      valor_total,
      data,
      status
    };
    const fechamentoUpdateAnterior = await fechamentoRepository.createQueryBuilder("fechamentos").update("fechamentos").set(fechamentoEditarAnterior).where("data = :dataantiga", {
      dataantiga: data
    }).execute();

    if (!fechamentoUpdateAnterior) {
      return {
        error: "Erro ao tentar atualizar o fechamento antigo."
      };
    }

    const retorno = await this.buscarStatusCaixa();
    return retorno;
  }

  async buscarIdFechamento() {
    const fechamentoRepository = (0, _typeorm.getCustomRepository)(_FechamentoRepositories.FechamentoRepositories);
    const idFechamento = await fechamentoRepository.createQueryBuilder("fechamentos").where("valor_total = :vl", {
      vl: 0
    }).andWhere("status = :status", {
      status: true
    }).getOne();
    const {
      id
    } = idFechamento;
    return id;
  }

  async buscarVendasDia() {
    const fechamentoRepository = (0, _typeorm.getCustomRepository)(_FechamentoRepositories.FechamentoRepositories);
    const fechamentoDia = await fechamentoRepository.createQueryBuilder("fechamentos").where("status = :status", {
      status: true
    }).getOne();

    if (fechamentoDia == undefined) {
      return false;
    }

    const {
      id
    } = fechamentoDia;
    const vendaService = new _VendaService.VendaService();
    const valorVendaDia = vendaService.buscarValorDia(id);

    if ((await valorVendaDia) == undefined) {
      return false;
    }

    return {
      error: false,
      msg: "Venda do dia somada com sucesso.",
      valor_total: await valorVendaDia
    };
  }

  async buscarFechamentosPorMes(interacao) {
    const fechamentoRepository = (0, _typeorm.getCustomRepository)(_FechamentoRepositories.FechamentoRepositories);
    var anoAtual = new Date().getFullYear();
    var query = `select count(fechamentos.id) as fechamentosmes from fechamentos where EXTRACT(MONTH  from fechamentos.data) = ${interacao} and EXTRACT(YEAR from fechamentos.data) = ${anoAtual}`;
    var fechamentos = await fechamentoRepository.query(query);
    return fechamentos[0].fechamentosmes;
  }

  async listarFechamentos() {
    var array = [];

    for (var i = 1; i <= 12; i++) {
      array.push(await this.buscarFechamentosPorMes(i));
    }

    return array;
  }

}

exports.FechamentoService = FechamentoService;