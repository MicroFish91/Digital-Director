'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    uniformSize: DataTypes.STRING,
    instrument: DataTypes.STRING
  }, {});
  student.associate = function(models) {
    // associations can be defined here
  };
  return student;
};