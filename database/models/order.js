'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    user_id: DataTypes.INTEGER,
    purchase_date: DataTypes.DATE,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL
  }, {});
  Order.associate = function (models) {
    Order.belongsTo(User);
  };
  return Order;
};