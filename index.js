var elLoaves = $('[name=loaves]');
var elFat = $('[name=fat]');
var elSugar = $('[name=sugar]');
var elYeast = $('[name=yeast]');
var elFlaxMeal = $('[name=flax-meal]');
var elWheatGerm = $('[name=wheat-germ]');

$('[type=submit]').click(function() {
  var loaves = elLoaves.val();
  var fat = elFat.filter(':checked').val();
  var sugar = elSugar.filter(':checked').val();
  var yeast = elYeast.filter(':checked').val();
  var flaxMeal = elFlaxMeal.filter(':checked').size() > 0;
  var wheatGerm = elWheatGerm.filter(':checked').size() > 0;
  var options = {
    loaves: loaves,
    fat: fat,
    sugar: sugar,
    yeast: yeast,
    flaxMeal: flaxMeal,
    wheatGerm: wheatGerm
  };
  
  var breadr = new Breadr(options);
  var recipe = breadr.generateRecipe();
  
  $('#recipe').text(recipe.map(function (item) {
    return [item.name + ':', item.amount, , item.unit].join(' ');
  }).join("\n"));
});
