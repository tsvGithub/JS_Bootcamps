"use strict";

const finalMenuItems = ["American Cheeseburger", "Southern Fried Chicken", "Glazed Salmon"];
//to get elements from the array, we can use old way:
let first = finalMenuItems[0];
let second = finalMenuItems[1];
let third = finalMenuItems[2];
console.log(first, second, third);
//American Cheeseburger Southern Fried Chicken Glazed Salmon

//--------------DESTRUCTURING-------
// We can use array destrucuturing (ES6)
//(doesn't mutate original array)
//To take values out of an array and store
//them into variables:
let [primero, segundo, tercero] = finalMenuItems;
console.log(primero, segundo, tercero);
//American Cheeseburger Southern Fried Chicken Glazed Salmon

//we can take only values we need, not all of them
let [pirmais, otrais] = finalMenuItems;
//to see the name of the element, we have to
//wrap it into {} AFTER destructuring
//using Object shorthand syntax when the
//key and value have the same name =>
// {pirmais: pirmais} => {pirmais}
console.log({ pirmais }, { otrais });
//Object { pirmais: "American Cheeseburger" }
//Object { otrais: "Southern Fried Chicken" }

// We can also use destructuring to SWAP the
//values between two variables, using
//destructuring again:
console.log("before swapping:", { first }, { second });
//before swapping:
// Object { first: "American Cheeseburger" }
// Object { second: "Southern Fried Chicken" }
[second, first] = [first, second];
console.log("after swapping:", { first }, { second });
//after swapping:
// Object { first: "Southern Fried Chicken" }
// Object { second: "American Cheeseburger" }

//----REST OPERATOR-------------
//to get 1 value from an array and put
//other values into separate array:
const [winner, ...losers] = finalMenuItems;
console.log({ winner, losers });
// losers: Array [ "Southern Fried Chicken", "Glazed Salmon" ]
// winner: "American Cheeseburger"

// After we have removed one value from an array,
//we can use the rest operator (...) to collect
//the others into a separate array:
// const [winner, ...losers] = finalMenuItems;

//==============================
//==================================
// Challenge:
// In our restaurant, the chef has some favourite dishes in two different categories.
// The chef loves all dishes that start with "S", while the rest are regular dishes
// Use array destructoring to create arrays of the chefs favourite dishes of meat and
// fish, and to create arrays of the regular meat and fish dishes

const fishDishes = ["Salmon Rillettes", "Grilled Tuna Provencal", "Fish and Chips"];
const meatDishes = ["Lasagna", "Spaghetti", "Satay Chicken Skewers"];

//Topornyj podhod:
// // Modify these four variables first
// let [chefsFishDishes, ...regularFishDishes] = fishDishes;
// let [regularMeatDishes, ...chefsMeatDishes] = meatDishes;
// console.log(chefsFishDishes); //Salmon Rillettes
// console.log(regularFishDishes); //Array [ "Grilled Tuna Provencal", "Fish and Chips" ]
// console.log(regularMeatDishes); //Lasagna
// console.log(chefsMeatDishes); //Array [ "Spaghetti", "Satay Chicken Skewers" ]

// // Finally, use the spread operator to create these two arrays as well
// let chefsDishes = [...chefsMeatDishes, chefsFishDishes];
// let regularDishes = [...regularFishDishes, regularMeatDishes];
// console.log(chefsDishes); //Array(3) [ "Spaghetti", "Satay Chicken Skewers", "Salmon Rillettes" ]
// console.log(regularDishes); //Array(3) [ "Grilled Tuna Provencal", "Fish and Chips", "Lasagna" ]

//!!! 5*
// Modify these four variables first
let chefsFishDishes = fishDishes.filter((dish) => dish.startsWith("S"));
let regularFishDishes = fishDishes.filter((dish) => !dish.startsWith("S"));
let chefsMeatDishes = meatDishes.filter((dish) => dish.startsWith("S"));
let regularMeatDishes = meatDishes.filter((dish) => !dish.startsWith("S"));
// Finally, use the spread operator to create these two arrays as well
let chefsDishes = [...chefsFishDishes, ...chefsMeatDishes];
let regularDishes = [...regularFishDishes, ...regularMeatDishes];

console.log(chefsDishes); //Array(3) [ "Salmon Rillettes", "Spaghetti", "Satay Chicken Skewers" ]
console.log(regularDishes); //Array(3) [ "Grilled Tuna Provencal", "Fish and Chips", "Lasagna" ]

//======================
//======================
//====================
//Destructuring is retrieving elements from the array:
const aarr = [1, 2, 3];
//old way =>
const a = aarr[0];
const b = aarr[1];
const c = aarr[2];
//ES6 => destructuring assignment
const [x, y, z] = aarr;
console.log(x, y, z); // 1 2 3
console.log(aarr); //[1,2,3]

//--------------
const restaurant = {
  //------------ I -------------
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //--------------- II ------------------
  //Function returns an array and then immediately
  //destruct the result into different variables.
  //This allows to return multiple values from a
  //function.
  //Function to order food accepts 2 parameters:
  //1=> index for the starter menu &
  //2=> index for the main menu.
  //(Person order by giving the index of the menus)
  order(starterIndex, mainIndex) {
    // return the content of the arrays based
    //on the given indexes:
    return /*return the array */ [
      //this-> this Object
      //starterMenu array -> property of this object
      //starterIndex -> position of the element in the array
      this.starterMenu[starterIndex],
      //this-> this Object
      //mainMenu array -> property of this object
      //mainIndex -> position of the element in the array
      this.mainMenu[mainIndex],
    ];
    //Here are not any destructuring yet, it
    //is doing in the call (II-3) of the function
  },
};
console.log(restaurant);
//========================
//=========   I   =========
//destructuring 2 elements from the array:
let [firstR, secondR] = restaurant.categories;
console.log(firstR, secondR); //Italian Pizzeria

//to skip second element, just put 'comma' instead of that element:
let [pervyj, , tretij] = restaurant.categories;
console.log(pervyj, tretij); //Italian Vegetarian

//to SWITCH (mutate) ELEMENTS from the array:
// console.log(firstR, secondR); //Italian Pizzeria
//*************************old way =>
// const temp = pervyj;
// pervyj = tretij;
// tretij = temp;
//********************ES6 =>
//1)create new array with the variables inverted
//[secondR, firstR];
//2)destructure them
//   2)                     1)
[firstR, secondR] = [secondR, firstR];
//[firstR, secondR] equals the destructuring of
//the array [secondR, firstR]
//Here is not used 'let/const' because of
//reassignment the values of the two variables.
console.log(firstR, secondR); // Pizzeria Italian

//=====================+=====
//=========  II  ==========
// (3) Recieve TWO returned values from a function:
//call method 'order' with 2 arguments
//the first for starterMenu & the second
//for mainMenu:
console.log(restaurant.order(2, 0));
//return an array:
//(2) ["Garlic Bread", "Pizza"] <= array!
//DESTRUCTURIG return from the function
//immediately creates two variables out of
//one function call:
const [starter, main] = restaurant.order(3, 1);
console.log(starter, main);
//return a string:
//Caprese Salad Pasta <= string!
//====================

//===============================
//===========   III =============
//NESTED ARRAY DESTRUCTURING
const nested = [2, 4, [5, 6]];
//to get the first and the third ([5,6])
//elements:
const [i, , j] = nested;
console.log(i, j);
//(2) [5, 6]
//To get all the individual values,
//need to do destructuring inside of destructuring:
const [e, , [l, m]] = nested;
console.log(e, l, m); //2 5 6

//=======================
//============ IV =================
//DEFAULT VALUES FOR DESTRUCTURING
//Set default values for the variables when
//extracting them. Useful when is not known of
//the length of the array or for API:
const [p, q, r] = [8, 9];
console.log(p, q, r); //8 9 undefined
//to avoid 'undefined' set default value:
const [v, w, h = 1] = [8, 9];
console.log(v, w, h); //8 9 1
