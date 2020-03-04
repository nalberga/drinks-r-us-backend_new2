'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    type_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    image_url: DataTypes.STRING,
    units: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.hasOne(Type)
    Product.hasOne(Category)
  };
  return Product;
};