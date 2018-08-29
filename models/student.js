'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    parentname1: DataTypes.STRING,
    parentname2: DataTypes.STRING, 
    parentPhoneNumber: DataTypes.STRING,
    parentEmail: DataTypes.STRING,
    address: DataTypes.STRING,
    uniformSize: DataTypes.STRING,
    instrument: DataTypes.STRING
  }, {});
  student.associate = function (models) {
    // associations can be defined here
    student.belongsToMany(models.group, {through: 'studentgroup'});
  };
  return student;
};