"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
import { router } from "./routes";
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
import "reflect-metadata";
const app = (0, express_1.default)();
import "./database";
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(router);
const port = process.env.PORT || 3001;
app.listen(port, () => console.log("Conectado com sucesso na porta: " + port));
//# sourceMappingURL=server.js.map