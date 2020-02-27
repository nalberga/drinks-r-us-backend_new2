'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Types', [{
      type: 'Liquor',
      description: 'A liquor, or distilled spirit, is an alcoholic beverage that is distilled rather than fermented like beer and wine. Distilled spirits include brandy, gin, rum, tequila, whiskey, and vodka, as well as a variety of flavored liqueurs.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'Beer',
      description: 'Beer: Nectar of the gods!, is an alcoholic beverage made from grain, esp. malted barley, fermented by yeast and flavored with hops; esp., such a beverage produced by slow fermentation at a relatively low temperature',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type: 'Wine',
      description: 'The fermented juice of grapes, made in many varieties, such as red, white, sweet, dry, still, and sparkling, for use as a beverage, in cooking, in religious rites, etc., and usually having an alcoholic content of 14 percent or less.',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Types', null, {});
  }
};
