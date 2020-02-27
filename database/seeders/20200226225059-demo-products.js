'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      name: 'BACARDÍ Superior White Rum',
      type_id: 1,
      category_id: 3,
      description: 'With its unique balance and light taste, Bacardi Superior pairs beautifully with mint and lime without being overly dominant in the cocktail. This means that it\'s perfect for a mojito or a Cuba Libre, but without the overwhelming taste of alcohol. The reason for this wonderful marriage lies in the undertones of the rum, which imparts flavors such as citrus, coriander and ginger.',
      quantity: 999,
      price: 14.99,
      image_url: 'https://products2.imgix.drizly.com/ci-bacardi-superior-rum-dfd1809889854320.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Lagavulin 12 Year',
      type_id: 1,
      category_id: 6,
      description: 'A frequent favourite of Diageo\'s Special Releases, this is the 2014 edition 12 year old Lagavulin single malt Scotch whisky. Featuring malts that were distilled in 2001 and 2002, matured in refill American oak casks and bottled at cask strength, it\'s a top way to enjoy some of Islay\'s excellent single malt.',
      quantity: 999,
      price: 149.99,
      image_url: 'https://products0.imgix.drizly.com/ci-lagavulin-12-year-a18db3a5cb2937d1.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'BOMBAY SAPPHIRE Gin',
      type_id: 1,
      category_id: 2,
      description: 'BOMBAY SAPPHIRE is a product of the perfect blend of the finest raw ingredients; a perfect balance of a unique combination of 10 hand-selected exotic botanicals from around the world.    BOMBAY SAPPHIRE gin has an extraordinary smoothness with the overall taste being perfectly balanced.',
      quantity: 999,
      price: 26.99,
      image_url: 'https://products0.imgix.drizly.com/ci-bombay-sapphire-4967085f606d9efa.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Dogfish Head Olde School Barleywine 4-Pack',
      type_id: 2,
      category_id: 15,
      description: 'Bold, yet smooth! Fermented with dates and figs, this bone-crushing barleywine has a unique flavor. ABV varies from 13-16%.',
      quantity: 999,
      price: 16.19,
      image_url: 'https://products2.imgix.drizly.com/ci-dogfish-head-olde-school-barleywine-d615ed0167e1b6ad.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sierra Nevada Torpedo Extra IPA 12-Pack',
      type_id: 2,
      category_id: 8,
      description: 'Torpedo is an assertive American IPA deep reddish-gold in color, with a smooth and bready malt presence and over-the-top hop aromas. The beer has a solid bitterness and a massive hop flavor, yet remains easy drinking with a pleasant dry finish.',
      quantity: 999,
      price: 16.60,
      image_url: 'https://products2.imgix.drizly.com/ci-sierra-nevada-torpedo-extra-ipa-f009993b82b0151d.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Pilsner Urquell 4-Pack',
      type_id: 2,
      category_id: 12,
      description: 'Pilsner Urquell is still brewed in the same brewery with the same soft Plzen water, saaz hops from Zatec, Czech barley from Moravia, and the same H-strain yeast. We still germinate and malt ourselves, and continue to triple-decoct our mash over open flames. With aromas of fresh bread, hints of Saaz hops and honeysuckle, taste notes of caramel maltiness balanced by a distinct bitterness, and a nice creamy mouthfeel and smooth, refreshing finish.',
      quantity: 999,
      price: 7.80,
      image_url: 'https://products2.imgix.drizly.com/ci-pilsner-urquell-68942c4af233c846.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Coppola Pinot Noir',
      type_id: 3,
      category_id: 20,
      description: 'A fruit-forward, lushly-textured Pinot Noir expressive of sunny days and cool Pacific nights. Grapes are harvested in early morning, crushed immediately and cold soaked for 48 hours, intensifying the color.',
      quantity: 999,
      price: 18.98,
      image_url: 'https://products1.imgix.drizly.com/ci-coppola-pinot-noir-2555546453eeb30d.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Bogle Cabernet Sauvignon',
      type_id: 3,
      category_id: 17,
      description: 'Irresistible vanilla and intriguing black plums lay way to the dense and concentrated wine that is the Cabernet Sauvignon. Deeply extracted and complex dark fruit enhance the full-bodied character, and touches of toasted hazelnut and spicy clove are left by the 12 months of aging in one year old American oak. Ample tannins and an enduring finish will allow this wine to cellar for another 6-8 years.',
      quantity: 999,
      price: 10.99,
      image_url: 'https://products3.imgix.drizly.com/ci-bogle-cabernet-sauvignon-2a6ee60c95880a48.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Ferrari Carano Fume Blanc',
      type_id: 3,
      category_id: 22,
      description: 'Ferrari-Carano’s Fumé Blanc has delicious aromas of white peach, orange blossom, pear, quince, Meyer lemon and mango complemented by peach, grapefruit, pear and lemon flavors. This wine has bright acidity and crisp freshness from the cool, stainless steel tank fermentation, while the subtle oak character from barrel aging adds, body, complexity and depth.',
      quantity: 999,
      price: 13.99,
      image_url: 'https://products2.imgix.drizly.com/ci-ferrari-carano-fume-blanc-650c0d8dfcfd7cce.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Products', null, {});

  }
};
