const express = require("express");
const http = require("http");

require("./src/database/indexDb.js");

const app = express();

app.use(express.json());

const advogadosRoutes = require("./src/api/routes/advogadosRoutes");
const processosRoutes = require("./src/api/routes/processosRoutes");

app.use(advogadosRoutes);
app.use(processosRoutes);

app.set("url", "http://localhost:");
app.set("porta", 3007);

http.createServer(app).listen(app.get("porta"), function () {
  console.log(
    "Servidor rodando na porta: " + app.get("url") + app.get("porta")
  );
});

module.exports = app;
