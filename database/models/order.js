'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    user_id: DataTypes.INTEGER,
    purchase_date: DataTypes.DATE,
    product_qt: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL
  }, {});
  Order.associate = function (models) {
    // associations can be defined here
  };
  return Order;
};