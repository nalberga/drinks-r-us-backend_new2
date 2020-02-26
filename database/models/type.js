'use strict';
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    type: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Type.associate = function(models) {
    Type.hasMany(Product, { foreignKey: 'type_id' });
    Type.hasMany(Category, { foreignKey: 'type_id' });
  };
  return Type;
};