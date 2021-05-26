"use strict";
//=============================
//============================

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

//SPREAD
const arr = [7, 8, 9];
//add to 'arr' new elements to the beginning:
const newArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(newArray);
//[1, 2, 7, 8, 9]

//ES6 Spread Operator (...)
const newArrSpread = [1, 2, ...arr];
console.log(newArrSpread);
//[1,2,7,8,9]

//pass arguments to the function
console.log(newArrSpread);
//1 2 7 8 9

//-------------------

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //VIb.FUNCTION WITH SPREAD
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
};

//I.
//creating a completely new array that doesn't
//affect the restaurant.mainMenu array and adding
//new elements
const newMenu = [...restaurant.mainMenu, "Gnocci", "Paella"];
console.log(newMenu);
//(4) ["Pizza", "Pasta", "Risotto", "Gnocci", "Paella"]

//II. Difference between Spread and Destructuring:
//Spread also get out elements from the array
//but difference is that the Spread operator
//takes all the elements from the array and
//it also doesn't create new variables. It is
//good for values separeted by commas, building
//new array or pass values into a function.

//III. SHALLOW COPY OF ARRAY:
//is similar to Object.assign
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
//(3) ["Pizza", "Pasta", "Risotto"]

//IV. MERGE (join) ARRAYS TOGETHER:
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);
//(7) ["Pizza", "Pasta", "Risotto", "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

//V. Spread works on all 'iterables':
//arrays, strings, maps, sets but not Objects!
//Objects are not iterables but SPREAD
//works with them too! (See VII)
const str = "Zhur";
const letters = [...str, " ", "s."];
console.log(letters);
//(6) ["Z", "h", "u", "r", " ", "s."]

//VI. Multiple values separetad by a comma are usually
//only expected to pass as arguments into a function (VIb),
// or build a new array:
//VIa:
//1) doesn't work
// console.log(`${...str}`); //Uncaught SyntaxError: Unexpected token '...'
//2) works
console.log(`${[...str]}`);
//Z,h,u,r

//VIb. FUNCTION WITH SPREAD (see method in restaurant Object)
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
//spread operator =>
restaurant.orderPasta(...ingredients);
//Here is your declicious pasta with mushrooms, sparga and cheese

//VII
//*****NB! SPREAD WITH OBJECTS: ****
//1)spread the existing Object (...restaurant),
//that copy all the properties from the existing Object
//into new Object newRestaurant;
//2) add additional properties to the new
//Object newRestaurant (order does not matter)
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);
//{foundedIn: 1998, name: "Classico Italiano", location: "Via Angelo Tavanti 23, Firenze, Italy", categories: Array(4), starterMenu: Array(4), …}

//VIII Shallow copy Object with Spread
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristarante Roma";
//copying Object with Spread doesn't affect the original Object
console.log(restaurantCopy.name); //Ristarante Roma
console.log(restaurant.name); //Classico Italiano

//=============================================
//===================================
//==============================

// The .push() method mutates the original array.
//We can fix this by using a non-mutating array method such as.concat().
// const allMenuIdeas = lunchMenuIdeas.concat('Club Sandwich');
// Alternatively, we can use the array spread operator
// (...) to clone the previous array.
// const allMenuIdeas = [...lunchMenuIdeas];
//-----------------------------
const lunchMenuIdeas = ["Harvest Salad", "Southern Fried Chicken"];

const allMenuIdeas = lunchMenuIdeas;

allMenuIdeas.push("Club Sandwich");
// The .push() method mutates the original array
//because of reference, it doesn't create a new array.
console.log(allMenuIdeas); //Array(3) [ "Harvest Salad", "Southern Fried Chicken", "Club Sandwich" ]
console.log(lunchMenuIdeas); //Array(3) [ "Harvest Salad", "Southern Fried Chicken", "Club Sandwich" ]
//------------------

//non-mutating array method:
//.concat() doesn't mutate the original array
//and retruns the new array with copy of the original array
const concatAllMenuIdeas = lunchMenuIdeas.concat("Club Sandwich");
console.log(concatAllMenuIdeas); //Array(4) [ "Harvest Salad", "Southern Fried Chicken", "Club Sandwich", "Club Sandwich" ]
console.log(lunchMenuIdeas); //Array(3) [ "Harvest Salad", "Southern Fried Chicken", "Club Sandwich" ]
//-------------------

//-----------------SPREAD--------------------
//spread operator converts an original array to list
// & clones an original array into a new array:
const spreadAllMenuIdeas = [...lunchMenuIdeas];

//and then we can use with different methods: push, slice...
spreadAllMenuIdeas.push("Club Sandwich");
console.log(spreadAllMenuIdeas); //Array(4) [ "Harvest Salad", "Southern Fried Chicken", "Club Sandwich", "Club Sandwich" ]
console.log(lunchMenuIdeas); //Array(3) [ "Harvest Salad", "Southern Fried Chicken", "Club Sandwich" ]

//=======================================
//========================================
const breakfastMenuIdeas = ["Buckwheat Pancakes"];

const allMenuIdeas1 = ["Harvest Salad", "Southern Fried Chicken"];
//push & unshift mutate an original array!
//use spread operator to clone the array
//and then manipulate the array

//We can merge multiple arrays into a new array
//using the spread operator (...).
//The order in which the arrays are entered is retained:
//(Порядок ввода массивов сохраняется)
const otherMenuIdeas = [...breakfastMenuIdeas, ...allMenuIdeas1];
console.log(otherMenuIdeas); //(3) ["Buckwheat Pancakes", "Harvest Salad", "Southern Fried Chicken"]
// const allMenuIdeas = [
//     ...breakfastMenuIdeas,
//     "Harvest Salad",
//     "Southern Fried Chicken",
//     ...dinnerMenuIdeas
// ];

//------SLICE()--вырезать и забрать себе---
// We can use immutable method .slice(from, to)
//to remove items & returns brand new array
//otherMenuIdeas) => Array(3) [
//     "Buckwheat Pancakes",
//     "Harvest Salad",
//     "Southern Fried Chicken"
// ]
const slicedOtherMenuIdeas = otherMenuIdeas.slice(1, 3);
//brend new slicedOtherMenuIdeas array
console.log(slicedOtherMenuIdeas);
//(2) ["Harvest Salad", "Southern Fried Chicken"]
//original otherMenuIdeas array
console.log(otherMenuIdeas);
//(3) ["Buckwheat Pancakes", "Harvest Salad", "Southern Fried Chicken"]
//

//-------FINDINDEX()--------------
// .findIndex() allows us to find a particular element
// when we don't know where it is stored:
const saladIndex = otherMenuIdeas.findIndex((idea) => idea === "Harvest Salad");
// We can use these in combination to update
//elements in the array: replace "harvest salad"
//with 'garden salad':
const finalMenuIdeas = [
  //create the new array:
  //take elements from index 0 to saladIndex
  ...otherMenuIdeas.slice(0, saladIndex),
  //take a new element
  "Garden Salad",
  //take all elements from the next after SaladIndex
  ...otherMenuIdeas.slice(saladIndex + 1),
];
console.log(otherMenuIdeas);
//(3) ["Buckwheat Pancakes", "Harvest Salad", "Southern Fried Chicken"]
console.log(finalMenuIdeas);
//(3) ["Buckwheat Pancakes", "Garden Salad", "Southern Fried Chicken"]

//DELETE Meatloaf element:
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];
console.log(dinnerMenuIdeas);
//(3) ["Glazed Salmon", "Meatloaf", "American Cheeseburger"]
//find index of element
const meatloafIndex = dinnerMenuIdeas.findIndex((idea) => idea === "Meatloaf");
const finalDinnerMenuIdeas = [
  //create the new array:
  //take elements from index 0 to meatloafIndex
  ...dinnerMenuIdeas.slice(0, meatloafIndex),
  //delete "Meatloaf" element => don't take element "Meatloaf"
  //take all elements from the next after meatloafIndex
  ...dinnerMenuIdeas.slice(meatloafIndex + 1),
];
console.log(finalDinnerMenuIdeas);
//(2) ["Glazed Salmon", "American Cheeseburger"]
