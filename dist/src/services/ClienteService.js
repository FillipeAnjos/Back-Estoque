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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteService = void 0;
var typeorm_1 = require("typeorm");
var ClienteRepositories_1 = require("../repositories/ClienteRepositories");
var EnderecoService_1 = require("./EnderecoService");
var TelefoneService_1 = require("./TelefoneService");
var ClienteService = (function () {
    function ClienteService() {
    }
    ClienteService.prototype.cadastrarCliente = function (cliente) {
        return __awaiter(this, void 0, void 0, function () {
            var nome, cpf, nascimento, genero, civil, uf, rg, endereco, numero, tel, cel, email, clienteRepository, nasc, clienteCreate, clienteSalvar, idInserido, id_cliente, enderecoService, bairro, municipio, enderecoCadastrar, telefoneService, celular2, telefoneCadastrar;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nome = cliente.nome, cpf = cliente.cpf, nascimento = cliente.nascimento, genero = cliente.genero, civil = cliente.civil, uf = cliente.uf, rg = cliente.rg, endereco = cliente.endereco, numero = cliente.numero, tel = cliente.tel, cel = cliente.cel, email = cliente.email;
                        clienteRepository = (0, typeorm_1.getCustomRepository)(ClienteRepositories_1.ClienteRepositories);
                        nasc = nascimento == '' ? null : nascimento;
                        clienteCreate = clienteRepository.create({ nome: nome, email: email, cpf: cpf, nascimento: nasc, genero: genero, civil: civil, rg: rg });
                        return [4, clienteRepository.save(clienteCreate)];
                    case 1:
                        clienteSalvar = _a.sent();
                        if (!clienteSalvar) {
                            return [2, { error: true, msg: "Error ao tentar cadastrar o cliente." }];
                        }
                        return [4, clienteRepository.query("select max(id) as id_cliente from clientes")];
                    case 2:
                        idInserido = _a.sent();
                        id_cliente = parseInt(idInserido[0].id_cliente);
                        enderecoService = new EnderecoService_1.EnderecoService();
                        bairro = null;
                        municipio = null;
                        enderecoCadastrar = enderecoService.cadastrarEndereco({ id_cliente: id_cliente, endereco: endereco, numero: numero, bairro: bairro, municipio: municipio, uf: uf });
                        if (!enderecoCadastrar) {
                            return [2, { error: true, msg: "Error ao tentar cadastrar o endereço do cliente." }];
                        }
                        telefoneService = new TelefoneService_1.TelefoneService();
                        celular2 = null;
                        telefoneCadastrar = telefoneService.cadastrarTelefone({ id_cliente: id_cliente, telefone: tel, celular: cel, celular2: celular2 });
                        if (!telefoneCadastrar) {
                            return [2, { error: true, msg: "Error ao tentar cadastrar o telefone do cliente." }];
                        }
                        return [2, { error: false, msg: "Cliente cadastrado com sucesso." }];
                }
            });
        });
    };
    ClienteService.prototype.listarClientes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var clienteRepository, clientes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        clienteRepository = (0, typeorm_1.getCustomRepository)(ClienteRepositories_1.ClienteRepositories);
                        return [4, clienteRepository.query("select c.id as id,\n        c.nome as nome,\n        c.email as email,\n        c.cpf as cpf,\n        c.nascimento as nascimento,\n        c.genero as genero,\n        c.civil as civil,\n        c.rg as rg,\n        e.rua as rua,\n        e.numero as numero,\n        e.bairro as bairro,\n        e.municipio as municipio,\n        e.uf as uf,\n        t.telefone as telefone,\n        t.celular as celular,\n        t.celular2 as celular2 from clientes c inner join enderecos e on c.id = e.id_cliente inner join telefones t on t.id_cliente = c.id")];
                    case 1:
                        clientes = _a.sent();
                        return [2, clientes];
                }
            });
        });
    };
    ClienteService.prototype.listarClientesParam = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var filtro, dados, clienteRepository, dadosClientes, queryInicial, filtrarClientes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filtro = parseInt(param.filtro);
                        dados = param.dados;
                        clienteRepository = (0, typeorm_1.getCustomRepository)(ClienteRepositories_1.ClienteRepositories);
                        dadosClientes = null;
                        queryInicial = 'select * from clientes c inner join enderecos e on c.id = e.id_cliente inner join telefones t on t.id_cliente = c.id';
                        if (filtro == 1) {
                            dadosClientes = "".concat(queryInicial, " where c.nome like '").concat(dados, "%'");
                        }
                        else if (filtro == 2) {
                            dadosClientes = "".concat(queryInicial, " where c.email like '").concat(dados, "%'");
                        }
                        else if (filtro == 3) {
                            dadosClientes = "".concat(queryInicial, " where c.cpf like '").concat(dados, "%'");
                        }
                        else {
                            dadosClientes = "".concat(queryInicial);
                        }
                        return [4, clienteRepository.query(dadosClientes)];
                    case 1:
                        filtrarClientes = _a.sent();
                        return [2, filtrarClientes];
                }
            });
        });
    };
    ClienteService.prototype.excluirCliente = function (_a) {
        var id = _a.id;
        return __awaiter(this, void 0, void 0, function () {
            var clienteRepository, endereco, telefone, cliente;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        clienteRepository = (0, typeorm_1.getCustomRepository)(ClienteRepositories_1.ClienteRepositories);
                        if (!id) {
                            return [2, { error: true, msg: "Erro código invalido." }];
                        }
                        return [4, clienteRepository.query("delete from enderecos where id_cliente = ".concat(id))];
                    case 1:
                        endereco = _b.sent();
                        if (!endereco) {
                            return [2, { error: true, msg: "Erro ao tentar excluir o endereco com o id_cliente: " + id }];
                        }
                        return [4, clienteRepository.query("delete from telefones where id_cliente = ".concat(id))];
                    case 2:
                        telefone = _b.sent();
                        if (!telefone) {
                            return [2, { error: true, msg: "Erro ao tentar excluir o telefone com o id_cliente: " + id }];
                        }
                        return [4, clienteRepository.query("delete from clientes where id = ".concat(id))];
                    case 3:
                        cliente = _b.sent();
                        if (!cliente) {
                            return [2, { error: true, msg: "Erro ao tentar excluir o cliente: " + id }];
                        }
                        return [2, { error: false, msg: "Cliente excluso com sucesso." }];
                }
            });
        });
    };
    ClienteService.prototype.editarCliente = function (_a) {
        var id = _a.id, nome = _a.nome, cpf = _a.cpf, nascimento = _a.nascimento, genero = _a.genero, civil = _a.civil, uf = _a.uf, rg = _a.rg, endereco = _a.endereco, numero = _a.numero, tel = _a.tel, cel = _a.cel, email = _a.email;
        return __awaiter(this, void 0, void 0, function () {
            var clienteRepository, updateCliente, enderecoService, updateEndereco, telefoneService, updateTelefone;
            return __generator(this, function (_b) {
                clienteRepository = (0, typeorm_1.getCustomRepository)(ClienteRepositories_1.ClienteRepositories);
                updateCliente = clienteRepository.createQueryBuilder("clientes")
                    .update("clientes")
                    .set({ nome: nome, email: email, cpf: cpf, nascimento: nascimento, genero: genero, civil: civil, rg: rg })
                    .where("id = :id", { id: id })
                    .execute();
                if (!updateCliente) {
                    return [2, { error: true, msg: "Ocorreu um erro ao atualizar os dados do cliente." }];
                }
                enderecoService = new EnderecoService_1.EnderecoService();
                updateEndereco = enderecoService.editarEndereco({ id_cliente: id, rua: endereco, numero: numero, uf: uf });
                if (!updateEndereco) {
                    return [2, { error: true, msg: "Ocorreu um erro ao atualizar os dados do endereco." }];
                }
                telefoneService = new TelefoneService_1.TelefoneService();
                updateTelefone = telefoneService.editarTelefone({ id_cliente: id, telefone: tel, celular: cel });
                if (!updateTelefone) {
                    return [2, { error: true, msg: "Ocorreu um erro ao atualizar os dados do telefone." }];
                }
                return [2, { error: false, msg: "Os dados do cliente foram atualizados com sucesso." }];
            });
        });
    };
    ClienteService.prototype.relatorioClientes = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var filtro, dados, ordenacao, ordenacaoordem, clienteRepository, dadosClientes, queryInicial, filtrarClientes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filtro = parseInt(param.filtro);
                        dados = param.dados;
                        ordenacao = param.ordenacao;
                        ordenacaoordem = param.ordenacaoordem;
                        clienteRepository = (0, typeorm_1.getCustomRepository)(ClienteRepositories_1.ClienteRepositories);
                        dadosClientes = null;
                        queryInicial = "select * from clientes";
                        if (filtro == 1) {
                            dadosClientes = dados != '' ? "".concat(queryInicial, " where id = '").concat(dados, "'") : queryInicial;
                        }
                        else if (filtro == 2) {
                            dadosClientes = "".concat(queryInicial, " where nome like '").concat(dados, "%'");
                        }
                        else if (filtro == 3) {
                            dadosClientes = "".concat(queryInicial, " where email like '").concat(dados, "%'");
                        }
                        else if (filtro == 4) {
                            dadosClientes = "".concat(queryInicial, " where cpf like '").concat(dados, "%'");
                        }
                        else if (filtro == 5) {
                            dadosClientes = "".concat(queryInicial, " where genero like '").concat(dados, "%'");
                        }
                        else if (filtro == 6) {
                            dadosClientes = "".concat(queryInicial, " where civil like '").concat(dados, "%'");
                        }
                        else if (filtro == 7) {
                            dadosClientes = "".concat(queryInicial, " where rg like '").concat(dados, "%'");
                        }
                        else {
                            dadosClientes = "".concat(queryInicial);
                        }
                        dadosClientes = "".concat(dadosClientes, " order by ").concat(ordenacao, " ").concat(ordenacaoordem);
                        return [4, clienteRepository.query(dadosClientes)];
                    case 1:
                        filtrarClientes = _a.sent();
                        return [2, filtrarClientes];
                }
            });
        });
    };
    return ClienteService;
}());
exports.ClienteService = ClienteService;
