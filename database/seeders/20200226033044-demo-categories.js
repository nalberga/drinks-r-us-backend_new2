'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      type_id: 1,
      category: 'Brandy',
      description: 'Distilled From: Fruit. Primarily grapes, though apple, apricot, cherry, peach, and other fruits are also used. Flavor Profile: Fruity burnt wine. Aged: Typically aged in oak, varies by style. Often blended.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type_id: 1,
      category: 'Gin',
      description: 'Distilled From: Neutral grains such as barley, corn, rye, and wheat. Flavored with a variety of botanicals, which vary by brand. Flavor Profile: Herbal, dry. The primary flavor that defines gin comes from juniper berries, thus the "piney" aroma and taste. Aged: Typically unaged.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type_id: 1,
      category: 'Rum',
      description: 'Distilled From: Sugar. Either molasses or pure sugar cane. Flavor Profile: Sweet. Toasted sugar. Varies by style and region. Aged: Light rum is typically un-aged and other rums are often aged in oak barrels to some extent. Due to climate, aging times vary greatly with warm climate rum requiring less barrel time than those in colder climates. Often blended.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type_id: 1,
      category: 'Tequila',
      description: 'Distilled From: Agave. Flavor Profile: Vegetal, earthy with semi-sweet and spicy tones. Aged: Blanco tequila is un-aged. Other tequilas are aged, often in used whiskey (bourbon) oak barrels. Gold tequila is blended.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type_id: 1,
      category: 'Vodka',
      description: 'Distilled From: Neutral grain (rye, corn, wheat, etc.) or potato. Some are distilled from beets, grapes, and other bases. Vodka can be the "catch-all" category for white spirits that fit nowhere else. Flavor Profile: Neutral alcohol/ethanol. Varies greatly depending on the base and added flavorings. Distinguished more by texture: oily vs. medicinal. Aged: Typically un-aged.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type_id: 1,
      category: 'Whiskey',
      description: 'Distilled From: Malted grains which vary by style. Can include a mixture of corn, rye, wheat, barley, etc. Flavor Profile: Roasted, malted grain with oak undertones. There are distinct characteristics in each style. Aged: Typically aged in charred oak. Some styles, such as bourbon, require new barrels while others use a mixture of new and previously used whiskey or wine barrels. Moonshine is the primary exception to aging. Some whiskeys are blended while others are single malt or straight.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type_id: 2,
      category: 'American Pale Ale',
      description: 'American Pale ales are golden to deep amber in color, medium-bodied, and have a moderate-to-high hop flavor.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type_id: 2,
      category: 'India Pale Ale (IPA)',
      description: 'India Pale Ales are of a color similar (or slightly darker) to that of pale ales, but they have much more concentrated hop aroma and flavor.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type_id: 2,
      category: 'Stout',
      description: 'Stout variations include dry stouts (such as Guinness), sweet or milk stouts (made with lactose), oatmeal stouts (made with oatmeal), or American stouts (which taste hoppier than the rest).',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type_id: 2,
      category: 'Wheat Beer',
      description: 'Belgian wheat beers have a zesty, orange-citrusy flavor accented by coriander and other spices, as well as a bright golden color.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type_id: 2,
      category: 'Lager',
      description: 'They\'re generally pale yellow and translucent with very subtle grain aroma. Most are made with adjuncts—ingredients other than malted barley—such as corn, rice, or oats, and while hop levels are very low, carbonation is very high.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type_id: 2,
      category: 'Pilsner',
      description: 'This beer is pale gold and fairly clear, with a spicier, more floral hop bouquet than an American lager. It\'s crisp and refreshing with a complex maltiness, and get its bitterness from noble Czech hops called Saaz hops.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type_id: 2,
      category: 'Porter',
      description: 'A typical porter will be dark brown to almost black with a mild hop flavor complemented by notes of unsweetened chocolate, burnt caramel, and sometimes forest fruit.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type_id: 2,
      category: 'Hefeweizen',
      description: 'German Hefeweizens, such as Weihenstephaner or Paulaner Hefeweizen, are known for strong banana and clove flavors from chemicals known as esters and phenols, respectively.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type_id: 2,
      category: 'Barleywine',
      description: 'With a typically high alcohol content and strong fruit, caramel, and toffee flavors, the barleywine packs a punch. American barleywines typically have more hop bitterness than their English counterparts, but no barleywine will be too hoppy.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type_id: 2,
      category: 'Belgian Dubbel and Tripel',
      description: 'A beer with low bitterness, lots of caramel and toffee flavors, and a higher alcohol content than a typical Belgian wheat beer. They can be dark golden to dark brown in color and range widely in sweetness too.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type_id: 3,
      category: 'Cabernet Sauvignon',
      description: 'Taste: Black Cherry, Black Currant, Baking Spices, and Cedar (from oak). Style: Full-Bodied Red Wine. Description: Wines are full-bodied with bold tannins and a long persistent finish driven mostly by the higher levels of alcohol and tannin that often accompany these wines.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type_id: 3,
      category: 'Syrah',
      description: 'Taste: Blueberry, plum, tobacco, cured meat, black pepper, violet. Style: Full-Bodied Red Wine. Description:  The wines have intense fruit flavors and medium-weight tannins. Syrah is commonly blended with Grenache and Mourvèdre to create the red Rhône blend. The wine often has a meaty (beef broth, jerky) quality. ',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type_id: 3,
      category: 'Zinfandel',
      description: 'Taste: A broad, exotic array of fruits from stone (overripe nectarine), to red (raspberry, sour cherry), to blue (plum, blueberry), to black (blackberry, boysenberry), Asian 5 Spice Powder, Sweet Tobacco. Style: Medium-bodied to full-bodied Red Wine. Description: Wines are fruit-forward and spicy with a medium length finish. Zinfandel is a red grape that may be better known in its pink variation, White Zinfandel.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type_id: 3,
      category: 'Pinot Noir',
      description: 'Taste: Very red fruited (cherry, cranberry) and red-floral (rose), often with appealing vegetal notes of beet, rhubarb, or mushroom. Style: Lighter-bodied Red Wine. Description: Pinot Noir is a dry, light-bodied red that was first widely planted in France. The wines typically have higher acidity and soft a soft, smooth, low-tannin finish.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type_id: 3,
      category: 'Chardonnay',
      description: 'Taste: Yellow citrus (Meyer lemon), yellow pomaceous fruits (like yellow pear and apple), tropical fruits (banana, pineapple), and often a touch of butterscotch, vanilla or toasted caramel notes from oak. Style: Medium- to Full-Bodied White Wine. Description: Chardonnay is a dry full-bodied white wine that was planted in large quantities for the first time in France. When oak-aged, Chardonnay will have spicy, bourbon-y notes. Unoaked wines are lighter and zesty with apple and citrus flavors.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type_id: 3,
      category: 'Sauvignon Blanc',
      description: 'Taste: Aggressively-citrus-driven (grapefruit pith), with some exotic fruits (honeydew melon, passion fruit, kiwi) and always an herbaceous quality (grass, mint, green pepper). Style: Light- to Medium-Bodied White Wine. Description: Sauvignon Blanc is a dry white grape first widely planted in France. Wines are tart, typically with herbal, “green” fruit flavors.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type_id: 3,
      category: 'Pinot Gris',
      description: 'Taste: Delicate citrus (lime water, orange zest)  and pomaceous fruits (apple skin, pear sauce), white floral notes, and cheese rind (from lees usage). Style: Light-Bodied White Wine. Description: Wines are light to middle-weight and easy drinking, often with some bitter flavor on the palate (bitter almond, quinine).',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      type_id: 3,
      category: 'Riesling',
      description: 'Taste: Citrus (kefir lime, lemon juice) and stone-fruit (white peach, nectarine) always feature prominently, although there are also usually floral and sweet herbal elements as well. Style: Floral and fruit-driven aromatic white that comes in variable sweetness. Some producers choose not to ferment all the grape sugar and therefore make the wine in an “off-dry” style. Description: Always very high in acid, when made as a table wine Rieslings can be harmoniously sweet (sweet and sour) or dry (very acidic). The wine is polarizing because some people find dry styles too acidic and sweet styles too cloying.',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Categories', null, {});

  }
};
