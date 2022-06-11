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
exports.FornecedorService = void 0;
const typeorm_1 = require("typeorm");
const FornecedorRepositories_1 = require("../repositories/FornecedorRepositories");
const EnderecoService_1 = require("./EnderecoService");
const TelefoneService_1 = require("./TelefoneService");
class FornecedorService {
    cadastrarFornecedor(fornecedor) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, email, cnpj, razao, falarcom, endereco, numero, cel } = fornecedor;
            const fornecedorRepository = (0, typeorm_1.getCustomRepository)(FornecedorRepositories_1.FornecedorRepositories);
            const fornecedorCreate = fornecedorRepository.create({ nome, email, cnpj, razao, falarcom });
            const fornecedorSalvar = yield fornecedorRepository.save(fornecedorCreate);
            if (!fornecedorSalvar) {
                return { error: true, msg: "Error ao tentar cadastrar o fornecedor." };
            }
            const idInserido = yield fornecedorRepository.query("select max(id) as id_fornecedor from fornecedores");
            var id_fornecedor = parseInt(idInserido[0].id_fornecedor);
            const enderecoService = new EnderecoService_1.EnderecoService();
            var bairro = null;
            var municipio = null;
            var uf = null;
            const enderecoCadastrar = enderecoService.cadastrarEnderecoFornecedor({ id_fornecedor, endereco, numero, bairro, municipio, uf });
            if (!enderecoCadastrar) {
                return { error: true, msg: "Error ao tentar cadastrar o endereço do fornecedor." };
            }
            const telefoneService = new TelefoneService_1.TelefoneService();
            var celular2 = null;
            var tel = null;
            const telefoneCadastrar = telefoneService.cadastrarTelefoneFornecedor({ id_fornecedor, telefone: tel, celular: cel, celular2 });
            if (!telefoneCadastrar) {
                return { error: true, msg: "Error ao tentar cadastrar o telefone do fornecedor." };
            }
            return { error: false, msg: "Fornecedor cadastrado com sucesso." };
        });
    }
    listarFornecedores() {
        return __awaiter(this, void 0, void 0, function* () {
            const fornecedorRepository = (0, typeorm_1.getCustomRepository)(FornecedorRepositories_1.FornecedorRepositories);
            const fornecedores = yield fornecedorRepository.query(`select 
            f.id as id,
            f.nome,
            f.email,
            f.cnpj,
            f.razao,
            f.falarcom,
            e.rua,
            e.numero,
            e.bairro,
            e.municipio,
            e.uf,
            t.telefone,
            t.celular,
            t.celular2
        from fornecedores f inner join enderecos e on f.id = e.id_fornecedor inner join telefones t on t.id_fornecedor = f.id`);
            return fornecedores;
        });
    }
    listarFornecedoresParam(param) {
        return __awaiter(this, void 0, void 0, function* () {
            var filtro = parseInt(param.filtro);
            var dados = param.dados;
            const fornecedorRepository = (0, typeorm_1.getCustomRepository)(FornecedorRepositories_1.FornecedorRepositories);
            let dadosFornecedores = null;
            let queryInicial = 'select * from fornecedores f inner join enderecos e on f.id = e.id_fornecedor inner join telefones t on t.id_fornecedor = f.id';
            if (filtro == 1) {
                dadosFornecedores = `${queryInicial} where f.nome like '${dados}%'`;
            }
            else if (filtro == 2) {
                dadosFornecedores = `${queryInicial} where f.email like '${dados}%'`;
            }
            else if (filtro == 3) {
                dadosFornecedores = `${queryInicial} where f.cnpj like '${dados}%'`;
            }
            else {
                dadosFornecedores = `${queryInicial}`;
            }
            //console.log(dadosFornecedores);
            var filtrarFornecedores = yield fornecedorRepository.query(dadosFornecedores);
            return filtrarFornecedores;
        });
    }
    excluirFornecedor({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const fornecedorRepository = (0, typeorm_1.getCustomRepository)(FornecedorRepositories_1.FornecedorRepositories);
            if (!id) {
                return { error: true, msg: "Erro código invalido." };
            }
            const endereco = yield fornecedorRepository.query(`delete from enderecos where id_fornecedor = ${id}`);
            if (!endereco) {
                return { error: true, msg: "Erro ao tentar excluir o endereco com o id_fornecedor: " + id };
            }
            const telefone = yield fornecedorRepository.query(`delete from telefones where id_fornecedor = ${id}`);
            if (!telefone) {
                return { error: true, msg: "Erro ao tentar excluir o telefone com o id_fornecedor: " + id };
            }
            const fornecedor = yield fornecedorRepository.query(`delete from fornecedores where id = ${id}`);
            if (!fornecedor) {
                return { error: true, msg: "Erro ao tentar excluir o fornecedor: " + id };
            }
            return { error: false, msg: "Fornecedor excluso com sucesso." };
        });
    }
    editarFornecedor({ id, nome, cnpj, razao, falarcom, endereco, numero, cel, email }) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log({ id, nome, cnpj, razao, falarcom, endereco, numero, cel, email });
            const fornecedorRepository = (0, typeorm_1.getCustomRepository)(FornecedorRepositories_1.FornecedorRepositories);
            const updateFornecedor = fornecedorRepository.createQueryBuilder("fornecedores")
                .update("fornecedores")
                .set({ nome: nome, email: email, cnpj: cnpj, razao: razao, falarcom: falarcom })
                .where("id = :id", { id: id })
                .execute();
            if (!updateFornecedor) {
                return { error: true, msg: "Ocorreu um erro ao atualizar os dados do fornecedor." };
            }
            const enderecoService = new EnderecoService_1.EnderecoService();
            var uf = null;
            const updateEndereco = enderecoService.editarEnderecoFornecedor({ id_fornecedor: parseInt(id), rua: endereco, numero, uf });
            if (!updateEndereco) {
                return { error: true, msg: "Ocorreu um erro ao atualizar os dados do endereco." };
            }
            const telefoneService = new TelefoneService_1.TelefoneService();
            var tel = null;
            const updateTelefone = telefoneService.editarTelefoneFornecedor({ id_fornecedor: parseInt(id), telefone: tel, celular: cel });
            if (!updateTelefone) {
                return { error: true, msg: "Ocorreu um erro ao atualizar os dados do telefone." };
            }
            return { error: false, msg: "Os dados do fornecedor foram atualizados com sucesso." };
        });
    }
    relatorioFornecedores(param) {
        return __awaiter(this, void 0, void 0, function* () {
            var filtro = parseInt(param.filtro);
            var dados = param.dados;
            var ordenacao = param.ordenacao;
            var ordenacaoordem = param.ordenacaoordem;
            const fornecedoresRepository = (0, typeorm_1.getCustomRepository)(FornecedorRepositories_1.FornecedorRepositories);
            let dadosFornecedores = null;
            let queryInicial = `select * from fornecedores`;
            if (filtro == 1) {
                dadosFornecedores = dados != '' ? `${queryInicial} where id = '${dados}'` : queryInicial;
            }
            else if (filtro == 2) {
                dadosFornecedores = `${queryInicial} where nome like '${dados}%'`;
            }
            else if (filtro == 3) {
                dadosFornecedores = `${queryInicial} where email like '${dados}%'`;
            }
            else if (filtro == 4) {
                dadosFornecedores = `${queryInicial} where cnpj like '${dados}%'`;
            }
            else if (filtro == 5) {
                dadosFornecedores = `${queryInicial} where razao like '${dados}%'`;
            }
            else {
                dadosFornecedores = `${queryInicial}`;
            }
            dadosFornecedores = `${dadosFornecedores} order by ${ordenacao} ${ordenacaoordem}`;
            //console.log(dadosFornecedores);
            var filtrarFornecedores = yield fornecedoresRepository.query(dadosFornecedores);
            return filtrarFornecedores;
        });
    }
}
exports.FornecedorService = FornecedorService;
//# sourceMappingURL=FornecedorService.js.map