'use strict';
module.exports = (sequelize, DataTypes) => {
  const uniforms = sequelize.define('uniforms', {
    studentId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    pant_size: DataTypes.STRING,
    jacket_size: DataTypes.STRING,
    dress_size: DataTypes.STRING,
    name:DataTypes.STRING,
    teacherId: DataTypes.STRING
  }, {});
  uniforms.associate = function(models) {
    uniforms.belongsTo(models.student);
  };
  return uniforms;
};