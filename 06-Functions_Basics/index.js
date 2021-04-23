// NB: A variable declared in a function only exists inside that function.
// However, a function can access variables declared outside of its scope.
//It can also be passed input via arguments.
// input -> performs an action
// input -> returns some data

//-Function is Value
//-Function without 'return' doesn't produce
//any value. Return from function and save into variable.

"use strict";

const user1 = "Reed";
const user2 = "Doug";
const text1 = "Hi!";
const text2 = "Hello!";

///////////////////////////////////////
// Function Declarations vs. Expressions

// FUNCTION DECLARATION/STATEMENT
//What is Function Statement/Declarations in JavaScript?
//The function statement declares a function. A declared
//function is “saved for later use”, and will be executed
//later, when it is invoked (called). Just as Variable
//Declarations must start with “var”, Function
//Declarations must begin with “function”.

//Function declarations are hoisted but function expressions are not.
//FD can be used before it's declared

//FD needs a name.

//function declaration with 2 parameters('placeholders')
//parameters===local variables
function chat(user, text) {
  return `User ${user} says: ${text}`;
}

//argument=='actual value' for function
//to fill in that 'placeholder'parameter
const message1 = chat(user1, text1);
const message2 = chat(user2, text2);

console.log(message1);
console.log(message2);
//--------------------

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
//save 'juice' (return from function fruitProcessor)
const appleJuice = fruitProcessor(5, 0); //arguments
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//-------------------
//calling-running-invoking the function:
//- FD can be called before it is defined
//in the code!
const num = calcNum(100);

function calcNum(number) {
  return 1000 - number;
}
console.log(num); //

//=====================
//Main difference between FD vs FE:
//- FD can be called before it is defined in the code!

//======================

// FUNCTION EXPRESSION
// (assigned to a variable)
//-expression produces a value => (ex.,friends.length-1)
//FE assign all values to variable
//(a function value stored in a variable)

//Function declarations are hoisted but function expressions are not.
//- FE can't be called before it is defined in the code!
//calling-running-invoking the function:
// const age2 = calcAge2(1991);
//Uncaught ReferenceError: can't access lexical declaration 'calcAge2' before initialization

const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};
//calling-running-invoking the function:
const age2 = calcAge2(1991);
console.log(num, age2);

//Arrow function is also Function Expression
const calcAge3 = (birthYeah) => 2037 - birthYeah;

//======================
// Challenge: Write a function splitBill() that lets you know how much
// you need to pay to split any bill between you and your friends.
// It should return a message with a number.

// Write your code below:
function splitBill(amount, friends) {
  return `Each person needs to pay ${amount / friends}`;
}
// Testing your solution
console.log(splitBill(10, 2));
console.log(splitBill(16, 4));
console.log(splitBill(350, 9));

//==========================

///////////////////////////////////////
// PROBLEM 1:
// We work for a company building a smart home thermometer.
//Our most recent task is this: "Given an array of temperatures
//of one day, calculate the temperature amplitude. Keep in mind
//that sometimes there might be a sensor error."
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?
// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    //ignore 'error': continue => move to next element
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min); // 17, -6
  //amplitude:
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude); //23

//=================================
// PROBLEM 2:
// Function should now receive 2 arrays of temps
// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays
// 2) Breaking up into sub-problems
// - Merge 2 arrays
const calcTempAmplitudeNew = function (t1, t2) {
  //merge 2 arrays:
  const temps = t1.concat(t2);
  console.log(temps); //Array(6) [ 3, 5, 1, 9, 0, 5 ]

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    //ignore 'error': continue=>move to next element
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min); // 9, 0
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew); //9

///////////////////////////////////////
///////////////////////////////////////
// Coding Challenge #1

// Given an array of forecasted maximum temperatures,
// the thermometer displays a string with these temperatures.
// Example: [17, 21, 23] will print
// "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Create a function 'printForecast' which takes in an array 'arr'
// and logs a string like the above to the console.
const tempArr = [17, 21, 23];
const printTemp = (tempArr) => {
  for (let i = 0; i < tempArr.length; i++) {
    console.log(`... 🌡${tempArr[i]}ºC in ${i + 1} days`);
  }
};
printTemp(tempArr);
//--------------OR witn MAP:
let result = "";
const foreCastTemp = (tempArr) => {
  result = "... " + tempArr.map((temp, index) => `${temp}ºC in ${index + 1} days`).join(" ... ");
  console.log(result);
};
foreCastTemp(tempArr);
//-------------------OR with REDUCE ----
let res = "";
const forecastTemps = (tempArr) => {
  res = tempArr.reduce((str, currTemp, index) => str + `... ${currTemp}ºC in ${index + 1} days `, "");
  console.log(res);
};
forecastTemps(tempArr);

// Use the problem-solving framework:
// Understand the problem and break it up into sub-problems!

// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]

/*
// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1
// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console */
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
// console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log("..." + str);
};
printForecast(data1);
printForecast(data2);
