'use strict';
module.exports = (sequelize, DataTypes) => {
  const studentGroup = sequelize.define('studentgroups', {
  }, {});
  studentGroup.associate = function(models) {
    // associations can be defined here
  };
  return studentGroup;
};