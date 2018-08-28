'use strict';
module.exports = (sequelize, DataTypes) => {
  const student_group = sequelize.define('student_group', {
  }, {});
  student_group.associate = function(models) {
    // associations can be defined here
  };
  return student_group;
};