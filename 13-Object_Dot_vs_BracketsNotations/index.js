// Values in an object can be changed or updated using the dot syntax:
// colors.red = '#f00';
// We can add properties to objects (as long as they are valid strings)
// by using quotes. This can include spaces:
// 'yellow Color': '#ff0',

// The square brackets notation ([]) allows us to get values with spaces.
// console.log(colors['yellow Color']);
// We can also use the square brackets notation to dynamically add
// new key-value pairs to our object:
// const colors = {
//   'yellow Color': '#ff0',
//   blue: "#f00",
//   orange: "#f60",
//   [color]: hexCode
// };
// The delete operator allows us to remove a property:
// delete colors['yellow Color']

//====================================

//DOT NOTATION to GET & MODIFY values for static values (not updating the key)
//BRACKETS NOTATION to GET & MODIFY values for dinamic values

//==================================

let color;
let hexCode;

//!!! The "const" doesn't allow the variable to
//change values for primitives, but the contents
//of objects and arrays are allowed since you're
//not changing the variable. You can't, say,
//change a constant from an object to a number,
//but you can modify the contents of the object.
const colors = {
  //if key is from separate words => use ""
  "yellow Color": "#ff0",
  blue: "#f00",
  orange: "#f60",
  //add key-value with brackets notation:
  // [color]: hexCode,
};

//dot notation:
console.log(colors.orange); //#f60
//----------!!!
//scuare brackets notation:
//orange ===> 'string' => use in [""] !!!
// console.log(colors[orange]); //undefined
console.log(colors["orange"]); //#f60

//=================================
//!!!   BRACKETS NOTATION   !!!
//scuare brackets notation []
//When working with bracket notation,
//property identifiers (KEY) only have to be a STRING.
//They can include any characters, including spaces.
//VARIABLES may also be used as long as the variable
//references a String.
//objectName["propertyName"]

//brackets notation:
let obj = {
  cat: "meow",
  dog: "woof",
};
let dog = "cat";
let sound = obj[dog]; //=> obj[let dog] not obj[obj.dog]
console.log(sound); // meow
//Be careful, it may look like we are looking for
//the "dog" property in our "obj", but that’s not entire correct.
// 'dog' is a variable with a value of 'cat'.
// Since we’re using brackets, the string value is passed in
//and we search for the 'cat' (key) property — obj["cat"].
//Thus, "meow" is logged to the console.
//----
//dot notation:
let obj = {
  cat: "meow",
  dog: "woof",
};
let dog = "cat";
let sound = obj.dog; // => obj.dog not obj[let dog]
console.log(sound); // woof
//This is very different from the other example and
//it’s because we can’t use variables with dot notation.
//Attempting to lookup "obj.dog" will actually just
//look for the string value of 'dog' within our object
//instead of using the variables value.
//Thus, obj.dog returns "woof".
//==============================

//object["key name as a string"]
console.log(colors["yellow Color"]); //#ff0
//-----------
// [] notation for using key dinamically:
//key is based on a variable that can change

color = "green";
hexColor = "#0f0";

//set color with brackets notation to colors object
colors[color] = hexColor;
console.log(colors[color]); //#0f0
console.log(colors); //..., green: "#0f0",...

//-------------------------------------
//UPDATE value:
//dot notation
colors.red = "#foo";
colors.red = "#f00";

// [] notation:
let sunrise;
//without "quotes" doesn't work!Use ""!!!
// colors[sunrise] = "#f71";
//OK:
colors["sunrise"] = "#f71";
console.log(colors["sunrise"]);

//This doesn't work: WHY?
let sunsetColor = "#f99";
console.log(sunsetColor); //#f99
colors["sunsetColor"];
//is undefined:
console.log(colors["sunsetColor"]);
//Because variable 'sunsetColor' has its value "#f99",
//when I set 'sunsetColor' to the 'colors' object,
//actually, I try to set "#f99" to the object!!!

//---This works:
let sunsetColor2;
colors["sunsetColor2"] = "#f55";
//if 'value' is a string then use quotes for KEY
console.log(colors["sunsetColor2"]); //"#f55"
console.log(colors); //... , sunsetColor2: "#f55", ...

//==================
//this doesn't update the object!
let sunset;
colors[sunset] = sunsetColor;
console.log(colors[sunset]); // "#f99"
console.log(colors); // ... undefined: "#f99"
// ===> for updating an object use 'quotes'
//for KEY!
//this updates the object:
let sunshine;
colors["sunshine"] = sunsetColor;
//if 'value' is a variable then use quotes for KEY
console.log(colors[sunshine]); // "#f99"
console.log(colors["sunshine"]); // "#f99"
console.log(colors); // ... sunshine: "#f99"

//DELETE PROPERTIES:
// delete colors.blue;
// delete colors["yellow Color"];

console.log(colors);

//----------------------------
//to access to value of colors object:
function getColor(key) {
  // I. dot notation is not working for the access
  // return colors.key; // => undefined
  //II.
  return colors[key];
}
// I. return colors.key; => undefined
// console.log(getColor("orange")); //null /undefined
// II.
console.log(getColor("orange")); //#f60
//==================
