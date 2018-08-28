'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(15)
      },
      lastName: {
        type: Sequelize.STRING(15)
      },
      phoneNumber: {
        type: Sequelize.STRING(10)
      },
      email: {
        type: Sequelize.STRING(320)
      },
      address: {
        type: Sequelize.STRING(1024)
      },
      uniformSize: {
        type: Sequelize.STRING(3)
      },
      instrument: {
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
    return queryInterface.dropTable('students');
  }
};