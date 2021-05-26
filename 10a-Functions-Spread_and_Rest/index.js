"use strict";
//************************************
//SPREAD Operator vs REST operator
//The main difference:
//· The REST operator is used in places where we would otherwise
//write variable names separated by commas. This is because the REST
//operator collects elements (variable names) into an array or object
// – both of which are composed of elements (variable names) separated
// by commas. Thus, they can be used in places where arrays or objects
//can be used, such as…
//     o Function parameters (when declaring/ expressing a function)
//     o Left side of a destructuring assignment ( to collect individual
//       elements into an object or an array which will be used to deconstruct
//       the object or array on the right side of the assignment operator.
//
//· The SPREAD operator is used in places where we would otherwise
//write values separated by commas. This is because the SPREAD operator
//spreads elements into individual values. Thus, they can be used in places
//where individual elements can be used, such as…
//     o Function arguments (when calling a function)
//     o In an array or object, on the right side of a destructuring assignment
//       (to be assigned to the variables on the left side of the assignment operator).
//***************************************************

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //I.FUNCTION WITH SPREAD
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  // III.FUNCTION with REST
  //Function needs at least one parameter
  //and other (rest) are optionals.
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
//-------------------------
//I. FUNCTION WITH SPREAD
//The SPREAD operator is used in places where we would otherwise
//write VALUES separated by commas (SPREAD operator
//spreads elements into individual values). They can be used in
//function ARGUMENTS (when calling a function)

//!!!*** Uncomment theese lines with 'prompts' ==>
const ingredients = [
  // prompt(`Let's make pasta! Ingredient 1?`),
  // prompt(`Let's make pasta! Ingredient 2?`),
  // prompt(`Let's make pasta! Ingredient 3?`),
];
console.log(ingredients); //(3) ["a", "s", "d"]

//call the function:
//old way =>
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//(3) ["mushrooms", "sparga", "cheese"]
//SPREAD operator =>
restaurant.orderPasta(...ingredients);
//Here is your declicious pasta with mushrooms, sparga and cheese

//---------------------------
// II Function with REST operator
//REST parameters: REST takes multiple values
//and pakes them into an one array. Instead of
//writing many numbers in parameters,
//just use REST operator =>
const add = function (...numbers) {
  //(1) console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  //(2)
  console.log(sum);
};
//Many numbers in arguments
add(2, 3);
add(5, 3, 7, 2);
add(2, 3, 4, 5, 6, 7, 7, 8);
//(1)
//(2) [2, 3]
//(4) [5, 3, 7, 2]
//(8) [2, 3, 4, 5, 6, 7, 7, 8]
//(2)
// 5;
// 17;
// 42;

//SPREAD + REST in one function
const x = [23, 5, 7];
//use SPREAD operator for arguments:
//spreads elements into individual values
add(...x);
//and in the function parameter the REST will
//collect these values into one array!

//----------------------
//III.
restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
//mushrooms <= 'mainIngredient' parameter
//(4) ["onion", "olives", "spinach"] <= is REST 'otherIngredients' parameter
restaurant.orderPizza("cheese");
//cheese <= 'mainIngredient' parameter
// [] <= is REST 'otherIngredients' parameter
