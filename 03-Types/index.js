/* Primitive types:
string: ''
number: 23
boolean: true/false
undefined: variable is not yet defined 'empty value'
null: 'empty value'
symbol (ES2015): value is unique & can't be changed
BigInt (ES2020): Larger intengers than the Number type can hold
------
everything else - Object type
========
JS has dynamic typing: data types are determined automatically
========*/

//TYPEOF
// let message = "some string";
// console.log(typeof message);
// console.log(typeof 42);
// console.log(typeof true);
// console.log(typeof window); // object
console.log(typeof null); //object (bug)
//-----------------------------------
// Type Conversion and Coercion

//HOW TO CONVERT TYPES:
//convertion(manually) & coercion(automaticly)

// type conversion
// 1) Explicit type conversion => String()
// console.log(String(42)); //'42' ===string
// console.log(Boolean(message)); //true ===boolean
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear); //1991 '1991'
// console.log(Number(inputYear) + 18); //2009
// console.log(Number("Jonas")); //NaN
// console.log(typeof NaN); //number
// console.log(String(23), 23); //'23'

// type coercion
// 2) Implicit (automatic) type conversion
//(coercion===prinuzhdenie) => JS does it
//automatically:
//console.log('1' * '2') //2===number
//console.log('10' + 20) //1020===string
//console.log(10 + '20') //1020===string
//console.log('10' * 20) //200===number
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);//10
// console.log("23" + "10" + 3);//23103
// console.log("23" / "2");//11.5
// console.log("23" > "18");//true
// let n = "1" + 1; // '11' <-string
// n = n - 1;
// console.log(n);//10 <-number because of (-1)

//!!!  Implicit (automatic) conversion to boolean
//conditionals: if(value){} => value converts into boolean
//conditionals: switch(value) => value converts into boolean
//or ternaries(value) => value converts into boolean

//1) if(value){//if true, do something with "value"}
//the 1) is the same as 2)
//2) if (Boolean(value) === true) {
//   //if true, do something with "value"
// }
//----------------------------------

//TRUTHY / FALSY
// truthy (true)
// falsy (false)

//to check if varriable is falsy => if-else!
// let num; (0;"",null,NaN)
// if (num) {
//   console.log('run');
// } else {
//   console.log('skipped');
// }
//result => skipped

//FALSY:
// false (+)
// 0
// ''
// null (+)(===empty)
// undefined (+)
// NaN

// console.log(undefined); //false
// console.log(!undefined); //ture (!not)
// console.log(Boolean(NaN)); //false

// console.log(Boolean(0)); //false
// console.log(Boolean("0")); //true

// console.log(Boolean("")); //false
// console.log(!!"hello"); //true=>(!(not)+!(not))
// console.log(!"hello"); //false (!not)

// console.log(null); //false
// console.log(!null); //true

// console.log(Boolean({})); //true

// console.log(false === false); //true
// console.log(5 === "5"); //false
// console.log("Hello" == "hello"); //false

//-----------------
// 1) Avoid direct comparisons in conditionals
// const username = "";
// if (username === false) {
//   console.log("no user");
// }

//better way:
// const username = ""/null/undefined;
// if (!username) {
//   console.log('no user');
// }
//all results=>no user

// 2) Use triple equals === or !== (strict
//equals operator) not double equals ==
// or != (loose equals) and convert manually

// if (null === undefined) {
//   console.log('equals');
// } else {
//   console.log('not equals');
// }
//result => not equals

// const favNum = prompt("Your favourite number is:");
// console.log(favNum); //'23'
// console.log(typeof favNum); //string
// if (favNum === 23) {
//   console.log("23 is your favourite number");
// } //doesn't work! as favNum is string
// if (favNum == 23) {
//   console.log("23 is your favourite number");
// } //work! unless favNum is string!

// 3) Convert to real Boolean values where needed
// if (Boolean(NaN) === Boolean(NaN)) {
//   console.log("equal");
// } else {
//   console.log("not equals");
// }
//result => equal
