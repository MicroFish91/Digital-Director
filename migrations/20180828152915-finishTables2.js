'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'studentGroups',
      'groupId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'groups',
          key: 'id'
        },
        allowNull: false
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('studentGroups', 'groupId');
  }
};
