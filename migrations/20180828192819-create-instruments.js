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
      student_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'students',
          key: 'id'
        },
      },
      instrument_type: {
        type: Sequelize.STRING
      },
      instrument: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      model_number: {
        type: Sequelize.STRING
      },
      serial_number: {
        type: Sequelize.STRING
      },
      year_purchased: {
        type: Sequelize.INTEGER
      },
      condition: {
        type: Sequelize.STRING
      },
      cost: {
        type: Sequelize.INTEGER
      },
      current_est_value: {
        type: Sequelize.INTEGER
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