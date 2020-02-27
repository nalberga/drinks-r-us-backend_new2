'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [{
      user_id: 1,
      purchase_date: new Date(),
      quantity: 3,
      price: 70.58,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 2,
      purchase_date: new Date(),
      quantity: 4,
      price: 173.39,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 3,
      purchase_date: new Date(),
      quantity: 8,
      price: 83.74,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 2,
      purchase_date: new Date(),
      quantity: 3,
      price: 41.97,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
