"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//1.
restaurant.numGuests = 23;
//'guests' is 'numGuests' or default value '10':
const guests = restaurant.numGuests || 10;
//the first part is 'truthy' (23) => returns
//the first part.
console.log(guests); //23
//2. If Object 'restaurant' does not have the
//property 'numGuests', so it is 'undefined' || 10 =>
//will return 10
//3 !!!NB If
restaurant.numSeats = 0; //0===false
//teranry & short circuiting won't work!!!
const seats1 = restaurant.numSeats ? restaurant.numSeats : 10;
const seasts2 = restaurant.numSeats || 10;
console.log(seats1, seasts2);
//10 10

//ES2020 Nullish Coalescing Operator
//works almost the same way as the OR operator,
//the big difference is that it works with '0'
// => fixes OR error with 0:
restaurant.numGuests2 = 0;
const guestsCorrect = restaurant.numGuests2 ?? 10;
console.log(guestsCorrect); // 0
//Get the real value of restaurant.numGuests = 0;
//And only when there is no restaurant.numGuests1
const guestsCorrect2 = restaurant.numGuests1 ?? 10;
console.log(guestsCorrect2); // 10
//will return '10'

//This works because Nullish Coalescing Operator
//works with the concept of 'nullish' values
//instead of 'falsy' values.
//Nullish values are: null, undefined
//Not include 0 (zero) or '' (empty string)
//For Nullish Coalescing Operator 0 & ''
//are not 'falsy' values, they are 'truthy' values.
//----------------------------------
//NCO 'falsy' values:
//Null
restaurant.numGuests3 = null; //falsy
const guestsCorrect3 = restaurant.numGuests3 ?? 10;
console.log(guestsCorrect3); // 10
//Undefined
restaurant.numGuests4; //undefined===falsy
const guestsCorrect4 = restaurant.numGuests4 ?? 10;
console.log(guestsCorrect4); // 10
//-----------------------------------
//NCO 'truthy' values:
//Empty string
restaurant.numGuests5 = ""; //undefined===falsy
const guestsCorrect5 = restaurant.numGuests5 ?? 10;
console.log(guestsCorrect5); // ''
//0
restaurant.numGuests6 = 0;
const guestsCorrect6 = restaurant.numGuests6 ?? 10;
console.log(guestsCorrect6); // 0
