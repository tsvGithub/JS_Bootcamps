"use strict";

//The block scope in JS simply can be defined as a set
//of opening and closing curly brackets.
//Therefore, using variables with blocking scope helps a
//lot in keep the global scope less polluted.
//Also, it helps reducing the chances of errors to occur
//because of variables with same name disturbing the logic
//and flow.

var price = 20;
var isSale = true;

if (true) {
  var num = 42;
}
num = "str";
console.log(num); //=> str

//NB! var hoists!  - variable shadowing; var is function scoped!
//let & const - block-scoped; they only exist in that scope
if (isSale) {
  // discount price of product
  var price = 20 - 2;
  console.log("sale price", price); //=> sale price 18
}

console.log("price", price); //=>price 18
//'price''in 'if'(22.line) overwrites the 'price' (9.line)!!
//USE LET OR CONST instead in scope!

//***********************   LET   ******************* */
let a = 24;
//let & const - block-scoped; they only exist in that scope
if (true) {
  let a = 42;
  console.log("a", a); //=> a 42
}

console.log(a); //=> 24

//===================================
//===================================
//===================================
// Scoping:
//child can look in parent scope (outer scope);
//parent can't look in child scope (inner scope)!

//CONST & LET are block scoped variables!!!
//VAR is function scoped variable & it ignores block scope!!!

function calcAge(birthYear) {
  const age = 2037 - birthYear; //block scope variable is seen only in this function &  in its child 'printAge'
  // console.log(firstName);
  function printAge() {
    //firstName is global variable (outer scope);
    //age is parent function scope variable (outer scope);
    //birthYear is parent function scope variable (outer scope);
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output); //Zhur, you are 65, born in 1972
    //-----------
    //block scope:
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = "Steven";
      // Reasssigning outer scope's variable
      output = "NEW OUTPUT!";
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      //---------------
      function add(a, b) {
        return a + b;
      }
    } else {
      //-----------------------
      // Creating NEW variable with same name as outer scope's variable
      // const firstName = "Steven";// will be 'Steven'!

      //------------------
      //function scoped variable
      var millenial = false;
      //block scoped variable
      const str = `Oh, and you're not a millenial, ${firstName}`;
      console.log(str);
      //Oh, and you're not a millenial, Zhur
      //"Zhur" is found in global (outer) scope!
      //--------------------------------
      function add(a, b) {
        return a + b;
      }
      // Reasssigning outer scope's variable changes it!
      output = "NEW OUTPUT!"; //NEW OUTPUT!
    }
    //--------------
    //if call  CONST 'str' outside the scope=>
    // console.log(str); //Uncaught ReferenceError: str is not defined

    //if call VAR 'millenial' outsude the scope =>
    //VAR is function scoped & it ignores block scope
    //and works in function scope!!!
    console.log(millenial); // false
    //---------------
    //'add' function scope is 'if-else' scope:
    //***NB!Uncomment next line: =>
    // console.log(add(2, 3)); //Uncaught ReferenceError: add is not defined
    //functions are not block scoped in 'strict mode'!!!
    // console.log(add(2, 3)); // 5 => without 'strict mode'

    //re-assigned variable:
    console.log(output); //NEW OUTPUT
  }
  printAge();
  return age;
}
const firstName = "Zhur"; //global scope variable (outer scope) is seen from anywhere
//calcAge have to be called after the firstName declaration!
calcAge(1972);
//--------------
//***NB!Uncomment next line: =>
// console.log(age);
//Uncaught ReferenceError: age is not defined at index.js:75
//'age' is in 'calcAge' block scope!!! it is not seen outside 'calcAge' block scope!!!
//---------------
//***NB!Uncomment next line: =>
// printAge(); // doesn't work because of inner scope => it is not seen outside the the calcAge function!

//=================================
//======== HOISTING & TDZ (temporal dead zone)===============
//Variable environment:
//Hoisting: Makes some types of variables accessible/usable
//in the code before they are actually declared.
//“Variables lifted to the top of their scope”.

// Variables
console.log(me); //undefined //var hoisted to undefined
//***NB!Uncomment next line: =>
// console.log(job); //Uncaught ReferenceError: Cannot access 'job' before initialization
//***NB!Uncomment next line: =>
// console.log(year);//Uncaught ReferenceError: Cannot access 'year' before initialization
var me = "Zhur"; //can call before initialization=> undefined
let job = "WebDev"; //can't call before initialization
const year = 1972; //can't call before initialization

// === FUNCTIONS ===
//OK:
console.log(addDecl(2, 3)); //5
// NOT OK:
//***NB!Uncomment next line: =>
// console.log(addExpr(2, 3)); //Uncaught ReferenceError: Cannot access 'addExpr' before initialization
console.log(addArrow); //undefined
//NOT OK:
//***NB!Uncomment next line: =>
// console.log(addArrow(2, 3));//Uncaught TypeError: addArrow is not a function
//------------------

//FUNCTION DECLARATION: can call before define code!
function addDecl(a, b) {
  return a + b;
}
//FUNCTION EXPRESSION: can't call before initialization
const addExpr = function (a, b) {
  return a + b;
};
//ARROW FUNCTION: can't call before initialization
var addArrow = (a, b) => a + b;

//-----------------
// Example
console.log(numProducts); //undefined
//3
if (!numProducts) deleteShoppingCart();
//2
var numProducts = 10;
//1
//function declaration:
function deleteShoppingCart() {
  console.log("All products deleted!");
}
//All products deleted! Even Products are 10!
//Because of hoisting of var: in if scope
//numProducts is undefined!!!! because it is before var initialization

//--------------
var x = 1;
//let & const don't create a property of the 'window' object!
let y = 2;
const z = 3;
console.log(x === window.x); //true
console.log(y === window.y); //false
console.log(z === window.z); //false
