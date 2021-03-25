// Functions Calling Other Functions

//parameter == 'plceholder'
function cutFruitPieces(fruit) {
  return fruit * 4;
}
//parameters=='paceholders' are local var for function
function fruitProcessor(apples, oranges) {
  //'apples' is parameter for fruitProcessor()
  //but when call cutFruitPieces() 'apples'
  //is 'argument' for cutFruitPieces()
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
//arguments=='actual values'
console.log(fruitProcessor(2, 3));
//Juice with 8 piece of apple and 12 pieces of orange.

///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};
const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};
//arguments == 'actual value'
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));
