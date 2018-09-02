'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('uniforms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      pant_size: {
        type: Sequelize.STRING
      },
      jacket_size: {
        type: Sequelize.STRING
      },
      dress_size: {
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
    return queryInterface.dropTable('uniforms');
  }
};