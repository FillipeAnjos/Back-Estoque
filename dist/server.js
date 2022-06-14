"use strict";

var _routes = require("./routes");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

require("reflect-metadata");

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _cors.default)());
/*app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})*/

app.use(_express.default.json());
app.use(_routes.router);
const port = process.env.PORT || 3001;
app.listen(port, () => console.log("Conectado com sucesso na porta: " + port));