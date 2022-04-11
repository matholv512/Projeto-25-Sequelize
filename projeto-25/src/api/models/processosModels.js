const { Model, DataTypes } = require("sequelize");

class Processos extends Model {
  static init(sequelize) {
    super.init(
      {
        advogado_id: DataTypes.INTEGER,
        proc_codigo: DataTypes.STRING,
        proc_assunto: DataTypes.STRING,
        proc_tribunal: DataTypes.STRING,
        proc_segredo_de_justiça: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "processos",
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Advogados, {
      foreignKey: "advogado_id",
      as: "advogado",
    });
  }
}

module.exports = Processos;
