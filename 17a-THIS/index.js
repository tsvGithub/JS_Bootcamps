"use strict";
//THIS Keyword

// 'this' keyword/variable: Special variable that
//is created for every execution context (every
//function). Takes the value of (points to) the
//“owner” of the function in which the 'this' keyword
//is used.

// ☝ 'this' is NOT static. It depends on how the
//function is called, and its value is only assigned
//when the function is actually called.

// Method: 👉 'this' is <Object that is CALLING the method>

// Simple function call 👉 'this' is 'undefined'
//In strict mode! Otherwise: 'window' (in the browser)

// Arrow functions: 👉 'this' is <this of surrounding (parent) function (lexical this)>
//Don’t get own 'this'

// Event listener: 👉 'this' is <DOM element that the handler is attached to>

// 'new', 'call', 'apply', 'bind'

//☝ 'this' does NOT point to the function itself, and also NOT the its variable environment!

///////////////////////////////////////

let today = new Date().getFullYear();

//----------------------------------------------------
//1) 'this' is a window object in the global scope:
console.log(this); //Window {window: Window, self: Window, document: document, name: "", location: Location, …}

//------------------
//2) FUNCTIONS:
// Simple function call 👉 'this' is 'undefined'
//In strict mode! Otherwise: 'window' (in the browser)
//!!!BUT simple function does get own 'this' keyword.
const calcAge = function (birthYear) {
  console.log(today - birthYear); //49
  console.log(this); //undefined
};
calcAge(1972);

//------------------
//3) ARROW FUNCTION:
// Arrow functions: 👉 'this' is <this of surrounding
// (parent) function (lexical this)>
//Arrow function don’t get own 'this'.
const calcAgeArrow = (birthYear) => {
  console.log(today - birthYear); //32
  console.log(this); //Window {window: Window, self: Window, document: document, name: "", location: Location, …}
};
calcAgeArrow(1989);
//--------------------

//===============================

//4) METHODS
//function attached to object is 'method':
// 'this' points to the <Object that is calling the method>

//----------------
//function EXPRESSION produces value =>
//is good for creating 'method' in Object,
//NB!function DECLARATION:
// function calcAge(birthYear) {
// //   return 2021 - birthYear;
// }won't work
//-----------------------

const zhur = {
  name: "Zhurka",
  year: 1972,
  calcAge: function () {
    //'this' allows get 'year' property
    //directly from 'zhur' Object instead of having
    //to pass it as a parameter into this function.
    //'This' is equal to this object 'zhur',
    //object which calling the method=> zhur.calcAge()

    console.log(this); //{name: "Zhurka", year: 1972, calcAge: ƒ}
    //-----------------
    console.log(this.year); //1972
    console.log(today - this.year); //49
    //this.year is a way better than using zhur.year!
  },
};
// console.log(zhur); //{name: "Zhurka", year: 1972, calcAge: ƒ}
zhur.calcAge();

//---------------------
// 'this' points to the Object that is
//CALLING (not creating!) the method
//5)
const ksju = {
  year: 2003,
};
//'METHOD BORROWING':
//copy calcAge method from 'zhur' to 'ksju'
ksju.calcAge = zhur.calcAge;
console.log(ksju); //{year: 2003, calcAge: ƒ}
ksju.calcAge(); //18

//--------------------
//6) copy method to function func:
const func = zhur.calcAge;
//Uncomment the following line =>
// func(); //undefined
//Uncaught TypeError: Cannot read property 'year' of undefined
//This happens because 'func' function is just
//a regular function called. It is not attached to
//any object. There is no owner function anymore.
//And therefore it is just a regular function,
//just like (2)'calcAge' function (see above),
//where 'this' is 'undefined'!!!
