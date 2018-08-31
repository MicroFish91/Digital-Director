'use strict';
module.exports = (sequelize, DataTypes) => {
  const instruments = sequelize.define('instruments', {
    student_id: DataTypes.INTEGER,
    instrument_type: DataTypes.STRING,
    instrument: DataTypes.STRING,
    brand: DataTypes.STRING,
    model_number: DataTypes.STRING,
    serial_number: DataTypes.STRING,
    year_purchased: DataTypes.INTEGER,
    condition: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    current_est_value: DataTypes.INTEGER
  }, {});
  instruments.associate = function(models) {
    instruments.belongsTo(models.student);
  };
  return instruments;
};