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
exports.UserService = void 0;
var typeorm_1 = require("typeorm");
var UsersRepositories_1 = require("../repositories/UsersRepositories");
var bcryptjs_1 = require("bcryptjs");
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.execute = function (_a) {
        var nome = _a.nome, sobre = _a.sobre, email = _a.email, senha = _a.senha, nascimento = _a.nascimento, genero = _a.genero, admin = _a.admin, senhaadm = _a.senhaadm;
        return __awaiter(this, void 0, void 0, function () {
            var usersRepository, error, userExiste, error, senhaHash, adminSalvarBanco, userSalved, usuario;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        usersRepository = (0, typeorm_1.getCustomRepository)(UsersRepositories_1.UsersRepositories);
                        if (!email) {
                            error = { error: "Favor informar seu email." };
                            return [2 /*return*/, error];
                        }
                        return [4 /*yield*/, usersRepository.findOne({ email: email })];
                    case 1:
                        userExiste = _b.sent();
                        if (userExiste) {
                            error = { error: "Você já possui uma conta." };
                            return [2 /*return*/, error];
                        }
                        return [4 /*yield*/, (0, bcryptjs_1.hash)(senha, 8)];
                    case 2:
                        senhaHash = _b.sent();
                        adminSalvarBanco = admin == senhaadm ? 'true' : 'false';
                        userSalved = usersRepository.create({
                            nome: nome,
                            sobre: sobre,
                            email: email,
                            senha: senhaHash,
                            nascimento: nascimento,
                            genero: genero,
                            admin: adminSalvarBanco
                        });
                        return [4 /*yield*/, usersRepository.save(userSalved)];
                    case 3:
                        usuario = _b.sent();
                        return [2 /*return*/, { success: "Usuário criado com sucesso.", usuario: usuario }];
                }
            });
        });
    };
    UserService.prototype.buscarUserLogado = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var userRepository, user, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userRepository = (0, typeorm_1.getCustomRepository)(UsersRepositories_1.UsersRepositories);
                        return [4 /*yield*/, userRepository.findOne({ id: id })];
                    case 1:
                        user = _a.sent();
                        // Verificar se o id existe.
                        if (!user) {
                            error = { status: false, error: "usuário não encontrado." };
                            return [2 /*return*/, error];
                        }
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserService.prototype.logar = function (_a) {
        var email = _a.email, senha = _a.senha;
        return __awaiter(this, void 0, void 0, function () {
            var userRepository, user, error, senhHash, error, error, token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userRepository = (0, typeorm_1.getCustomRepository)(UsersRepositories_1.UsersRepositories);
                        return [4 /*yield*/, userRepository.findOne({ email: email })];
                    case 1:
                        user = _b.sent();
                        // Verificar se o email existe.
                        if (!user) {
                            error = { status: false, error: "Email e/ou Senha incorretos." };
                            return [2 /*return*/, error];
                        }
                        return [4 /*yield*/, (0, bcryptjs_1.compare)(senha, user.senha)];
                    case 2:
                        senhHash = _b.sent();
                        if (!senhHash) {
                            error = { status: false, error: "Email e/ou Senha incorretos.." };
                            return [2 /*return*/, error];
                        }
                        // Verificar se o usuário tem perfil de administrador
                        if (user.admin != 'true') {
                            error = { status: false, error: "Usuário não é administrador do sistema." };
                            return [2 /*return*/, error];
                        }
                        token = Math.random().toString() + "_" + user.id;
                        //return { status: true, success: "Usuário logado com sucesso.", name: user }
                        return [2 /*return*/, { status: true, success: "Usuário logado com sucesso.", id: user.id, name: user.nome, email: user.email, token: token }];
                }
            });
        });
    };
    UserService.prototype.buscarUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var usersRepository, usuarios;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usersRepository = (0, typeorm_1.getCustomRepository)(UsersRepositories_1.UsersRepositories);
                        return [4 /*yield*/, usersRepository.createQueryBuilder("users")
                                .where("admin = :admin", { admin: true })
                                .getMany()];
                    case 1:
                        usuarios = _a.sent();
                        return [2 /*return*/, usuarios];
                }
            });
        });
    };
    UserService.prototype.buscarUltimosUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var usersRepository, usuarios;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usersRepository = (0, typeorm_1.getCustomRepository)(UsersRepositories_1.UsersRepositories);
                        return [4 /*yield*/, usersRepository.query("select * from users order by id desc limit 5")];
                    case 1:
                        usuarios = _a.sent();
                        return [2 /*return*/, usuarios];
                }
            });
        });
    };
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map