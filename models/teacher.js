'use strict';
module.exports = (sequelize, DataTypes) => {
  const teacher = sequelize.define('teacher', {
    id: { 
      type: DataTypes.STRING, 
      primaryKey: true
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  teacher.associate = function (models) {
    // associations can be defined here
    // teacher.hasMany(models.group, {through: 'studentgroup'});
  };
  return teacher;
};