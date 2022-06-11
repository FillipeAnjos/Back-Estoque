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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaController = void 0;
const CategoriaService_1 = require("../services/CategoriaService");
class CategoriaController {
    cadastrar(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const descricao = request.body.param;
            const categoriaService = new CategoriaService_1.CategoriaService();
            const categoria = categoriaService.cadastrar(descricao);
            return categoria;
        });
    }
    buscarCategorias() {
        return __awaiter(this, void 0, void 0, function* () {
            const categoriaService = new CategoriaService_1.CategoriaService();
            const categoria = categoriaService.buscarCategorias();
            return categoria;
        });
    }
}
exports.CategoriaController = CategoriaController;
//# sourceMappingURL=CategoriaController.js.map