'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    type_id: DataTypes.INTEGER,
    category: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Category.associate = function(models) {
    Category.hasMany(Product, { foreignKey: 'category_id' });
    Category.belongsTo(Type);
  };
  return Category;
};