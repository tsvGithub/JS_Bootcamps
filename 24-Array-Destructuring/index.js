const finalMenuItems = ["American Cheeseburger", "Southern Fried Chicken", "Glazed Salmon"];
//to get elements from the array, we can use:
let first = finalMenuItems[0];
let second = finalMenuItems[1];
let third = finalMenuItems[2];
console.log(first, second, third);
//American Cheeseburger Southern Fried Chicken Glazed Salmon
//--------------DESTRUCTURING-------
// We can use array destrucuturing
//(doesn't mutate original array)
//to take values out of an array and store
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

// We can also use destructuring to swap the
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
