// Arrow functions allow us to write more concise
// code. They are:
// function expressions (assigned to a variable)
// anonymous (can't give them a name)

// Implicit returns mean that the value following
//the => is always returned, so the return keyword is not needed.
"use strict";

const username = "john";

const capitalize = (name) =>
  //return
  `${name.charAt(0).toUpperCase()}${name.slice(1)}`;

function greetUser(name, callback) {
  return callback(capitalize(name));
}
//greetUser with 2 parametrs: 'username' + func with parametr 'name'
const result = greetUser(
  username,
  (name) =>
    //return
    `Hi there, ${name}!`
);

console.log(result);

//========================
// Arrow functions

// function expressions (assigned to a variable)
//implicit return
const calcAge3 = (birthYeah) => 2037 - birthYeah;
//call/run/invoke
const age3 = calcAge3(1991);
console.log(age3);

//explicit return
//parameters=='placeholders'
const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};
//arguments=='actual values'
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

//================================
// Challenge: Rewrite your first function from a previous challnge to be an arrow function.
// Stretch goal: Rewrite counting down closure in arrow function form.

// function splitBill(amount, numPeople) {
//     return `Each person needs to pay ${amount / numPeople}`
// }
//------------------------
const splitBill = (amount, numPeople) => `Each person needs to pay ${amount / numPeople}`;
// const splitBill = (amount, numPeople) => {
//   return `Each person needs to pay ${amount / numPeople}`;
// };

console.log(splitBill(10, 2));
console.log(splitBill(10, 4));
console.log(splitBill(10, 5));

//=====================
// function countdown(startingNumber, step) {
//   let countFromNum = startingNumber + step;
//   return function decrease() {
//     countFromNum -= step;
//     return countFromNum;
//   }
// }
//---------------------------
// const countdown = (startingNumber, step) => {
//   let countFromNum = startingNumber + step;
//   let decrease = () => {
//     countFromNum -= step;
//     return countFromNum;
//   };
//   return decrease;
// };
const countdown = (startingNumber, step) => {
  let countFromNum = startingNumber + step;
  return () => (countFromNum -= step);
};

const countingDown = countdown(10, 1);

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());

///////////////////////////////////////
// Coding Challenge #1

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// HINT: To calculate average of 3 values, add them all together and divide by 3
// const calcAv = (a, b, c) => {
//   let score;
//   Math.round((score = (a + b + c) / 3));
//   return score;
// };
const calcAv = (a, b, c) => Math.round((a + b + c) / 3);
// 2. Use the function to calculate the average for both teams
let avgDolhins = calcAv(44, 23, 71);
// let avgDolhins = calcAv(85, 54, 41);
console.log(`Dolphins' score is ${avgDolhins}`); //46
// TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
let avgKoalas = calcAv(65, 54, 49);
// let avgKoalas = calcAv(23, 34, 27);
console.log(`Koalas' score is ${avgKoalas}`); //56
// 3. Create a function 'checkWinner' that takes the average score
//of each team as parameters ('avgDolhins' and 'avgKoalas'), and then
//logs the winner to the console, together with the victory points,
//according to the rule above. Example: "Koalas win (30 vs. 13)".
// HINT: To check if number A is at least double number B, check for A >= 2 * B.
//Apply this to the team's average scores 😉
const checkWinnerA = (avgDolhins, avgKoalas) => {
  //d=46, k=56
  if (avgDolhins > avgKoalas * 2) {
    console.log(`Dolpins win 🙌 Koalas with score ${avgDolhins} : ${avgKoalas}`);
  } else if (avgDolhins * 2 < avgKoalas) {
    console.log(`Koalas win 👏 Dolpins with score ${avgKoalas} : ${avgDolhins}`);
  } else {
    console.log(`Nobody 😜win!`);
  }
};

checkWinnerA(avgDolhins, avgKoalas);
checkWinnerA(100, 201);

// 4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
// 5. Ignore draws this time.
// GOOD LUCK 😀

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));
// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);
// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
