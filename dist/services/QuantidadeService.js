"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuantidadeService = void 0;
const typeorm_1 = require("typeorm");
const QuantidadeRepositories_1 = require("../repositories/QuantidadeRepositories");
const EstoqueService_1 = require("./EstoqueService");
class QuantidadeService {
    async salvarQuantidade(dados) {
        const quantidadeRepository = (0, typeorm_1.getCustomRepository)(QuantidadeRepositories_1.QuantidadeRepositories);
        const salvarQuantidade = quantidadeRepository.create(dados);
        const salvarqtd = quantidadeRepository.save(salvarQuantidade);
        if (!salvarqtd) {
            return { error: "Erro ao salvar a quantidade do produto." };
        }
    }
    async editarUnidade(dados) {
        const { id_produto, valor, entrada_saida, unidade, acao } = dados;
        const quantidadeRepository = (0, typeorm_1.getCustomRepository)(QuantidadeRepositories_1.QuantidadeRepositories);
        const dadosQuantidade = await quantidadeRepository.createQueryBuilder("quantidades")
            .where("id_produto = :id_produto", { id_produto: id_produto })
            .getOne();
        const { quantidade } = dadosQuantidade;
        var quantidadeNova = null;
        const estoqueService = new EstoqueService_1.EstoqueService();
        var dadosEstoque = null;
        if (entrada_saida == '1') {
            quantidadeNova = quantidade + unidade;
            const darEntrada = quantidadeRepository.createQueryBuilder("quantidades")
                .update("quantidades")
                .set({ quantidade: quantidadeNova })
                .where("id_produto = :id_produto", { id_produto: id_produto })
                .execute();
            if (!darEntrada) {
                return { error: "Ocorreu um erro ao atualizar a quantidade de entrada." };
            }
            dadosEstoque = {
                id_produto: id_produto,
                entrada: unidade,
                saida: null,
                saldo: quantidadeNova,
                valor_atual: valor,
                acao: acao
            };
            estoqueService.salvarItemEstoque(dadosEstoque);
            return { success: "Quantidade atualizada com sucesso." };
        }
        if (entrada_saida == '0') {
            if (quantidade < unidade) {
                return { error: "Você não pode dar uma quantidade de saída maior que sua quantidade em estoque." };
            }
            quantidadeNova = quantidade - unidade;
            const darSaida = quantidadeRepository.createQueryBuilder("quantidades")
                .update("quantidades")
                .set({ quantidade: quantidadeNova })
                .where("id_produto = :id_produto", { id_produto: id_produto })
                .execute();
            if (!darSaida) {
                return { error: "Ocorreu um erro ao atualizar a quantidade de saída." };
            }
            dadosEstoque = {
                id_produto: id_produto,
                entrada: null,
                saida: unidade,
                saldo: quantidadeNova,
                valor_atual: valor,
                acao: acao
            };
            estoqueService.salvarItemEstoque(dadosEstoque);
            return { success: "Quantidade atualizada com sucesso." };
        }
    }
    async verificarQuantidadeItem({ id_produto, unidade }) {
        const quantidadeRepository = (0, typeorm_1.getCustomRepository)(QuantidadeRepositories_1.QuantidadeRepositories);
        const dadosQuantidade = await quantidadeRepository.createQueryBuilder("quantidades")
            .where("id_produto = :id_produto", { id_produto: id_produto })
            .getOne();
        const { quantidade } = dadosQuantidade;
        if (unidade > quantidade) {
            return { error: "A quantidade escolhida não pode ser maior que a quantidade em loja." };
        }
        if (unidade <= 0) {
            return { error: "A quantidade escolhida tem que ser maior que zero." };
        }
        return unidade;
    }
}
exports.QuantidadeService = QuantidadeService;
//# sourceMappingURL=QuantidadeService.js.map