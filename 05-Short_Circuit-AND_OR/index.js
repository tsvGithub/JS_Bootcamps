"use strict";
// We can make conditionals shorter with logical
//operators such as || (or) and && (and).
//This is known as short-circuiting

// NB: Operator Precedence (the order in which
//operations are performed) means that && will
//be performed before ||.
// If we need to change this, we can use parentheses (()),
//which have the highest operator precedence of all:
// const username = isEmailVerified && (response || "guest");

// Logical Operators &&, || and NOT
// && => A & B all are true
//          A
//     AND TRUE FALSE
// B| TRUE TRUE FALSE
//   FALSE FALSE FALSE

// || => A or B  one is true
//          A
//     OR TRUE FALSE
// B| TRUE TRUE TRUE
//   FALSE TRUE FALSE

// ! inverts true/false value

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision); //true
// console.log(hasDriversLicense || hasGoodVision); //true
// console.log(!hasDriversLicense); //false

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');//+
// } else {
//   console.log('Someone else should drive...');
// }
const isTired = false; // C

console.log(hasDriversLicense && hasGoodVision && isTired); //false

// if (hasDriversLicense && hasGoodVision && !isTired) {//true
//   console.log("Sarah is able to drive!"); //+
// } else {
//   console.log("Someone else should drive...");
// }

//====================
//=====================

const response = "Zhur";
const isEmailVerified = true;
let username;
//IF:
if (response) {
  username = response;
} else {
  username = "guest";
}
//Ternary:
username = response ? response : "guest";

//Short-Circuit
username = response || "guest";
// username = "Gina" || "";

// =================================================================
//multiple conditions:
//if
if (response) {
  if (isEmailVerified) {
    username = response;
  }
} else {
  username = "guest";
}

//Short-Circuit for multiple conditions
//if first is true => return it; ||
//otherwise return the second
const username1 =
  //returns true if both are true
  //------------
  //!!!NB in order to return user name to username
  //it has to be second condition ('response')
  //in && operator!!!
  (isEmailVerified && response) ||
  // or false
  "guest";

//Operator precedence
//1) ()
//2) &&
//3) ||

console.log(username1);

//==========================
//=================================
//********SHORT CIRCUITING*********
//'OR':
//Use for setting default values.
//1)is 'true' if one of the operators is 'truthy'
//2)returns FIRST 'truthy' value or the LAST value,
//if all operands all 'falsy'.

//If the first value is a truthy value, it
//will immediately return that first value,
//the second operator will not even be evaluated.
console.log(3 || "Zhur"); //3
//returns 'truthy' string:
console.log("" || "Zhur"); //"Zhur"
console.log(true || 0); //true
console.log(undefined || null); //null =>
//'undefined'===falsy & null ===falsy : returns
//the last value.

console.log(undefined || 0 || "" || "Hello" || 23 || null);
//'Hello'

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
//'guests' is 'numGuests' or default value:
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests); // 10
//Object 'restaurant' does not have the property
//'numGuests', so it is 'undefined' || 10 =>
//will return 10

restaurant.numGuests = 23;
console.log(restaurant.numGuests); //23
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
//Object 'restaurant' has the property
//'numGuests', so it is  23 || 10 =>
//will return 23
console.log(guests1); //23

const guests2 = restaurant.numGuests || 10;
console.log(guests2); //23

//!!!NB If
restaurant.numSeats = 0; //0===false
//teranry & short circuiting won't work!!!
const seats1 = restaurant.numSeats ? restaurant.numSeats : 10;
const seasts2 = restaurant.numSeats || 10;
console.log(seats1, seasts2);
//10 10

//-----------------------------
//-------------------------------
//'AND':
//Uses for execute code in the SECOND OPERAND,
//if the first one is true.
//1) Will return the FIRST 'FALSY' value
//or the LAST 'TRUTHY' value if all of
//them are 'truthy'.

//If the first value is 'falsy' it will
//immediately return 'false' value without
//even evaluate the second value
console.log(0 && "Zhur"); // 0
//if the first value is 'truthy', then the
//second value will return.
console.log(7 && "Zhur"); // 'Zhur'
console.log(7 && 0); // 0

console.log("String" && 23 && null && "Zhur");
//null
//when 'truthy' evaluetion is continued untill
//false operator and will return it.

//Check if the method 'orderPizza' is exists and
//if it is, call it:
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}
//mushrooms
// ["spinach"]

//or un that way with Short Circuit:
//1) if restaurant.orderPizza does not exist,
//so it's undefined, it will then short circuit
//the evaluetion and nothing else will happen.
//If restaurant.orderPizza does exist, if it
//a truthy part, then the second part here will
//be evaluated. And the second operand will
//call the function with arguments:
restaurant.orderPizza && restaurant.orderPizza("tomatos", "cheese");
//tomatos
// ["cheese"]

//============================
//===========================
/* Challenge 1: Let's say you're building Reddit. Only users that are either moderators or have reached a certain karma threshold are allowed to upvote. */

const karma = 143;
const isModerator = true;

// first use a ternary to set hasEnoughKarma to true if karma is above 100. If not, set it to false
let hasEnoughKarma;
hasEnoughKarma = karma > 100 ? true : false;

//  set the value of canUpvote with short-circuiting (using hasEnoughKarma and isModerator)
let canUpvote;
canUpvote = hasEnoughKarma || isModerator;

console.log("canUpvote:", canUpvote);

/* Challenge 2: Let's say that only moderators who have enough karma are allowed to delete posts.  How would you set the canDelete variable */

// set canDelete to true if both hasEnoughKarma and isModerator is true
let canDelete;
canDelete = hasEnoughKarma && isModerator;

console.log("canDelete:", canDelete);

// Challenge 3:
//what is the value of user?
//What if you switch the hasValidEmail
//variable to false?
//What if the response is empty?

const response1 = "JohnDoe";
const hasValidEmail = true;
const user = hasValidEmail && (response1 || "guest");
// console.log("user: ", user); //JohnDoe
// console.log("user: ", user); //false
// console.log("user: ", user); //guest

//================
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. 
They compete against each other 3 times. The winner 
with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
*/
let dolphinsAverScore = Math.round((96 + 108 + 89) / 3);
console.log(dolphinsAverScore); //98
let koalasAverScore = Math.round((88 + 91 + 110) / 3);
console.log(koalasAverScore); //96
//2. Compare the team's average scores to determine the winner of the competition,
//and print it to the console. Don't forget that there can be a draw, so test for
//that as well (draw means they have the same average score).
if (dolphinsAverScore > koalasAverScore) {
  console.log(`Dolphins won with score ${dolphinsAverScore} : ${koalasAverScore}`);
} else if (dolphinsAverScore < koalasAverScore) {
  console.log(`Koalas won with score ${koalasAverScore} : ${dolphinsAverScore}`);
} else {
  console.log(`There is a draw with score ${dolphinsAverScore} : ${koalasAverScore} `);
}
//Dolphins won with score 98 : 96

/*
3. BONUS 1: Include a requirement for a minimum score of 100. 
With this rule, a team only wins if it has a higher score than t
he other team, and the same time a score of at least 100 points. 
HINT: Use a logical operator to test for minimum score, as well 
as multiple else-if blocks 😉 */
const minScore = 100;
if (dolphinsAverScore > minScore > koalasAverScore) {
  console.log(`Dolphins won with score ${dolphinsAverScore} : ${koalasAverScore}`);
} else if (dolphinsAverScore < (koalasAverScore > minScore)) {
  console.log(`Koalas won with score ${koalasAverScore} : ${dolphinsAverScore}`);
} else if (dolphinsAverScore === koalasAverScore) {
  console.log(`There is a draw with score ${dolphinsAverScore} : ${koalasAverScore} `);
} else {
  console.log(`There is no winner with score Dolphins ${dolphinsAverScore} and Koalas ${koalasAverScore}`);
}
//There is no winner with score Dolphins 98 and Koalas 96

/*
4. BONUS 2: Minimum score also applies to a draw! 
So a draw only happens when both teams have the same score a
nd both have a score greater or equal 100 points. Otherwise, no team wins the trophy.
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK 😀
*/
