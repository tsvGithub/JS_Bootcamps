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
