'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      f_name: 'Bilbo',
      l_name: 'Baggins',
      email: 'bilbo@shire.com',
      phone: 3051222211,
      password: 'pass1234',
      admin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      f_name: 'Frodo',
      l_name: 'Baggins',
      email: 'frodo@shire.com',
      phone: 3051222211,
      password: 'pass1234',
      admin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      f_name: 'Gandalf',
      l_name: 'The White',
      email: 'gandalf@shire.com',
      phone: 3051222211,
      password: 'pass1234',
      admin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      f_name: 'Bunny',
      l_name: 'Baggins',
      email: 'bunny@shire.com',
      phone: 3051222211,
      password: 'pass1234',
      admin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      f_name: 'Willow',
      l_name: 'Baggins',
      email: 'willow@shire.com',
      phone: 3051222211,
      password: 'pass1234',
      admin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});   
  }
};
