'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'students',
      'teacherId',
      {
        type: Sequelize.STRING,
        allowNull: false        
        }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('students', 'teacherId');
  }
};