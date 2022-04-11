"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("advogados", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      adv_nome: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },

      adv_sexo: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },

      adv_email: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },

      adv_telefone: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("advogados");
  },
};
