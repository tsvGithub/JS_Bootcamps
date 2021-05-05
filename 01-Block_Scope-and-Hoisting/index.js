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
    console.log(add(2, 3)); //Uncaught ReferenceError: add is not defined
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
console.log(age);
//Uncaught ReferenceError: age is not defined at index.js:75
//'age' is in 'calcAge' block scope!!! it is not seen outside 'calcAge' block scope!!!
//---------------
printAge(); // doesn't work because of inner scope => it is not seen outside the the calcAge function!
