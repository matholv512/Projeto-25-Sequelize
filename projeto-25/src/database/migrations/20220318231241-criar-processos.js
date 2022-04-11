"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("processos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      advogado_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "advogados", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      proc_codigo: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },

      proc_assunto: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },

      proc_tribunal: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },

      proc_segredo_de_justiça: {
        type: Sequelize.STRING(1),
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

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("processos");
  },
};
