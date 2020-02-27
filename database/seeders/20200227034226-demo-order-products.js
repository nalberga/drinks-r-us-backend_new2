'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Order_Products', [{
      order_id: 1,
      product_id: 3,
      quantity: 2,
      price: 53.98,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      order_id: 1,
      product_id: 5,
      quantity: 1,
      price: 16.60,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      order_id: 2,
      product_id: 6,
      quantity: 3,
      price: 23.40,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      order_id: 2,
      product_id: 2,
      quantity: 1,
      price: 149.99,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      order_id: 3,
      product_id: 4,
      quantity: 4,
      price: 64.76,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      order_id: 3,
      product_id: 7,
      quantity: 4,
      price: 18.98,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      order_id: 4,
      product_id: 9,
      quantity: 2,
      price: 27.98,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      order_id: 4,
      product_id: 8,
      quantity: 1,
      price: 13.99,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Order_Products', null, {});
  }
};