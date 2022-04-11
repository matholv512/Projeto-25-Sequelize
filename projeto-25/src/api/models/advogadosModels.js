const { Model, DataTypes } = require("sequelize");

class Advogados extends Model {
  static init(sequelize) {
    super.init(
      {
        adv_nome: DataTypes.STRING,
        adv_sexo: DataTypes.STRING,
        adv_email: DataTypes.STRING,
        adv_telefone: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "advogados",

        hooks: {
          beforeCreate: () => {
            console.log("Executando.......BeforeCreate.......");
          },

          afterCreate: () => {
            console.log("Executando.......AfterCreate.......");
          },
        },
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Processos, {
      foreignKey: "advogado_id",
      as: "advogado",
    });
  }
}

module.exports = Advogados;
