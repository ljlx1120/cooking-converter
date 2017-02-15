var tpstbs = function (userInputForTps) {
  return   userInputForTps / 3;
};

var tbscups = function (userInputForTbs) {
  return userInputForTbs / 16;
};

var cupsquarts = function (userInputForCups) {
  return userInputForCups / 4;
};

var quartsgallons = function (userInputForQuarts) {
  return userInputForQuarts / 4;
};

$(function(){

  $("form#add").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#teaspoon").val());
    var result = tpstbs(number1);
    $("#answer").text("This is the result: " + result).show();
    });

  $("form#convertToCup").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#tablespoon").val());
    var result = tbscups(number1);
    $("#answer").text("This is the result: " + result).show();
  });

  $("form#convertToQuart").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#cup").val());
    var result = cupsquarts(number1);
    $("#answer").text("This is the result: " + result).show();
  });

  $("form#convertToGallon").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#quart").val());
    var result = quartsgallons(number1);
    $("#answer").text("This is the result: " + result).show();
  });










});
