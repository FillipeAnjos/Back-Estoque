"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("reflect-metadata");
const app = (0, express_1.default)();
require("./database");
app.use((0, cors_1.default)());
/*app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})*/
app.use(express_1.default.json());
app.use(routes_1.router);
const port = process.env.PORT || 3001;
app.listen(port, () => console.log("Conectado com sucesso na porta: " + port));
//# sourceMappingURL=server.js.map