'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'student_groups',
      'student_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'students',
          key: 'id'
        },
        allowNull: false
      }
    );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('student_groups', 'student_id');
  }
};
