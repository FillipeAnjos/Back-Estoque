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
exports.UserController = void 0;
var UserService_1 = require("../services/UserService");
var UserController = (function () {
    function UserController() {
    }
    UserController.prototype.criarUser = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, nome, sobre, email, senha, nascimento, genero, admin, senhaadm, userService, user;
            return __generator(this, function (_b) {
                _a = request.body.param, nome = _a.nome, sobre = _a.sobre, email = _a.email, senha = _a.senha, nascimento = _a.nascimento, genero = _a.genero, admin = _a.admin, senhaadm = _a.senhaadm;
                userService = new UserService_1.UserService();
                user = userService.execute({ nome: nome, sobre: sobre, email: email, senha: senha, nascimento: nascimento, genero: genero, admin: admin, senhaadm: senhaadm });
                return [2, user];
            });
        });
    };
    UserController.prototype.logarUser = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, senha, userService, user;
            return __generator(this, function (_b) {
                _a = request.body.param, email = _a.email, senha = _a.senha;
                userService = new UserService_1.UserService();
                user = userService.logar({ email: email, senha: senha });
                return [2, user];
            });
        });
    };
    UserController.prototype.buscarUserLogado = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, userService, user;
            return __generator(this, function (_a) {
                id = request.body.param;
                userService = new UserService_1.UserService();
                user = userService.buscarUserLogado(id);
                return [2, user];
            });
        });
    };
    UserController.prototype.buscarUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userService, user;
            return __generator(this, function (_a) {
                userService = new UserService_1.UserService();
                user = userService.buscarUsers();
                return [2, user];
            });
        });
    };
    UserController.prototype.buscarUltimosUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userService, user;
            return __generator(this, function (_a) {
                userService = new UserService_1.UserService();
                user = userService.buscarUltimosUsers();
                return [2, user];
            });
        });
    };
    return UserController;
}());
exports.UserController = UserController;
