'use strict';
module.exports = (sequelize, DataTypes) => {
  const events = sequelize.define('events', {
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    description: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
  }, {});
  events.associate = function(models) {
    // associations can be defined here
    events.belongsToMany(models.group, {through: 'eventGroups'});
  };
  return events;
};