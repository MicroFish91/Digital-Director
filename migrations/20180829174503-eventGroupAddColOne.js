'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.addColumn(
      'eventGroups',
      'groupId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'groups',
          key: 'id'
        },
        allowNull: true
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('eventGroups', 'groupId');
  }
};
