'use strict';
module.exports = (sequelize, DataTypes) => {
  const teacher = sequelize.define('teacher', {
    id: { 
      type: DataTypes.STRING, 
      primaryKey: true
    },
    displayName:{
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {});
  teacher.associate = function (models) {
    // associations can be defined here
    teacher.hasMany(models.student, {as: 'students'});
  };
  return teacher;
};