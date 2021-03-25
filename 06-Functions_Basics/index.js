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
//-expressions produce values => FE assign
//all values to variable
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
