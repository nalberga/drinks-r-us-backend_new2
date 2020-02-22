'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order_Product = sequelize.define('Order_Product', {
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL
  }, {});
  Order_Product.associate = function(models) {
    // associations can be defined here
  };
  return Order_Product;
};