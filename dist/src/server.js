"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = require("./routes");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
require("reflect-metadata");
var app = (0, express_1.default)();
require("./database");
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.router);
var port = process.env.PORT || 3001;
app.listen(port, function () { return console.log("Conectado com sucesso na porta: " + port); });
