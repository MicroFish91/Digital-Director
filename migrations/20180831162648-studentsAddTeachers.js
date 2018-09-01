'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'students',
      'teacherId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'teachers',
          key: 'id'
        },
        allowNull: false
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('students', 'teacherId');
  }
};