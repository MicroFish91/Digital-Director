'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.addColumn(
      'eventGroups',
      'eventsId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'events',
          key: 'id'
        },
        allowNull: true
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('eventGroups', 'eventsId');
  }
};
