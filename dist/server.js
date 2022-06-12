import { router } from './routes';
import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
const app = express();
import "./database";
app.use(cors());
app.use(express.json());
app.use(router);
const port = process.env.PORT || 3001;
app.listen(port, () => console.log("Conectado com sucesso na porta: " + port));
//# sourceMappingURL=server.js.map