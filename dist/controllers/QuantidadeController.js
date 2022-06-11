var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { QuantidadeService } from "../services/QuantidadeService";
class QuantidadeController {
    editarUnidade(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_produto, valor, entrada_saida, unidade, acao } = request.body.param;
            const quantidadeService = new QuantidadeService();
            const qtd = quantidadeService.editarUnidade({ id_produto, valor, entrada_saida, unidade, acao });
            return qtd;
        });
    }
    verificarQuantidadeItem(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_produto, unidade } = request.body.param;
            const quantidadeService = new QuantidadeService();
            const qtd = quantidadeService.verificarQuantidadeItem({ id_produto, unidade });
            return qtd;
        });
    }
}
export { QuantidadeController };
//# sourceMappingURL=QuantidadeController.js.map