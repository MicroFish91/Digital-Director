'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('instruments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      instrument_type: {
        allowNull: true,
        type: Sequelize.STRING
      },
      instrument: {
        allowNull: true,
        type: Sequelize.STRING
      },
      brand: {
        allowNull: true,
        type: Sequelize.STRING
      },
      model_number: {
        allowNull: true,
        type: Sequelize.STRING
      },
      serial_number: {
        allowNull: true,
        type: Sequelize.STRING
      },
      year_purchased: {
        allowNull: true,
        type: Sequelize.STRING
      },
      condition: {
        allowNull: true,
        type: Sequelize.STRING
      },
      cost: {
        allowNull: true,
        type: Sequelize.STRING
      },
      current_est_value: {
        allowNull: true,
        type: Sequelize.STRING
      },
      name: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('instruments');
  }
};