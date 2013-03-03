var Breadr = function (options) {
  this.loaves = options.loaves || 1;
  this.fat = options.fat || 'oil';
  this.sugar = options.sugar || 'white';
  this.yeast = options.yeast || 'active';
  this.flaxMeal = options.flaxMeal || false;
  this.wheatGerm = options.wheatGerm || false;
};

// Breadr.GRAMS_PER_CUP = {
//   WATER: 236,
//   WHITE_SUGAR: 200
//   BUTTER: 227,
//   OIL: 224
// };

Breadr.LIQUID_GRAMS_PER_LOAF = 265;

Breadr.FLOUR_PER_LIQUID_MASS = 1.5;

Breadr.prototype.generateRecipe = function () {
  var liquid = this.loaves * Breadr.LIQUID_GRAMS_PER_LOAF;
  var flour = liquid * Breadr.FLOUR_PER_LIQUID_MASS;
  return [{
      name: 'liquid',
      amount: Math.floor(liquid),
      unit: 'g'},
    {
      name: 'flour',
      amount: Math.floor(flour),
      unit: 'g'
    }
  ];
};

