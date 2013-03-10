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

Breadr.YEAST_PER_FLOUR_MASS = .025;

Breadr.SALT_PER_FLOUR_MASS = .019;

Breadr.SUGAR_PER_FLOUR_MASS = .047;

Breadr.OIL_PER_FLOUR_MASS = .034;

Breadr.prototype.generateRecipe = function () {
  var liquid = this.loaves * Breadr.LIQUID_GRAMS_PER_LOAF;
  var flour = liquid * Breadr.FLOUR_PER_LIQUID_MASS;
  var yeast = flour * Breadr.YEAST_PER_FLOUR_MASS;
  var salt = flour * Breadr.SALT_PER_FLOUR_MASS;
  var sugar = flour * Breadr.SUGAR_PER_FLOUR_MASS;
  var oil = flour * Breadr.OIL_PER_FLOUR_MASS;
  return [{
      name: 'liquid',
      amount: Math.floor(liquid),
      unit: 'g'},
    {
      name: 'flour',
      amount: Math.floor(flour),
      unit: 'g'
    },
    {
      name: 'yeast',
      amount: Math.floor(yeast),
      unit: 'g'
    },
    {
      name: 'salt',
      amount: Math.floor(salt),
      unit: 'g'
    },
    {
      name: 'sugar',
      amount: Math.floor(sugar),
      unit: 'g'
    },
    {
      name: 'oil',
      amount: Math.floor(oil),
      unit: 'g'
    }
  ];
};

