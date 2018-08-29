'use strict';
module.exports = (sequelize, DataTypes) => {
  const eventGroups = sequelize.define('eventGroups', {
  }, {});
  eventGroups.associate = function(models) {
    // associations can be defined here
  };
  return eventGroups;
};