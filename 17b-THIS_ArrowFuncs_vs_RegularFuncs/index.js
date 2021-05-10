"use strict";
//THIS Keyword + 'this' pitfalls

// 'this' keyword/variable: Special variable that
//is created for every execution context (every
//function). Takes the value of (points to) the
//“owner” of the function in which the 'this' keyword
//is used (called).

// ☝ 'this' is NOT static. It depends on how the
//function is called, and its value is only assigned
//when the function is actually called.

// Method: 👉 'this' is <Object that is CALLING the method>

// Simple function call 👉 'this' is 'undefined'
//In strict mode! Otherwise: 'window' (in the browser)

// Arrow functions: 👉 'this' is <this of surrounding
//(parent) function (lexical this)>
//Don’t get own 'this'

// Event listener: 👉 'this' is <DOM element that
//the handler is attached to>

// 'new', 'call', 'apply', 'bind'

//☝ 'this' does NOT point to the function itself,
//and also NOT the its variable environment!

///////////////////////////////////////

let today = new Date().getFullYear();

//----------------------------------------------------
//1) 'this' is a window object in the global scope:
console.log(this); //Window {window: Window, self: Window, document: document, name: "", location: Location, …}

///////////////////////////////////////

// Regular Functions vs. Arrow Functions
//======!!! NEVER USE ARROW FUNC AS METHOD IN OBJECT======

//'zhur' is not block scope! It is an Object
// literal => simple Object!!!
const zhur = {
  firstName: "Zhurka",
  year: 1972,
  //-----------------------
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
  //===========================
  //1) NEVER USE ARROw FUNCS AS METHODS=>
  //use function expression instead (2)!!!
  greet: () => {
    //arrow func does not get its own 'this' keyword,
    //it simply uses the 'this' keyword from its
    //surroundings => its parents 'this' keyword.
    //'zhur' is not a block scope, it is Object literal,
    //that is why all methods of 'zhur' is in the
    //GLOBAL scope (window)
    console.log(this); //window===global scope
    console.log(`Hey ${this.firstName}`); //Hey undefined
  },
  //===============================
  //2) func expression: it gets its own 'this' keyword
  //function EXPRESSION produces value =>
  //is good for creating 'method' in Object
  sveikt: function () {
    console.log(this); //{firstName: "Zhurka", year: 1972, calcAge: ƒ, greet: ƒ, sveikt: ƒ}
    console.log(`Sveiks, ${this.firstName}`); //Sveiks, Zhurka
  },
  //========================
  //=========================
  //3)Fuctions inside methods:
  calcAge: function () {
    //'this' allows get 'year' property
    //directly from 'zhur' Object instead of having
    //to pass it as a parameter into this function.
    //'This' is equal to this object 'zhur',
    //object which calling the method=> zhur.calcAge()

    console.log(this); //{name: "Zhurka", year: 1972, calcAge: ƒ}
    //----------------------
    console.log(today - this.year); //49
    //this.year is a way better than using zhur.year!
    // 3a)---------
    //Problem:
    const isMillenial = function () {
      console.log(this); //undefined
      //Why is undefined? Because isMillenial();
      //is really just a regular function call.
      //The rule says that inside a regular function
      //call, the 'this'keyword' must be 'undefined'
      //So 'this' here is 'undefined.
      //Even if the function is outside an Object,
      //the result will be the same (3b)
      // Simple function call 👉 'this' is 'undefined'
      //In strict mode! Otherwise: 'window' (in the browser)
      //!!!BUT simple function does get own 'this' keyword.
      //----------------------
      // console.log(this.year >= 1981 && this.year <= 1996);
      //Uncaught TypeError: Cannot read property 'year' of undefined
    };
    // ======Solution 1
    //set extra variable to 'this' because
    //'self' is outside isMillenial_1 function
    //and 'self' has access to the 'this' keyword
    //set to 'zhur':
    const self = this; //'self' preserves 'this' keyword
    const isMillenial_1 = function () {
      //'self' is not in the scope,
      //so JS goes up the scope chain into the
      //parent scope, which is calcAge
      console.log(self); //firstName: "Zhurka", year: 1972, calcAge:
      console.log(self.year >= 1981 && self.year <= 1996); //false
    };
    //===== Solution 2
    //ES6 solution: use arrow function!
    //Arrow func does not have its own 'this' keyword.
    //It will use 'this' keyword of parent scope =>
    //calcAge method:
    const isMillenial_2 = () => {
      console.log(this); //{firstName: "Zhurka", year: 1972, calcAge:
      console.log(this.year >= 1981 && this.year <= 1996); //false
    };
    isMillenial();
    isMillenial_1();
    isMillenial_2();
  },
};
//1a) arrow func uses parent scope, in this
//case the 'window' and there is no "firstName"
// property, so 'undefined'
zhur.greet(); //undefined
//-----BUT!!!!------------------
var firstName = "Ksju";
//1b) 'var' creates in global scope its own property!
//so in the 'window' there is 'firstName' property!!!
zhur.greet(); //Hey Ksju
//-----------------
//2)
zhur.sveikt();

zhur.calcAge();
//======================
//3b) !!!
const iMillenial = function () {
  console.log(this); //undefined
  //Why is undefined? Because isMillenial();
  //is really just a regular function call.
  //The rule says that inside a regular function
  //call, the 'this'keyword' must be 'undefined'
  //So 'this' here is 'undefined
  // console.log(this.year >= 1981 && this.year <= 1996);
  //Uncaught TypeError: Cannot read property 'year' of undefined
};
iMillenial();

//======================
// ARGUMENTS keyword
//4) Functions get access to 'arguments' keyword
//"arguments" is only aviable on regular functions
//(func expressions & func declaration)

//func expression:
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5); //Arguments(2) [2, 5, callee: (...), Symbol(Symbol.iterator): ƒ]
addExpr(2, 5, 8, 12); //Arguments(4) [2, 5, 8, 12, callee: (...), Symbol(Symbol.iterator): ƒ]

//arrow function:
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8); //Uncaught ReferenceError: arguments is not defined
