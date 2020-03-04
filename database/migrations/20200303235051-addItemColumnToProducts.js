'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.addColumn('Products', 'units', { type: Sequelize.INTEGER, defaultValue: 1 });
   
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.removeColumn('Products', 'units');

  }

};
