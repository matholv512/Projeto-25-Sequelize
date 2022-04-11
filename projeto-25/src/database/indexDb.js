const Sequelize = require("sequelize");
const dbConfig = require("../config/database.js");

const conexao = new Sequelize(dbConfig);

const advogados = require("../api/models/advogadosModels");
const processos = require("../api/models/processosModels");

try {
  conexao.authenticate();
  console.log("Conexão estabelecida!!!");
} catch (error) {
  console.log("Conexão não estabelecida!!!");
}

advogados.init(conexao);
processos.init(conexao);

advogados.associate(conexao.models);
processos.associate(conexao.models);

module.exports = conexao;
